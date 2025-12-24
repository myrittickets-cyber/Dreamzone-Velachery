const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('.')); // Serve static files from current directory

// Email transporter configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD.replace(/\s/g, '') // Remove spaces from app password
    }
});

// Verify transporter configuration
transporter.verify((error, success) => {
    if (error) {
        console.error('❌ Email transporter error:', error);
    } else {
        console.log('✅ Email server is ready to send messages');
    }
});

// Route: Contact Form Submission
app.post('/api/contact', async (req, res) => {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            message: 'Please fill in all required fields'
        });
    }

    // Email to admin
    const adminMailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.ADMIN_EMAIL,
        subject: 'New Enquiry Form Registered - Contact Form',
        html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission - Dreamzone</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5; padding: 40px 20px;">
        <tr>
            <td align="center">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 40px rgba(233, 30, 99, 0.15);">
                    
                    <tr>
                        <td style="background: linear-gradient(135deg, #e91e63 0%, #ec407a 100%); padding: 40px 30px; text-align: center;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">New Contact Form Submission</h1>
                            <p style="margin: 10px 0 0 0; color: #ffffff; font-size: 16px; opacity: 0.95;">Dreamzone Velachery</p>
                        </td>
                    </tr>

                    <tr>
                        <td style="padding: 30px 30px 20px 30px;">
                            <div style="background: #fff3e0; border-left: 4px solid #ff9800; padding: 15px 20px; border-radius: 8px;">
                                <p style="margin: 0; color: #e65100; font-size: 14px; font-weight: 600;">📩 You have received a new inquiry</p>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td style="padding: 0 30px 30px 30px;">
                            
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 20px;">
                                <tr>
                                    <td style="padding: 20px; background-color: #fafafa; border-radius: 12px;">
                                        <p style="margin: 0 0 8px 0; font-size: 12px; color: #e91e63; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Name</p>
                                        <p style="margin: 0; font-size: 16px; color: #333333; font-weight: 600;">${name}</p>
                                    </td>
                                </tr>
                            </table>

                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 20px;">
                                <tr>
                                    <td style="padding: 20px; background-color: #fafafa; border-radius: 12px;">
                                        <p style="margin: 0 0 8px 0; font-size: 12px; color: #e91e63; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Email Address</p>
                                        <p style="margin: 0; font-size: 16px; color: #333333;">
                                            <a href="mailto:${email}" style="color: #e91e63; text-decoration: none;">${email}</a>
                                        </p>
                                    </td>
                                </tr>
                            </table>

                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 20px;">
                                <tr>
                                    <td style="padding: 20px; background-color: #fafafa; border-radius: 12px;">
                                        <p style="margin: 0 0 8px 0; font-size: 12px; color: #e91e63; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Subject</p>
                                        <p style="margin: 0; font-size: 16px; color: #333333; font-weight: 600;">${subject || 'No Subject'}</p>
                                    </td>
                                </tr>
                            </table>

                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 20px;">
                                <tr>
                                    <td style="padding: 20px; background-color: #fafafa; border-radius: 12px;">
                                        <p style="margin: 0 0 12px 0; font-size: 12px; color: #e91e63; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
                                        <p style="margin: 0; font-size: 15px; color: #555555; line-height: 1.6;">${message}</p>
                                    </td>
                                </tr>
                            </table>

                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                    <td style="padding: 15px 20px; background-color: #f3e5f5; border-radius: 12px; text-align: center;">
                                        <p style="margin: 0; font-size: 13px; color: #666666;">
                                            <strong>Received:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
                                        </p>
                                    </td>
                                </tr>
                            </table>

                        </td>
                    </tr>

                    <tr>
                        <td style="padding: 0 30px 30px 30px;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                    <td align="center">
                                        <a href="mailto:${email}" style="display: inline-block; padding: 16px 40px; background: linear-gradient(135deg, #e91e63 0%, #ec407a 100%); color: #ffffff; text-decoration: none; border-radius: 12px; font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Reply to Inquiry</a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <tr>
                        <td style="padding: 25px 30px; background-color: #fafafa; text-align: center; border-top: 1px solid #eeeeee;">
                            <p style="margin: 0 0 10px 0; color: #666666; font-size: 14px;">Dreamzone Velachery</p>
                            <p style="margin: 0; color: #999999; font-size: 12px;">Empowering Creative Minds to Create the Future</p>
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>
</body>
</html>
        `
    };

    // Thank you email to user
    const userMailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Thank You for Contacting Dreamzone Velachery',
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
                <div style="background: linear-gradient(135deg, #E91E63, #9C27B0); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
                    <h1 style="color: white; margin: 0;">Thank You, ${name}!</h1>
                </div>
                <div style="padding: 30px; background: #f9f9f9;">
                    <p style="font-size: 16px; color: #333; line-height: 1.6;">
                        We have received your message and appreciate you reaching out to Dreamzone Velachery.
                    </p>
                    <p style="font-size: 16px; color: #333; line-height: 1.6;">
                        Our team will review your inquiry and get back to you within 24-48 hours.
                    </p>
                    <div style="background: white; padding: 20px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #E91E63;">
                        <h3 style="color: #E91E63; margin-top: 0;">Your Message:</h3>
                        <p style="color: #666;">${message}</p>
                    </div>
                    <p style="font-size: 14px; color: #666;">
                        If you have any urgent queries, feel free to call us or visit our campus at Velachery, Chennai.
                    </p>
                </div>
                <div style="padding: 20px; background: #333; color: white; text-align: center; border-radius: 0 0 10px 10px;">
                    <p style="margin: 0; font-size: 14px;">Transforming Passion into Profession</p>
                    <p style="margin: 5px 0 0 0; font-size: 12px;">© 2025 Dreamzone Velachery. All rights reserved.</p>
                </div>
            </div>
        `
    };

    try {
        // Send both emails
        await transporter.sendMail(adminMailOptions);
        await transporter.sendMail(userMailOptions);

        res.json({
            success: true,
            message: 'Thank you! Your message has been sent successfully.'
        });
    } catch (error) {
        console.error('Email sending error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to send email. Please try again later.'
        });
    }
});

