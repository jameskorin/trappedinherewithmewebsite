var nodemailer = require('nodemailer');

export default async function handler(req, res) {
    
    const { sender, content } = req.body;

    console.log(sender);
    console.log(content);
    console.log(process.env.SUPPORT_EMAIL);
    console.log(process.env.EMAIL_PASSWORD);
    console.log(process.env.TO_EMAIL);

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.SUPPORT_EMAIL,
          pass: process.env.EMAIL_PASSWORD
        }
    });

    var mailOptions = {
        from: process.env.SUPPORT_EMAIL,
        to: process.env.TO_EMAIL,
        subject: `TIHWM - SUPPORT - ${sender}`,
        text: content
    };

    await transporter.sendMail(mailOptions);

    res.status(200).send(null);
}