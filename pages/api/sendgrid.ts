import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

async function sendEmail(req: { body: { subject: string, email: string, message: string } }, res: { status: (code: number) => { json: (data: { error: string }) => void } }) {
  try {
    await sendgrid.send({
      to: "harrisonoates@outlook.com",
      from: "sdfgfgsfdgf@gmail.com",
      subject: `You have a new message from ${req.body.email}`,
      html: `<div>${req.body.message}</div>`,
    });
  } catch (error: any) {
    console.log(error.message);
  return res.status(error.code).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
