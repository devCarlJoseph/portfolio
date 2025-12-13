import { resend } from "@/lib/resend";

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return Response.json({ error: "Missing fields" }, { status: 400 });
        }

        await resend.emails.send({
            from: "Clients <onboarding@resend.dev>",
            to: ["carljosephsumagang17@gmail.com"],
            replyTo: email,
            subject: `New message from ${name}`,
            html: `
        <h2> Hi Carl,</h2>
        <p>You’ve received a new message from a client through your website contact form.</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <p>Best regards,<br/>Carl Joseph Sumagang Portfolio</p>
      `,
        });

        return Response.json({ success: true });
    } catch (error) {
        console.error(error);
        return Response.json({ error: "Failed to send email" }, { status: 500 });
    }
}
