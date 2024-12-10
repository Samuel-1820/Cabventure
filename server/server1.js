const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Create a transporter
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'priyansh1797.be21@chitkara.edu.in', // replace with your email
      pass: 'anshpass6sem!!',  // replace with your email password
    },
  });

  // Mail options
  let mailOptions = {
    from: email,
    to: 'priyansh1797.be21@chitkara.edu.in', // replace with your email
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`, // Use backticks for template literals
  };

  // Send mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Error sending email: ' + error.message);
    }
    console.log('Message sent:', info.response);
    res.status(200).send('Message sent: ' + info.response);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`); // Use backticks for template literals
});
