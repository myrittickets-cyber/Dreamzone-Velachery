# Getting Started - Dreamzone Website

## 🎯 Quick Start (3 Steps)

### Step 1: Install Node.js
Download and install from: https://nodejs.org/
(Choose LTS version - recommended for most users)

### Step 2: Install Dependencies
Open terminal in project folder and run:
```bash
npm install
```

### Step 3: Start Server
```bash
npm run dev
```

**✅ Done! Open browser and go to**: http://localhost:3000

---

## 📝 What You Need to Know

### Project Files

**Main Pages** (Edit these for content):
- `index.html` - Homepage
- `about.html` - About page
- `[Course].html` - 24 course pages

**Styling** (Edit these for design):
- `assets/css/home.css` - Main styles
- `assets/css/gallery-popup.css` - Gallery styles
- `assets/css/contact-popup.css` - Contact form styles

**Images**:
- `assets/images/gallery/` - Gallery photos (7 images)
- `assets/images/logo/` - Logo files
- `assets/images/` - Other images

**Server**:
- `server.js` - Handles email sending
- `.env` - Email configuration (create this file)

---

## 🔧 Common Tasks

### Change Contact Information

**Phone Number**:
Find and replace `+91 9994355699` with your number in all HTML files.

**Email**:
Find and replace `velacherydz@gmail.com` with your email in all HTML files.

**Address**:
Find and replace `Velachery, Chennai` with your address in all HTML files.

### Update Social Media Links

Edit in footer section of each HTML file:
```html
<a href="YOUR_FACEBOOK_URL">Facebook</a>
<a href="YOUR_INSTAGRAM_URL">Instagram</a>
<a href="YOUR_LINKEDIN_URL">LinkedIn</a>
```

### Add/Remove Gallery Images

1. Add images to: `assets/images/gallery/`
2. Name them: `gallery-1.jpg`, `gallery-2.jpg`, etc.
3. Update in all HTML files (search for "galleryData")

### Change Colors/Theme

Edit `assets/css/home.css`:
- Primary color: `#e91e63` (pink)
- Secondary color: `#9c27b0` (purple)
- Search and replace with your brand colors

---

## 🌐 Deploy to Internet

### Easiest Method (Netlify Drop):

1. Delete `node_modules` folder
2. Zip entire project
3. Go to: https://app.netlify.com/drop
4. Drag and drop your zip file
5. **Done!** Your site is live

**Your URL**: `https://random-name.netlify.app`
(You can change the name in Netlify settings)

---

## 📧 Email Setup (Optional)

For contact form to send emails:

1. Create `.env` file in project root
2. Add these lines:
```
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-password
CONTACT_EMAIL=velacherydz@gmail.com
```

3. Get Gmail App Password:
   - Go to Google Account → Security
   - Enable 2-Step Verification
   - Create App Password
   - Use that password in `.env`

---

## ❓ FAQ

**Q: Do I need to know coding?**
A: No! Just edit text in HTML files. Use Find & Replace to update content.

**Q: How do I change images?**
A: Replace images in `assets/images/` folder with same names.

**Q: Can I use this for free?**
A: Yes! Hosting on Netlify/Vercel is free. Domain costs ~$10/year.

**Q: How do I update after deploying?**
A: Make changes, then re-upload to Netlify (drag & drop again).

**Q: Is it mobile-friendly?**
A: Yes! Fully responsive and works on all devices.

**Q: Can I add more pages?**
A: Yes! Copy any existing HTML file and modify content.

---

## 🆘 Help & Support

**Issues?**
1. Check browser console (Press F12)
2. Clear browser cache (Ctrl+Shift+Delete)
3. Restart server (`npm run dev`)

**Still stuck?**
- Email: velacherydz@gmail.com
- Phone: +91 9994355699

---

## ✅ Checklist Before Going Live

- [ ] Updated all contact information
- [ ] Changed social media links
- [ ] Replaced gallery images
- [ ] Tested on mobile device
- [ ] Checked all course pages
- [ ] Verified contact form works
- [ ] Updated WhatsApp number
- [ ] Set up email (if needed)
- [ ] Tested on different browsers
- [ ] Checked for spelling errors

---

**🎉 You're all set! Enjoy your new website!**

For detailed instructions, see:
- `README.md` - Full documentation
- `DEPLOYMENT.md` - Hosting guide
