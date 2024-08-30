const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 16091;

app.use(cors());
app.use(bodyParser.json());

// MongoDB Backend
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => { console.log("MongoDB connected successfully to Adi's PortFolio"); })
	.catch((err) => { console.log(err); });

const users = require('./routes/users');
app.use('/api/users', users);

const acads = require('./routes/acads');
app.use('/api/acads', acads);

const xps = require('./routes/xps');
app.use('/api/xps', xps);

const techs = require('./routes/techs');
app.use('/api/techs', techs);

const langs = require('./routes/langs');
app.use('/api/langs', langs);

const dbs = require('./routes/dbs');
app.use('/api/dbs', dbs);

const welfares = require('./routes/welfares');
app.use('/api/welfares', welfares);

const certs = require('./routes/certs');
app.use('/api/certs', certs);

const achs = require('./routes/achs');
app.use('/api/achs', achs);

const personals = require('./routes/personals');
app.use('/api/personals', personals);

const profs = require('./routes/profs');
app.use('/api/profs', profs);

const socials = require('./routes/socials');
app.use('/api/socials', socials);

// --------------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------

// Email Backend
const transporter = nodemailer.createTransport({
	service: 'gmail',
	host: "smtp.gmail.com",
	port: 587,
	secure: false,
	auth: {
		user: process.env.EMAIL_ID,
		pass: process.env.PASSWORD
	}
});

app.post('/api/send-email', (req, res) => {
	const { email, subject, message } = req.body;

	const mailOptions = {
		from: {
			name: "Adi's Portfolio",
			address: email
		},
		to: ['adityapandey1609@gmail.com', email],
		subject: `${subject} sent you a message`,
		text: `${subject} sent you a message from ${email} :\n\n${message}`,
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			return res.status(500).send(error.toString());
		}
		res.status(200).send('Email sent: ' + info.response);
	});
});

// --------------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------

app.get('/', (req, res) => {
	res.json("LOL LMAO");
});

app.listen(port, () => {
	// console.log(`Server is running on port http://127.0.0.1:${port}`);
});
