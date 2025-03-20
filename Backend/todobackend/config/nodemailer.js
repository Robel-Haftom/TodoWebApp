import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  auth: {
    user: "8861bf002@smtp-brevo.com",
    pass: "JkEnmF9rLyqO7Q0a",
  },
});
export default transporter;
