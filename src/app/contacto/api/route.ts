import sgMail from "@sendgrid/mail";

export async function POST(request) {
  const requestBody = await request.json();

  sgMail.setApiKey(process.env.SEND_GRID_API_KEY || "");

  const text = `
    <strong>De:</strong> ${requestBody.name} ${requestBody.surName} (${requestBody.email})
    <br/>
    <strong>Asunto:</strong> ${requestBody.subject}
    <br/>
    <strong>Mensaje:</strong> ${requestBody.message}
  `;

  const msg = {
    to: process.env.SENDER_EMAIL || "",
    from: process.env.SENDER_EMAIL || "", // Use the email address or domain you verified above
    subject: "Mensaje recibido desde la página web de Green Roots.",
    text: text,
    html: text,
  };

  try {
    await sgMail.send(msg);
  } catch (error: any) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }
  }

  return new Response("Hello, Next.js!");
}
