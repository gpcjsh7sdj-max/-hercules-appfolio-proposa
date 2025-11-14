# Hercules Apartments - AppFolio Integration Proposal

A professional, tech-themed single-page application showcasing the comprehensive proposal for AppFolio integration, GitHub version control, and GoDaddy hosting deployment.

![Proposal Website](https://img.shields.io/badge/Status-Live-success)
![Tech Stack](https://img.shields.io/badge/Tech-HTML%20%7C%20CSS%20%7C%20JavaScript-blue)
![License](https://img.shields.io/badge/License-Proprietary-red)

## 🌐 Live Demo

Visit the live website: [GitHub Pages URL will be here after deployment]

## 📋 Project Overview

This website presents a complete $5,000, 4-week development proposal for:

- **AppFolio Property Manager Integration** - Real-time synchronization of floor plans, availability, pricing, and automated lead management
- **GitHub CI/CD Pipeline** - Professional version control with automated testing and deployment
- **GoDaddy VPS Hosting** - Production-ready infrastructure with monitoring and disaster recovery
- **VSCode + MCP + Claude AI Development** - Modern development workflow for maximum efficiency

### Key Highlights

- **524% First-Year ROI** - $26,200 net benefit from labor savings, increased conversions, and improved retention
- **4-Week Timeline** - Agile development with weekly sprints and daily standups
- **$5,000 Total Investment** - Comprehensive solution including development, infrastructure, and training

## 🎨 Website Features

### Design
- **Tech-Themed Dark UI** - Professional dark blue gradient background with modern typography
- **Responsive Layout** - Fully mobile-friendly design that works on all devices
- **Smooth Animations** - Polished transitions and hover effects throughout
- **Professional Typography** - Inter font for body text, JetBrains Mono for code

### Interactive Components
- **Accordion Sections** - Expandable/collapsible content sections with smooth animations
- **Sticky Navigation** - Fixed top navbar with smooth scroll-to-section functionality
- **Sidebar Navigation** - Quick jump links to all major proposal sections
- **Feature Cards** - Hover effects on project overview cards

### Content Sections
1. **Hero Section** - Eye-catching header with key project statistics
2. **Project Overview** - 6 feature cards highlighting capabilities
3. **Professional Bid Proposal** - Complete proposal with cost breakdown and ROI analysis
4. **Technical Specification** - Architecture and implementation details
5. **Development Timeline** - Week-by-week breakdown with daily schedules
6. **Architecture & Deployment** - Infrastructure and hosting details
7. **Contact Information** - Gantzter Designs LLC and AriesDroneServices LLC details

## 🚀 Hosting on GitHub Pages

### Option 1: Using GitHub Web Interface (Easiest)

1. **Create a New Repository**
   - Go to [github.com](https://github.com) and sign in
   - Click the "+" icon in the top right → "New repository"
   - Name it: `hercules-appfolio-proposal` (or any name you prefer)
   - Set to **Public** (required for free GitHub Pages)
   - Click "Create repository"

2. **Upload Files**
   - On the repository page, click "uploading an existing file"
   - Drag and drop these files: `index.html`, `styles.css`, `script.js`, `README.md`
   - Add commit message: "Initial commit: AppFolio Integration Proposal"
   - Click "Commit changes"

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages (left sidebar)
   - Under "Source", select "Deploy from a branch"
   - Select branch: `main` (or `master`), folder: `/ (root)`
   - Click "Save"
   - Wait 1-2 minutes for deployment

4. **Access Your Website**
   - Your site will be live at: `https://[your-username].github.io/hercules-appfolio-proposal/`
   - GitHub will show the URL at the top of the Pages settings

### Option 2: Using Git Command Line

1. **Create Repository on GitHub**
   - Go to github.com and create a new repository named `hercules-appfolio-proposal`
   - Do NOT initialize with README (we already have one)

2. **Push Local Repository**
   ```bash
   cd /path/to/proposal-website
   git remote add origin https://github.com/YOUR-USERNAME/hercules-appfolio-proposal.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Follow step 3 from Option 1 above

### Option 3: Using GitHub CLI

```bash
# Install GitHub CLI if not already installed
# Then authenticate
gh auth login

# Create repository and push
cd /path/to/proposal-website
gh repo create hercules-appfolio-proposal --public --source=. --remote=origin --push

# Enable GitHub Pages
gh api repos/:owner/hercules-appfolio-proposal/pages \
  -X POST \
  -F source[branch]=main \
  -F source[path]=/
```

## 📁 File Structure

```
proposal-website/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling and design system
├── script.js           # Interactive functionality (accordions, smooth scrolling)
└── README.md           # This file
```

## 🛠️ Local Development

To run the website locally for testing:

### Using Python (Built-in)
```bash
cd proposal-website
python3 -m http.server 8080
# Visit http://localhost:8080
```

### Using Node.js
```bash
npx serve proposal-website
# Visit http://localhost:3000
```

### Using PHP
```bash
cd proposal-website
php -S localhost:8080
# Visit http://localhost:8080
```

## 🎨 Customization

### Changing Colors
Edit `styles.css` and modify the CSS variables in the `:root` section:

```css
:root {
    --primary: #0066ff;        /* Main blue color */
    --secondary: #00d4ff;      /* Cyan accent */
    --accent: #7c3aed;         /* Purple accent */
    /* ... other colors ... */
}
```

### Updating Content
All content is stored in the `documentContent` object in `script.js`. Edit the content arrays to update proposal text.

### Changing Fonts
The website uses Google Fonts (Inter and JetBrains Mono). To change fonts, edit the `<link>` tag in `index.html` and update the font family in `styles.css`.

## 📞 Contact Information

**Gantzter Designs LLC**
- **CEO:** John Gantz
- **Email:** info@gantzterdesigns.com
- **Phone:** [Your phone number]

**AriesDroneServices LLC**
- **Services:** Drone photography, aerial surveys, property marketing

## 📄 License

This proposal website is proprietary and confidential. All rights reserved by Gantzter Designs LLC and AriesDroneServices LLC.

## 🔒 Security Note

This is a public-facing proposal website. Do not include sensitive information such as:
- API keys or credentials
- Internal pricing details not meant for public view
- Confidential client information
- Private contact details

---

**Built with ❤️ by Gantzter Designs LLC**

*Professional web development, AppFolio integration, and property management solutions*
