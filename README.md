# 🎯 Sanjay G.L. - Professional Portfolio

A modern, fully-functional portfolio website showcasing skills, projects, certifications, and professional experience. Built with HTML5, CSS3, and vanilla JavaScript with a sleek dark theme and responsive design.

---

## 📋 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Files Included](#files-included)
- [Getting Started](#getting-started)
- [Customization](#customization)
- [Sections Overview](#sections-overview)
- [Contact & Social Links](#contact--social-links)
- [Browser Support](#browser-support)
- [Performance](#performance)
- [License](#license)

---

## ✨ Features

### 🎨 **Design & UI**
- ✅ Modern dark gradient theme with cyan/blue accents
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth scroll animations and transitions
- ✅ Professional typography with custom fonts
- ✅ Interactive hover effects and micro-interactions
- ✅ Glass-morphism design elements
- ✅ Animated background gradients

### 📱 **Responsive Features**
- ✅ Mobile-first design approach
- ✅ Hamburger menu for mobile navigation
- ✅ Touch-friendly buttons and links
- ✅ Adaptive grid layouts
- ✅ Optimized images and assets

### 💼 **Portfolio Features**
- ✅ **11 Well-Organized Sections:**
  1. About Me (Education & Background)
  2. Technical Skills (15+ technologies)
  3. Projects & Competitions (4 major projects)
  4. Achievements & Certifications (43+ certificates)
  5. Community Service (NSS Volunteer)
  6. Personal Life & Interests
  7. Let's Connect (Social Media)
  8. My Channel (Portfolio Highlights)
  9. Professional Resume (Downloadable)
  10. Interests & Hobbies (8 categories)
  11. Drop a Message (Contact Form)

### 🏆 **Certificates Page**
- ✅ **48 Total Certificates:**
  - 6 Named Awards (with emoji cards & descriptions)
  - 42 Google Drive Verified Documents (real links)
- ✅ Advanced filtering system (All, Named, Verified, Internship, Government, Tech)
- ✅ Real-time search functionality
- ✅ Certificate preview modals
- ✅ Direct Google Drive access
- ✅ Responsive grid layout

### 📧 **Contact Features**
- ✅ Working email integration (mailto protocol)
- ✅ Form validation (name, email, message required)
- ✅ Success message feedback
- ✅ Form reset functionality
- ✅ Subject line templates
- ✅ Error handling

### 🔗 **Social Integration**
- ✅ LinkedIn Profile
- ✅ GitHub Repository
- ✅ Instagram Account
- ✅ Telegram Channel
- ✅ Twitter/X Profile
- ✅ Salesforce Trailhead
- ✅ Facebook Profile

### 📄 **Resume**
- ✅ Professional .docx format
- ✅ All sections included
- ✅ Formatted for ATS (Applicant Tracking Systems)
- ✅ Downloadable from portfolio

---

## 📁 Project Structure

```
portfolio/
├── index.html              # Main portfolio page (1,564 lines)
├── certificates.html       # Certificates gallery (573 lines)
├── Sanjay_GL_Resume.docx  # Professional resume
├── sanju.jpg              # Profile image (add this)
├── README.md              # This file
└── assets/
    └── (Optional: additional images/resources)
```

### File Sizes
```
index.html (112 KB)
├─ Complete portfolio with 11 sections
├─ Inline CSS styling
├─ Vanilla JavaScript (no frameworks)
└─ Single file deployment

certificates.html (37 KB)
├─ 48 certificates (6 named + 42 verified)
├─ Filter & search functionality
├─ Modal viewers
└─ Self-contained

Sanjay_GL_Resume.docx (11 KB)
└─ Professional resume in Word format
```

---

## 📦 Files Included

### 1. **index.html** - Main Portfolio
The complete portfolio website featuring:
- Responsive navigation bar
- Hero section with typing animation
- About section with education details
- Technical skills showcase (15+ technologies)
- Projects portfolio (4 major projects)
- Achievements & certifications display
- Community service highlights
- Personal interests and hobbies
- Social media links section
- Professional resume preview
- Contact form with email integration
- Footer with copyright

**Key Elements:**
- 11 major sections
- 8 hobbies/interests listed
- Machine Learning skill included
- Tamil language listed (Mother Tongue)
- All social links including Facebook
- Working contact form
- Mobile responsive

### 2. **certificates.html** - Certificates Gallery
Dedicated page for displaying all certifications:
- Interactive certificate grid
- 6 Named Awards (PRAVIDHI, Government Quizzes, Internship Awards, etc.)
- 42 Google Drive verified certificates
- Advanced filtering (6 categories)
- Real-time search
- Certificate preview modals
- Direct Google Drive viewing
- Responsive design
- Statistics dashboard

**Features:**
- Auto-updating certificate counter
- Category-based filtering
- Search by title/organization/tags
- Thumbnail previews
- Modal viewers with full details
- Download Resume button

### 3. **Sanjay_GL_Resume.docx**
Professional resume in Microsoft Word format:
- Contact information
- Professional summary
- Technical skills (organized by category)
- Education details
- Projects & portfolio
- Certifications (43+ total)
- Volunteer experience
- Interests & hobbies
- Languages (English, Kannada, Tamil)

**Format:**
- Professional fonts (Calibri)
- ATS-optimized
- Proper spacing and margins
- Bullet points for readability
- Blue accent color for headers

### 4. **sanju.jpg** (NOT INCLUDED - Add This)
Your profile image file. Should be:
- Square format (recommended 400x400px minimum)
- Named: `sanju.jpg`
- Placed in the same directory as HTML files
- JPG or PNG format

---

## 🚀 Getting Started

### Step 1: Download All Files
```bash
# You should have:
- index.html
- certificates.html
- Sanjay_GL_Resume.docx
- README.md (this file)
```

### Step 2: Add Profile Image
1. Take a professional headshot photo
2. Crop to square format (400x400px or larger)
3. Save as `sanju.jpg` in the same directory
4. File should be in JPG or PNG format

### Step 3: Local Testing
```bash
# Option 1: Open directly in browser
# Double-click index.html or certificates.html

# Option 2: Use Python (Python 3)
python -m http.server 8000

# Option 3: Use Node.js
npx http-server

# Then visit: http://localhost:8000
```

### Step 4: Deploy to Web

#### **Option A: GitHub Pages (Free)**
```bash
1. Create GitHub account (if not already)
2. Create new repository named: username.github.io
3. Upload all files
4. Files appear at: https://username.github.io
```

#### **Option B: Netlify (Free)**
```bash
1. Go to netlify.com
2. Click "Drop files here"
3. Upload all files
4. Get instant live URL
```

#### **Option C: Vercel (Free)**
```bash
1. Go to vercel.com
2. Import project
3. Select HTML as framework
4. Deploy
```

#### **Option D: Traditional Web Host**
```bash
1. Use FTP/SFTP to upload files
2. Upload to public_html directory
3. Access via domain: yourdomain.com
```

---

## 🎨 Customization

### Updating Personal Information

#### **Contact Information**
Find and replace in `index.html`:
```javascript
Line 1534: const toEmail = 'sanjaygl2006@gmail.com';
           Replace with your email
```

#### **Social Links**
Update URLs in social card sections:
- LinkedIn: Change URL in `<a href="...linkedin...">`
- GitHub: Change URL in `<a href="...github...">`
- Instagram, Telegram, Twitter, Facebook: Update URLs accordingly

#### **Phone Number**
Line 961: `<a href="tel:+918123981877">`
Change to your phone number

#### **Location**
Line 965: Change "Shivamogga, Karnataka, India" to your location

#### **Education Details**
Line 506-509: Update:
- College name
- Year/Semester
- Location
- GPA (if desired)

### Adding New Projects
In the Projects section (around line 695):
```html
<div class="project-card stagger-child">
  <div class="project-header">
    <div class="project-icon">🔧</div>
    <div class="project-tags">
      <span class="project-tag">Technology</span>
    </div>
  </div>
  <div>
    <div class="project-title">Your Project Name</div>
    <div class="project-subtitle">Subtitle</div>
  </div>
  <div class="project-desc">Description</div>
  <ul class="project-highlights">
    <li>Highlight 1</li>
    <li>Highlight 2</li>
  </ul>
</div>
```

### Adding New Certificates
In `certificates.html`, add to the `driveCerts` array (around line 360):
```javascript
const driveCerts = [
  {driveId:'YOUR_GOOGLE_DRIVE_ID',title:'Certificate Name'},
  // ... existing certs
];
```

**To get Google Drive ID:**
1. Open certificate in Google Drive
2. Share the file
3. URL format: `https://drive.google.com/file/d/XXXXX/view`
4. Extract the ID part (XXXXX)

### Changing Color Scheme
CSS variables at top of `index.html` (lines 9-19):
```css
:root {
  --bg: #070b14;                    /* Background */
  --surface: #0d1424;               /* Card background */
  --accent: #38d9f5;                /* Primary color (cyan) */
  --accent2: #f5c038;               /* Secondary color (gold) */
  --accent3: #56f5a0;               /* Tertiary color (green) */
  --text: #e8f0ff;                  /* Text color */
  --muted: #7a8aaa;                 /* Muted text */
}
```

Change hex colors to your preference

### Modifying Interests & Hobbies
Around line 642-683:
```html
<div class="hobby-card stagger-child" ...>
  <div style="font-size:2.2rem;margin-bottom:14px;">💻</div>
  <h3>Coding</h3>
  <p>Your description</p>
</div>
```

Update emoji, title, and description

### Resume Download Link
In `certificates.html`, update function (around line 563):
```javascript
function downloadResume(e) {
  e.preventDefault();
  // Replace with your Google Drive PDF ID
  window.location.href = 'https://drive.google.com/uc?export=download&id=YOUR_PDF_ID';
}
```

---

## 📑 Sections Overview

### **01 - About Me**
- Educational background
- Personal goals and passions
- Key information card
- Currently exploring section

### **02 - Technical Skills**
- Web Development (HTML5, CSS3, JavaScript)
- Programming Languages (C, C++, Java, Python)
- Databases (SQL, PL/SQL, Google Sheets)
- AI & Machine Learning
- Tools & Platforms
- Soft Skills

### **03 - Projects & Competitions**
1. **E-Commerce Website (Saree Shop)**
   - Frontend + Backend
   - JavaScript, Google Sheets API
   
2. **AI Integration Workflow Documentation**
   - Daily practice logs
   - Productivity knowledge base
   
3. **Fundamentals of Computers**
   - Academic presentation
   - Peer & faculty delivery
   
4. **Green IT Competition**
   - Sustainability focus
   - PES Institute event

### **04 - Achievements**
- 48 total certificates
- 6 named awards
- 42 verified documents
- Competition participations

### **05 - Community**
- NSS Volunteer work
- Social service initiatives
- Team collaboration
- Leadership experience

### **06 - Personal Life**
- Aquarium hobby
- Trekking adventures
- History interest
- Personal growth

### **07 - Let's Connect**
- Email contact
- Phone number
- Location
- Availability status
- 7 social media platforms

### **08 - My Channel**
- Portfolio highlights
- Skill showcase
- Video content section
- Visitor testimonials

### **09 - Professional Resume**
- Downloadable .docx
- Complete career summary
- All certifications
- ATS-optimized format

### **10 - Interests & Hobbies**
1. 💻 Coding
2. 📖 Reading
3. 🎮 Gaming
4. 🎵 Music
5. 🤖 AI & ML
6. 📸 Photography
7. 🌍 Travel
8. 🏃 Fitness

### **11 - Drop a Message**
- Contact form
- Email integration
- Form validation
- Success feedback

---

## 🔗 Contact & Social Links

| Platform | URL | Username |
|----------|-----|----------|
| **Email** | sanjaygl2006@gmail.com | Primary Contact |
| **Phone** | +91 81239 81877 | Available 24/7 |
| **LinkedIn** | linkedin.com/in/sanjay-gl-b86631336/ | Sanjay GL |
| **GitHub** | github.com/sanjayGL2006 | @sanjayGL2006 |
| **Instagram** | instagram.com/me__sanjaygl8123 | @me__sanjaygl8123 |
| **Telegram** | t.me/Sanjaygl30 | @Sanjaygl30 |
| **Twitter** | twitter.com/SanjayGL8123456 | @SanjayGL8123456 |
| **Salesforce** | trailblazer.salesforce.com | Trailblazer Profile |
| **Facebook** | facebook.com/people/Sanjay-G-L-Sanju/ | Sanjay GL |

---

## 🌐 Browser Support

| Browser | Support | Version |
|---------|---------|---------|
| Chrome | ✅ Full | Latest |
| Firefox | ✅ Full | Latest |
| Safari | ✅ Full | 12+ |
| Edge | ✅ Full | Latest |
| Opera | ✅ Full | Latest |
| IE 11 | ⚠️ Limited | Not Recommended |
| Mobile Safari | ✅ Full | iOS 10+ |
| Chrome Mobile | ✅ Full | Latest |

---

## ⚡ Performance

### Page Load Times
- **First Paint:** < 1s
- **Largest Contentful Paint:** < 2s
- **Total Load:** < 3s (on 4G)

### Optimization Features
- ✅ Inline CSS (no separate stylesheets)
- ✅ Vanilla JavaScript (no frameworks)
- ✅ Minimal dependencies
- ✅ Compressed images
- ✅ Lazy loading for images
- ✅ CSS animations (GPU accelerated)
- ✅ Optimized fonts

### Lighthouse Scores (Target)
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 95+

---

## 🔒 Privacy & Security

### Data Collection
- ✅ **No cookies** - No tracking
- ✅ **No analytics** - No data collection
- ✅ **No trackers** - Fully private
- ✅ **Contact form** - Email via client (no server)
- ✅ **Open source** - Code is transparent

### Email Privacy
The contact form uses the `mailto:` protocol:
- Emails are composed locally in your default email client
- No server stores email content
- Your privacy is protected

---

## 📝 License

This portfolio is **open source** and available for personal use. Feel free to:
- ✅ Use as a template
- ✅ Customize for your information
- ✅ Deploy publicly
- ✅ Share with others
- ✅ Modify the code

---

## 🤝 Contributing

Found a bug or have suggestions? 
- Email: sanjaygl2006@gmail.com
- GitHub Issues: [Report Issues]

---

## 📞 Support

### Frequently Asked Questions

**Q: How do I update my profile image?**
A: Replace `sanju.jpg` with your image file (same name). Image appears in navbar and profile sections.

**Q: Can I change the color scheme?**
A: Yes! Edit CSS variables in lines 9-19 of index.html.

**Q: How do I add new certificates?**
A: Get Google Drive file IDs and add to driveCerts array in certificates.html.

**Q: Why isn't the contact form sending emails?**
A: The form opens your default email client (no server required). It's a privacy-first design.

**Q: Can I use this with a custom domain?**
A: Yes! Works with any domain on GitHub Pages, Netlify, Vercel, or traditional hosting.

**Q: Is the portfolio mobile-friendly?**
A: Yes! 100% responsive on all devices (mobile, tablet, desktop).

---

## 🎯 Roadmap

Future enhancements (optional):
- [ ] Blog section
- [ ] Case studies for projects
- [ ] Video testimonials
- [ ] Dark/Light mode toggle
- [ ] Multi-language support
- [ ] Backend contact form
- [ ] Admin dashboard
- [ ] SEO improvements

---

## 📊 Statistics

### Portfolio Content
- **Total Sections:** 11
- **Total Pages:** 2 (index + certificates)
- **Total Certificates:** 48
- **Total Projects:** 4
- **Social Links:** 9
- **Skills Listed:** 15+
- **Hobbies:** 8

### Code Statistics
- **HTML Lines:** 2,137
- **CSS Lines:** 950+
- **JavaScript Lines:** 400+
- **Total Size:** 149 KB (uncompressed)
- **Gzip Size:** ~40 KB
- **Dependencies:** 0 (vanilla)

---

## 🎓 Technical Stack

### Frontend
```
HTML5
CSS3 (with CSS Variables)
Vanilla JavaScript (ES6+)
Google Fonts (Syne, Space Mono, DM Sans)
```

### No Frameworks
- ✅ No jQuery
- ✅ No Bootstrap
- ✅ No React/Vue
- ✅ No build tools required
- ✅ Pure HTML/CSS/JS

### Compatibility
- Responsive Design (Mobile First)
- CSS Grid & Flexbox
- ES6 JavaScript
- Modern Browser APIs

---

## 🚀 Deployment Checklist

Before going live:
- [ ] Add profile image (sanju.jpg)
- [ ] Update email address
- [ ] Update phone number
- [ ] Update social media links
- [ ] Update Google Drive certificate IDs
- [ ] Test contact form
- [ ] Test all links
- [ ] Test on mobile devices
- [ ] Check loading speed
- [ ] Verify certificate previews
- [ ] Test filters and search

---

## 📮 Contact Information

**Sanjay G.L.**
- 📧 Email: sanjaygl2006@gmail.com
- 📱 Phone: +91 81239 81877
- 📍 Location: Shivamogga, Karnataka, India
- 🏫 Education: BCA, PES Institute of Advanced Management Studies
- 📅 Status: Open for internships & collaboration

---

## 📄 Version History

**v1.0 - Current**
- ✅ 11 portfolio sections
- ✅ 48 certificates with real links
- ✅ Contact form with email integration
- ✅ Responsive design
- ✅ Professional resume
- ✅ Social media integration
- ✅ Dark theme with gradient design

---

## 🙏 Acknowledgments

- Google Fonts for typography
- CSS Grid and Flexbox for layout
- HTML5 Semantic markup
- Modern JavaScript standards
- Open source community

---

## 📢 Share Your Portfolio

Help others discover your portfolio:
- Share on LinkedIn
- Post on GitHub
- Include in email signature
- Add to resume
- Share in portfolios/CV sites

---

**Last Updated:** April 3, 2026

**Status:** ✅ Production Ready

---

**Happy Coding! 🚀**

For questions or issues, contact: **sanjaygl2006@gmail.com**
