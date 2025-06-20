import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export function createContactRouter(db) {
  const router = express.Router();

  // Get mail configuration from environment variables
  const mailConfig = {
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: process.env.MAIL_SECURE === 'true',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  };

  // Submit contact form
  router.post('/submit', async (req, res) => {
    try {
      const { name, email, phone, subject, message } = req.body;

      // Validate required fields
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ 
          success: false, 
          message: 'Please provide all required fields' 
        });
      }

      // Save contact submission to database
      const [result] = await db.execute(
        'INSERT INTO contact_submissions (name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?)',
        [name, email, phone || null, subject, message]
      );

      // Send email notification if SMTP is configured
      if (process.env.MAIL_HOST) {
        const transporter = nodemailer.createTransport(mailConfig);

        await transporter.sendMail({
          from: `"Sownmark Website" <${process.env.MAIL_FROM || 'noreply@sownmark.com'}>`,
          to: process.env.CONTACT_NOTIFICATION_EMAIL || 'info@sownmark.com',
          subject: `New Contact Form Submission: ${subject}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong> ${message}</p>
          `,
        });
      }

      return res.status(200).json({ 
        success: true, 
        message: 'Your message has been sent successfully!' 
      });
    } catch (error) {
      console.error('Error processing contact form:', error);
      return res.status(500).json({ 
        success: false, 
        message: 'An error occurred while processing your request. Please try again later.' 
      });
    }
  });

  return router;
}