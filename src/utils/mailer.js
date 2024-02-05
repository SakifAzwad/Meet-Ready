// mailer.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'enayetflweb@gmail.com',
    pass: process.env.NEXT_NODEMAILER_APP_PASSWORD,
  },
});

const sendMail = (to, subject, text) => {
  const mailOptions = {
    from: 'enayetflweb@gmail.com',
    to,
    subject,
    text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

module.exports = { sendMail };
