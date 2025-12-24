# Dreamzone Velachery - Email Configuration Setup

## 📧 Email System Overview

The website now has a fully functional email system that sends emails for:
1. **Contact Form** submissions
2. **Course Enrollment** requests
3. **Brochure Download** requests

## 🔧 Setup Instructions

### Step 1: Install Dependencies

```bash
cd s:\Projects\Dreamzone
npm install
```

This will install:
- `express` - Web server
- `nodemailer` - Email sending
- `body-parser` - Form data parsing
- `cors` - Cross-origin requests
- `dotenv` - Environment variables

### Step 2: Email Configuration

The email credentials are already configured in `.env`:
```
EMAIL_USER=velacherydz@gmail.com
EMAIL_APP_PASSWORD=ensc rfog zcpz noha
ADMIN_EMAIL=velacherydz@gmail.com
PORT=3000
```

**Note**: The app password has spaces removed automatically in the code.

### Step 3: Start the Server

```bash
npm start
```

Or for development with auto-reload:
```bash
npm run dev
```

You should see:
```
🚀 Dreamzone Server Running!
📧 Email: velacherydz@gmail.com
🌐 Server: http://localhost:3000
✨ Ready to accept form submissions!
```

### Step 4: Open the Website

Open any HTML file in your browser:
- `home.html` - Main homepage
- `Diploma-Interior.html` - Course page example
- Any other course page

## 📬 Email Features

### 1. Contact Form (`/api/contact`)
**Sends 2 emails:**
- ✅ Admin notification with contact details
- ✅ Thank you email to the user

### 2. Enrollment Form (`/api/enroll`)
**Sends 2 emails:**
- ✅ Admin notification with student details
- ✅ Welcome email to the student

### 3. Brochure Download (`/api/brochure`)
**Sends 1 email:**
- ✅ Admin notification with lead details

## 🎨 Email Templates

All emails include:
- Professional HTML design
- Pink/Purple gradient header (matching website)
- Responsive layout
- Dreamzone branding
- Footer with copyright

## 🔍 Testing

### Test Enrollment Form:
1. Open any course page (e.g., `Diploma-Interior.html`)
2. Click "Enroll Now"
3. Fill in the form
4. Submit
5. Check both emails:
   - Admin: velacherydz@gmail.com
   - User: (email you entered)

### Test Contact Form:
1. Create a contact page or add contact form
2. Fill and submit
3. Check emails

## 📁 File Structure

```
s:\Projects\Dreamzone\
├── server.js                    # Express server with email routes
├── package.json                 # Dependencies
├── .env                         # Email credentials (KEEP PRIVATE!)
├── assets/
│   └── js/
│       ├── course-detail.js     # Course page JS with API calls
│       └── home.js              # Homepage JS
└── *.html                       # All HTML pages
```

## 🚀 API Endpoints

### POST `/api/contact`
**Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Course Inquiry",
  "message": "I want to know more about..."
}
```

### POST `/api/enroll`
**Body:**
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "9876543210",
  "course": "Diploma in Interior Design"
}
```

### POST `/api/brochure`
**Body:**
```json
{
  "name": "Bob Wilson",
  "email": "bob@example.com",
  "phone": "9876543210",
  "course": "Fashion Design"
}
```

## ⚠️ Important Notes

1. **Server Must Be Running**: The Node.js server must be running for emails to work
2. **Localhost Only**: Currently configured for `localhost:3000`
3. **Production**: For production, update the API URL in JavaScript files
4. **Gmail Security**: App password is already configured
5. **Keep .env Private**: Never commit `.env` to version control

## 🔒 Security

- ✅ Email credentials stored in `.env`
- ✅ App password used (not regular password)
- ✅ CORS enabled for local development
- ✅ Input validation on server side

## 🐛 Troubleshooting

### Email not sending?
1. Check if server is running (`npm start`)
2. Verify `.env` file exists
3. Check console for errors
4. Verify Gmail app password is correct

### Form not submitting?
1. Open browser console (F12)
2. Check for JavaScript errors
3. Verify API URL is `http://localhost:3000`
4. Ensure server is running

### Server won't start?
1. Run `npm install` first
2. Check if port 3000 is available
3. Verify Node.js is installed

## 📞 Support

For issues, check:
- Browser console (F12)
- Server terminal output
- Email inbox (spam folder too!)

---

**Status**: ✅ Email system fully configured and ready to use!
**Last Updated**: 2025-12-23
