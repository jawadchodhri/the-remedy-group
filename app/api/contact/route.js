import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, practice, email, phone, specialty, software, service, notes } = body;

    await resend.emails.send({
      from: "The Remedy Group <onboarding@resend.dev>",
      to: "mj28015@gmail.com",
      subject: `New Medical Billing Lead: ${name} (${practice || "Private Practice"})`,
      html: `
        <h2>New Client Inquiry Received</h2>
        <p><strong>Doctor / Client Name:</strong> ${name}</p>
        <p><strong>Practice / Clinic:</strong> ${practice || "N/A"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone / WhatsApp:</strong> ${phone}</p>
        <p><strong>Specialty:</strong> ${specialty || "N/A"}</p>
        <p><strong>EHR Software:</strong> ${software}</p>
        <p><strong>Service Requested:</strong> ${service}</p>
        <p><strong>Additional Notes:</strong> ${notes || "None"}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}