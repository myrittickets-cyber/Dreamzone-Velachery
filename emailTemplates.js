// Email Templates for Dreamzone Velachery

// Contact Form - Admin Notification
exports.contactAdminTemplate = (name, email, subject, message) => `
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
`;

// Enrollment - Admin Notification
exports.enrollmentAdminTemplate = (name, email, phone, course) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Course Enrollment - Dreamzone</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5; padding: 40px 20px;">
        <tr>
            <td align="center">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 40px rgba(233, 30, 99, 0.15);">
                    
                    <tr>
                        <td style="background: linear-gradient(135deg, #e91e63 0%, #ec407a 100%); padding: 40px 30px; text-align: center;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">🎓 New Course Enrollment</h1>
                            <p style="margin: 10px 0 0 0; color: #ffffff; font-size: 16px; opacity: 0.95;">Dreamzone Velachery</p>
                        </td>
                    </tr>

                    <tr>
                        <td style="padding: 30px 30px 20px 30px;">
                            <div style="background: #e8f5e9; border-left: 4px solid #4caf50; padding: 15px 20px; border-radius: 8px;">
                                <p style="margin: 0; color: #2e7d32; font-size: 14px; font-weight: 600;">✅ A new student has enrolled!</p>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td style="padding: 0 30px 30px 30px;">
                            
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 20px;">
                                <tr>
                                    <td style="padding: 20px; background-color: #fafafa; border-radius: 12px;">
                                        <p style="margin: 0 0 8px 0; font-size: 12px; color: #e91e63; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Student Name</p>
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
                                        <p style="margin: 0 0 8px 0; font-size: 12px; color: #e91e63; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Phone Number</p>
                                        <p style="margin: 0; font-size: 16px; color: #333333; font-weight: 600;">
                                            <a href="tel:${phone}" style="color: #333333; text-decoration: none;">${phone}</a>
                                        </p>
                                    </td>
                                </tr>
                            </table>

                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 20px;">
                                <tr>
                                    <td style="padding: 20px; background: linear-gradient(135deg, #fce4ec 0%, #f3e5f5 100%); border-radius: 12px; border: 2px solid #e91e63;">
                                        <p style="margin: 0 0 8px 0; font-size: 12px; color: #e91e63; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Course Selected</p>
                                        <p style="margin: 0; font-size: 18px; color: #e91e63; font-weight: 700;">${course || 'Not Specified'}</p>
                                    </td>
                                </tr>
                            </table>

                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                    <td style="padding: 15px 20px; background-color: #f3e5f5; border-radius: 12px; text-align: center;">
                                        <p style="margin: 0; font-size: 13px; color: #666666;">
                                            <strong>Enrolled:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
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
                                        <a href="mailto:${email}" style="display: inline-block; padding: 16px 40px; background: linear-gradient(135deg, #e91e63 0%, #ec407a 100%); color: #ffffff; text-decoration: none; border-radius: 12px; font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Contact Student</a>
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
`;

// Enrollment - Student Welcome Email
exports.enrollmentStudentTemplate = (name, course) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Dreamzone Velachery!</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5; padding: 40px 20px;">
        <tr>
            <td align="center">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 40px rgba(233, 30, 99, 0.15);">
                    
                    <tr>
                        <td style="background: linear-gradient(135deg, #e91e63 0%, #ec407a 100%); padding: 50px 30px; text-align: center;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 700;">Welcome, ${name}! 🎉</h1>
                            <p style="margin: 15px 0 0 0; color: #ffffff; font-size: 18px; opacity: 0.95;">Thank you for choosing Dreamzone Velachery</p>
                        </td>
                    </tr>

                    <tr>
                        <td style="padding: 40px 30px;">
                            <p style="margin: 0 0 20px 0; font-size: 16px; color: #333333; line-height: 1.6;">
                                We're thrilled to have you join our creative community! Your enrollment request has been successfully received.
                            </p>

                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 30px 0;">
                                <tr>
                                    <td style="padding: 25px; background: linear-gradient(135deg, #fce4ec 0%, #f3e5f5 100%); border-radius: 12px; border: 2px solid #e91e63; text-align: center;">
                                        <p style="margin: 0 0 10px 0; font-size: 14px; color: #e91e63; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Your Selected Course</p>
                                        <p style="margin: 0; font-size: 22px; color: #e91e63; font-weight: 700; line-height: 1.3;">${course || 'To be determined'}</p>
                                    </td>
                                </tr>
                            </table>

                            <div style="background: #e3f2fd; border-left: 4px solid #2196f3; padding: 20px; border-radius: 8px; margin: 25px 0;">
                                <p style="margin: 0 0 10px 0; font-size: 14px; color: #1565c0; font-weight: 600;">📞 What's Next?</p>
                                <p style="margin: 0; font-size: 14px; color: #555555; line-height: 1.6;">
                                    Our admissions team will contact you within 24-48 hours to discuss:
                                </p>
                                <ul style="margin: 10px 0 0 0; padding-left: 20px; color: #555555; font-size: 14px;">
                                    <li>Course details and curriculum</li>
                                    <li>Batch timings and schedule</li>
                                    <li>Fee structure and payment options</li>
                                    <li>Next steps for enrollment</li>
                                </ul>
                            </div>

                            <p style="margin: 25px 0 0 0; font-size: 15px; color: #666666; line-height: 1.6;">
                                In the meantime, feel free to explore our campus or reach out to us with any questions!
                            </p>
                        </td>
                    </tr>

                    <tr>
                        <td style="padding: 0 30px 30px 30px;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                    <td align="center">
                                        <a href="tel:+919876543210" style="display: inline-block; padding: 16px 40px; background: linear-gradient(135deg, #e91e63 0%, #ec407a 100%); color: #ffffff; text-decoration: none; border-radius: 12px; font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-right: 10px;">Call Us</a>
                                        <a href="https://dreamzone.com" style="display: inline-block; padding: 16px 40px; background: #ffffff; color: #e91e63; text-decoration: none; border-radius: 12px; font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; border: 2px solid #e91e63;">Visit Website</a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <tr>
                        <td style="padding: 25px 30px; background-color: #fafafa; text-align: center; border-top: 1px solid #eeeeee;">
                            <p style="margin: 0 0 10px 0; color: #666666; font-size: 14px; font-weight: 600;">Dreamzone Velachery</p>
                            <p style="margin: 0 0 10px 0; color: #999999; font-size: 12px;">Empowering Creative Minds to Create the Future</p>
                            <p style="margin: 10px 0 0 0; color: #999999; font-size: 11px;">
                                📍 Velachery, Chennai | 📞 +91 98765 43210 | ✉️ velacherydz@gmail.com
                            </p>
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>
</body>
</html>
`;
