import expressAsyncHandler from "express-async-handler"
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "flickshot01234@gmail.com",
        pass: "arff zlri cdau wguj",
    },
});

export const sendEmail = expressAsyncHandler(async (req, res) => {
    const { email, subject, message } = req.body;
    // console.log(email, subject, message);
    var mailOptions = {
        from: "flickshot01234@gmail.com",
        to: email,
        subject: subject,
        html: message || "Hello this is mesage",
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error)
        }
        else {
            console.log("Email sent successfully")
            // console.log(mailOptions)
        }
    })
});

export const registerEmail = expressAsyncHandler(async (req, res) => {
    const { email } = req.body;
    console.log(email);
    var mailOptions = {
        from: "flickshot01234@gmail.com",
        to: email,
        subject: 'This is an email for successfull registration',
        html: "Thank you for registering at medicare.",
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error)
        }
        else {
            console.log("Registration Email sent successfully")
            console.log(mailOptions)
        }
    })
});




