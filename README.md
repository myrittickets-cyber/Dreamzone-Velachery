# Dreamzone Velachery Website

A modern, responsive website for Dreamzone Velachery - A premier design education institute offering courses in Interior Design, Fashion Design, Graphic Design, and Animation.

## 🌟 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Beautiful animations, gradients, and interactive elements
- **Course Pages**: 24+ dedicated course pages with detailed information
- **Gallery Popup**: Google Photos-style gallery with lightbox viewer
- **Contact System**: Integrated contact popup and WhatsApp integration
- **Email Integration**: Automated email notifications using Nodemailer
- **SEO Optimized**: Proper meta tags, semantic HTML, and optimized structure

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- A text editor (VS Code recommended)
- A web browser (Chrome, Firefox, Edge, etc.)

## 🚀 Quick Start

### 1. Install Dependencies

Open terminal/command prompt in the project directory and run:

```bash
npm install
```

This will install all required dependencies listed in `package.json`.

### 2. Configure Environment Variables

Create or edit the `.env` file in the root directory with your email credentials:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
CONTACT_EMAIL=velacherydz@gmail.com
```

**Note**: For Gmail, you need to use an [App Password](https://support.google.com/accounts/answer/185833), not your regular password.

### 3. Run Development Server

Start the local development server:

```bash
npm run dev
```

The website will be available at: **http://localhost:3000**

## 📁 Project Structure

```
Dreamzone/
├── assets/
│   ├── css/              # Stylesheets
│   │   ├── home.css
│   │   ├── gallery-popup.css
│   │   ├── contact-popup.css
│   │   └── ...
│   ├── images/           # Images and graphics
│   │   ├── gallery/      # Gallery images
│   │   ├── logo/         # Logo files
│   │   └── ...
│   └── js/               # JavaScript files
│       └── home.js
├── index.html            # Main homepage
├── home.html             # Alternative homepage
├── about.html            # About us page
├── gallery.html          # Gallery page (standalone)
├── [Course Pages].html   # 24+ course pages
├── server.js             # Node.js server with email functionality
├── emailTemplates.js     # Email template configurations
├── package.json          # Project dependencies
├── .env                  # Environment variables (not in git)
└── README.md             # This file
```

## 🎨 Key Pages

### Main Pages
- **index.html / home.html**: Homepage with hero section, courses, and features
- **about.html**: About Dreamzone Velachery
- **gallery.html**: Standalone gallery page

### Course Categories

**Interior Design (6 courses)**
- Master-Interior.html
- Executive-Interior.html
- pg-Diploma-Interior.html
- Diploma-Interior.html
- Kitchen-Design.html
- CAD-Design.html

**Fashion Design (8 courses)**
- Fashion-Master.html
- Fashion-Professional-CAD.html
- Fashion-Professional.html
- Fashion-Diploma-Digital.html
- Fashion-Digital-Certificate.html
- Fashion-Dress-Making.html
- Fashion-Certificate-Image-Editing.html
- Fashion-Certificate-Digital-Illustration.html

**Graphic Design (8 courses)**
- Graphic-Web-Design.html
- Graphic-Animation.html
- Graphic-Professional.html
- Graphic-Professional-Animation.html
- Graphic-UX-UI-Design.html
- Graphic-Diploma-UX-UI.html
- Graphic-Motion.html
- Graphic-Diploma-Design.html

## 🌐 Hosting Options

### Option 1: Netlify (Recommended - Free)

1. **Create a Netlify account**: [netlify.com](https://www.netlify.com/)

2. **Deploy via Git**:
   - Push your code to GitHub
   - Connect Netlify to your GitHub repository
   - Netlify will auto-deploy on every push

3. **Deploy via Drag & Drop**:
   - Zip your project folder (exclude node_modules)
   - Drag and drop to Netlify dashboard
   - Your site will be live instantly!

4. **Configure Environment Variables**:
   - Go to Site Settings → Environment Variables
   - Add your EMAIL_USER, EMAIL_PASS, and CONTACT_EMAIL

**Netlify Deploy Settings**:
```
Build command: (leave empty for static site)
Publish directory: ./
```

### Option 2: Vercel (Free)

1. **Create a Vercel account**: [vercel.com](https://vercel.com/)

2. **Deploy**:
   ```bash
   npm install -g vercel
   vercel
   ```

3. **Follow the prompts** to deploy your site

4. **Add Environment Variables** in Vercel dashboard

### Option 3: GitHub Pages (Free - Static Only)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin your-repo-url
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Select branch: main
   - Select folder: / (root)
   - Save

3. **Your site will be live at**: `https://yourusername.github.io/repository-name`

**Note**: GitHub Pages doesn't support server-side code (server.js). Email functionality won't work.

### Option 4: Traditional Web Hosting (Paid)

For hosting with full Node.js support:

**Recommended Hosts**:
- **Hostinger** (~$2/month)
- **DigitalOcean** (~$5/month)
- **AWS EC2** (Free tier available)
- **Heroku** (Free tier available)

**Steps**:
1. Upload files via FTP/SFTP
2. Install Node.js on server
3. Run `npm install`
4. Configure environment variables
5. Start server: `node server.js` or use PM2 for production

**Using PM2 (Process Manager)**:
```bash
npm install -g pm2
pm2 start server.js --name dreamzone
pm2 startup
pm2 save
```

## 🔧 Configuration

### Email Setup

The website uses Nodemailer for sending emails. Configure in `.env`:

```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-password
CONTACT_EMAIL=velacherydz@gmail.com
```

**Gmail App Password Setup**:
1. Go to Google Account Settings
2. Security → 2-Step Verification
3. App Passwords → Generate new password
4. Use this password in `.env`

### WhatsApp Integration

Update the WhatsApp number in all HTML files:

```html
<a href="https://wa.me/919994355699" target="_blank" class="whatsapp-float">
```

Replace `919994355699` with your WhatsApp number (country code + number).

### Social Media Links

Update social media links in footer sections:

```html
<a href="https://www.facebook.com/share/184DRQvqsW/">Facebook</a>
<a href="https://www.instagram.com/dreamzone.velachery">Instagram</a>
<a href="https://www.linkedin.com/company/dreamzone-velachery/">LinkedIn</a>
```

## 📱 Features Overview

### Gallery Popup
- Google Photos-style interface
- Thumbnail sidebar with main image viewer
- Keyboard navigation (← → ESC)
- Responsive design
- 7 campus images

### Contact System
- Popup contact form
- Email notifications
- WhatsApp integration
- Form validation

### Responsive Design
- Mobile-first approach
- Breakpoints: 768px, 1024px, 1200px
- Touch-friendly navigation
- Optimized images

## 🛠️ Development

### Running in Development Mode

```bash
npm run dev
```

Server runs on port 3000 with auto-reload.

### Building for Production

For static hosting (no server-side code):
- Simply upload all HTML, CSS, JS, and image files
- No build process required

For Node.js hosting:
- Ensure all dependencies are in `package.json`
- Set NODE_ENV=production
- Use PM2 or similar for process management

## 📞 Support & Contact

**Dreamzone Velachery**
- **Phone**: +91 9994355699
- **Email**: velacherydz@gmail.com
- **Location**: Velachery, Chennai

## 📄 License

© 2024 Dreamzone Velachery. All rights reserved.

## 🤝 Contributing

For any updates or modifications, please contact the development team.

---

**Last Updated**: December 2024
**Version**: 1.0.0
