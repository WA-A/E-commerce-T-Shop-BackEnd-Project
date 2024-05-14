import nodemailer from "nodemailer";


export async function SendEmail(to,subject,html){
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EmailSender,
            pass: process.env.PassSender,
        },
      });


      const info = await transporter.sendMail({
        from: `Wasan Email <${process.env.emailSender}>`, // sender address
        to , // list of receivers
        subject,  // Subject line
        html,  // html body
      });

      return info;
}