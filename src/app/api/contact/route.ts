import { NextResponse } from "next/server";
import { Resend } from "resend";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    const trimmedName = typeof name === "string" ? name.trim() : "";
    const trimmedEmail = typeof email === "string" ? email.trim() : "";
    const trimmedMessage = typeof message === "string" ? message.trim() : "";

    if (!trimmedName) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }
    if (!trimmedEmail) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }
    if (!trimmedMessage) {
      return NextResponse.json({ error: "Message is required." }, { status: 400 });
    }
    if (trimmedName.length > 120 || trimmedEmail.length > 180 || trimmedMessage.length > 2500) {
      return NextResponse.json({ error: "Message is too long." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY environment variable");
      return NextResponse.json(
        { error: "Email service is currently misconfigured. Please check back later." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const safeName = escapeHtml(trimmedName);
    const safeEmail = escapeHtml(trimmedEmail);
    const safeMessage = escapeHtml(trimmedMessage).replace(/\n/g, "<br />");

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "nikhilnamdev31@gmail.com",
      subject: `New portfolio message from ${trimmedName}`,
      replyTo: trimmedEmail,
      text: `Name: ${trimmedName}\nEmail: ${trimmedEmail}\nMessage: ${trimmedMessage}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 12px; background-color: #fafafa; color: #1f2937;">
          <h2 style="color: #0891b2; border-bottom: 2px solid #0891b2; padding-bottom: 8px; margin-top: 0;">New Contact Form Message</h2>
          <p style="margin-top: 16px;"><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> <a href="mailto:${safeEmail}" style="color: #0891b2; text-decoration: none;">${safeEmail}</a></p>
          <div style="margin-top: 20px; padding: 16px; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; white-space: pre-wrap;">
            <strong>Message:</strong><br/>
            ${safeMessage}
          </div>
          <footer style="margin-top: 24px; font-size: 11px; color: #9ca3af; text-align: center;">
            Sent from Nikhil Namdev Developer Portfolio
          </footer>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Unexpected error in contact route:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
