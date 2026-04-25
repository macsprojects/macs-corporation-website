import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, subject, message } = body;

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Verify environment variables
    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO_EMAIL) {
      console.error('Missing email configuration. Please check .env variables.');
      return NextResponse.json(
        { error: 'Server email configuration is missing.' },
        { status: 500 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'MACS Corporation Website <onboarding@resend.dev>', // Update this to a verified domain when going to production
      to: [process.env.CONTACT_TO_EMAIL],
      subject: `[Business Inquiry] ${subject}`,
      html: `
        <h2>New Business Inquiry via MACS Corporation Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company/Organization:</strong> ${company || 'N/A'}</p>
        <br/>
        <h3>Message:</h3>
        <p style="white-space: pre-wrap;">${message}</p>
      `
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send inquiry. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Thank you. Your inquiry has been received. Our team will contact you soon.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