// Route: Enrollment Form Submission
app.post('/api/enroll', async (req, res) => {
    const { name, email, phone, course } = req.body;

    if (!name || !email || !phone) {
        return res.status(400).json({
            success: false,
            message: 'Please fill in all required fields'
        });
    }

    const adminMailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.ADMIN_EMAIL,
        subject: 'New Enquiry Form Registered - Course Enrollment',
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
                <div style="background: linear-gradient(135deg, #E91E63, #9C27B0); padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
                    <h2 style="color: white; margin: 0;">🎓 New Course Enrollment</h2>
                </div>
                <div style="padding: 20px; background: #f9f9f9;">
                    <h3 style="color: #333; margin-top: 0;">Student Details:</h3>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; color: #E91E63;">Name:</td>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; color: #E91E63;">Email:</td>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${email}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; color: #E91E63;">Phone:</td>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${phone}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; color: #E91E63;">Course:</td>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${course || 'Not Specified'}</td>
                        </tr>
                    </table>
                </div>
                <div style="padding: 15px; background: #333; color: white; text-align: center; border-radius: 0 0 10px 10px;">
                    <p style="margin: 0; font-size: 12px;">© 2025 Dreamzone Velachery. All rights reserved.</p>
                </div>
            </div>
        `
    };

    const userMailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Welcome to Dreamzone Velachery!',
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
                <div style="background: linear-gradient(135deg, #E91E63, #9C27B0); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
                    <h1 style="color: white; margin: 0;">Welcome, ${name}! 🎉</h1>
                </div>
                <div style="padding: 30px; background: #f9f9f9;">
                    <p style="font-size: 16px; color: #333; line-height: 1.6;">
                        Thank you for your interest in enrolling at Dreamzone Velachery!
                    </p>
                    <div style="background: white; padding: 20px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #E91E63;">
                        <h3 style="color: #E91E63; margin-top: 0;">Course Selected:</h3>
                        <p style="color: #333; font-size: 18px; font-weight: bold;">${course || 'To be determined'}</p>
                    </div>
                    <p style="font-size: 16px; color: #333; line-height: 1.6;">
                        Our admissions team will contact you shortly to discuss the course details, schedule, and next steps.
                    </p>
                    <p style="font-size: 14px; color: #666;">
                        In the meantime, feel free to explore our campus or call us for any immediate queries.
                    </p>
                </div>
                <div style="padding: 20px; background: #333; color: white; text-align: center; border-radius: 0 0 10px 10px;">
                    <p style="margin: 0; font-size: 14px;">Transforming Passion into Profession</p>
                    <p style="margin: 5px 0 0 0; font-size: 12px;">© 2025 Dreamzone Velachery. All rights reserved.</p>
                </div>
            </div>
        `
    };

    try {
        await transporter.sendMail(adminMailOptions);
        await transporter.sendMail(userMailOptions);

        res.json({
            success: true,
            message: 'Enrollment successful! Check your email for confirmation.'
        });
    } catch (error) {
        console.error('Email sending error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to process enrollment. Please try again later.'
        });
    }
});

// Route: Brochure Download Request
app.post('/api/brochure', async (req, res) => {
    const { name, email, phone, course } = req.body;

    if (!name || !email || !phone) {
        return res.status(400).json({
            success: false,
            message: 'Please fill in all required fields'
        });
    }

    const adminMailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.ADMIN_EMAIL,
        subject: 'New Enquiry Form Registered - Brochure Download',
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
                <div style="background: linear-gradient(135deg, #E91E63, #9C27B0); padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
                    <h2 style="color: white; margin: 0;">📥 Brochure Download Request</h2>
                </div>
                <div style="padding: 20px; background: #f9f9f9;">
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; color: #E91E63;">Name:</td>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; color: #E91E63;">Email:</td>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${email}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; color: #E91E63;">Phone:</td>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${phone}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; color: #E91E63;">Interested Course:</td>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${course || 'Not Specified'}</td>
                        </tr>
                    </table>
                </div>
                <div style="padding: 15px; background: #333; color: white; text-align: center; border-radius: 0 0 10px 10px;">
                    <p style="margin: 0; font-size: 12px;">© 2025 Dreamzone Velachery. All rights reserved.</p>
                </div>
            </div>
        `
    };

    try {
        await transporter.sendMail(adminMailOptions);

        res.json({
            success: true,
            message: 'Thank you! Your download will start shortly.'
        });
    } catch (error) {
        console.error('Email sending error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to process request. Please try again later.'
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`\n🚀 Dreamzone Server Running!`);
    console.log(`📧 Email: ${process.env.EMAIL_USER}`);
    console.log(`🌐 Server: http://localhost:${PORT}`);
    console.log(`\n✨ Ready to accept form submissions!\n`);
});
