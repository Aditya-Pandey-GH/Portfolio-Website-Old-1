const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 16091;

app.use(
	cors({
		origin: "https://aditya-pandey.vercel.app",
		methods: ["GET"],
		optionsSuccessStatus: 200,
		credentials: true,
	})
);
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
	service: "gmail",
	host: "smtp.gmail.com",
	port: 587,
	secure: false,
	auth: {
		user: process.env.EMAIL_ID,
		pass: process.env.PASSWORD,
	},
});

app.post("/api/send-email", (req, res) => {
	const { email, subject, message } = req.body;

	const mailOptions = {
		from: {
			name: "Adi's Portfolio",
			address: email,
		},
		to: ["adityapandey1609@gmail.com", email],
		subject: `${subject} sent you a message`,
		text: `${subject} sent you a message from ${email} :\n\n${message}`,
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			return res.status(500).send(error.toString());
		}
		res.status(200).send("Email sent: " + info.response);
	});
});

app.listen(port, () => {});
