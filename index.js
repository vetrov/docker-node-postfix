'use strict';
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    sendmail: true
});

transporter.sendMail({
    from: 'sender@example.com',
    to: 'alex.vetrov@gmail.com',
    subject: 'Message',
    text: 'I hope this message gets delivered!'
}, (err, info) => {
    console.log(info);
    console.log(info.envelope);
    console.log(info.messageId);
});

setTimeout(() => {}, 24 * 60 * 60 * 1000);
