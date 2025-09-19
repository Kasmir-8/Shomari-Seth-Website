# Research Hub - Personal Website for Researchers

A modern, responsive personal website designed for two researchers (Shomari and Seth) featuring individual profiles, collaborative projects, and research deliverables.

## Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive design that works on desktop, tablet, and mobile
- **Individual Profiles**: Separate pages for each researcher with:
  - Personal statements
  - Education & background
  - Research interests
  - Achievements
  - CV/Resume downloads
  - Contact information with forms
- **Zefi Project Section**: Dedicated collaborative project showcase
- **Deliverables Portfolio**: Filterable collection of publications, presentations, reports, and datasets
- **Interactive Features**: Mobile navigation, smooth scrolling, contact forms

## File Structure

```
seth website/
├── index.html          # Homepage with researcher cards
├── shomari.html        # Shomari's personal profile page
├── seth.html          # Seth's personal profile page
├── zefi-project.html  # Collaborative Zefi project page
├── deliverables.html  # Research deliverables and publications
├── styles.css         # Main stylesheet with responsive design
├── script.js          # JavaScript for interactions and functionality
└── README.md          # This file
```

## Getting Started

1. **Clone or download** the website files to your web server or local directory
2. **Open `index.html`** in a web browser to view the website
3. **Customize the content** by editing the HTML files (see customization guide below)

## Customization Guide

### Personal Information

#### For Shomari (`shomari.html`):
- Update personal statement in the first content card
- Modify education details in the Education & Background section
- Edit research interests list
- Update achievements list
- Replace contact information (email, phone, institution)
- Add real CV/resume download links

#### For Seth (`seth.html`):
- Follow the same steps as above for Seth's information

### Zefi Project (`zefi-project.html`):
- Update project description and objectives
- Modify team member information
- Edit timeline items and dates
- Update progress metrics
- Add real resource download links

### Deliverables (`deliverables.html`):
- Add new deliverable items following the existing structure
- Update publication details, authors, and download links
- Modify filter categories as needed

### Styling and Branding

#### Colors:
- Primary blue: `#2563eb`
- Secondary green: `#10b981`
- Warning orange: `#f59e0b`
- Error red: `#ef4444`
- Purple: `#8b5cf6`

#### Fonts:
- Main font: Inter (loaded from Google Fonts)
- Icons: Font Awesome 6.0.0

### Adding New Content

#### New Deliverable Item:
```html
<div class="deliverable-item" data-category="publication">
    <div class="deliverable-meta">
        <span class="deliverable-type publication">Publication</span>
        <span class="deliverable-date">Your Date</span>
    </div>
    <h3>Your Title</h3>
    <p class="deliverable-authors">Author Names</p>
    <p class="deliverable-description">Description...</p>
    <div class="deliverable-journal">
        <i class="fas fa-book"></i>
        <span>Journal Name</span>
    </div>
    <div class="deliverable-actions">
        <a href="#" class="btn btn-sm btn-primary">View</a>
        <a href="#" class="btn btn-sm btn-outline">Download</a>
    </div>
</div>
```

#### New Timeline Item for Zefi Project:
```html
<div class="timeline-item completed">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <h4>Milestone Title</h4>
        <p class="timeline-date">Date</p>
        <p>Description</p>
    </div>
</div>
```

## Technical Details

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Internet Explorer 11+ (with reduced functionality)

### Dependencies
- Google Fonts (Inter font family)
- Font Awesome 6.0.0 (for icons)
- No JavaScript frameworks required

### Performance
- Optimized CSS and JavaScript
- Lazy loading for animations
- Responsive images (when you add real photos)
- Minimal external dependencies

## Deployment

### Local Testing
Simply open `index.html` in any modern web browser.

### Web Hosting
Upload all files to your web server. The website will work with:
- GitHub Pages
- Netlify
- Vercel
- Traditional web hosting
- Any static site hosting service

### Domain Setup
1. Upload files to your web server
2. Ensure `index.html` is in the root directory
3. Configure your domain to point to the hosting location

## Customization Tips

1. **Replace placeholder content** with real information
2. **Add real photos** by replacing the icon placeholders with `<img>` tags
3. **Update contact forms** to connect with your email service or contact form processor
4. **Add analytics** by including Google Analytics or similar tracking code
5. **SEO optimization** by adding meta descriptions and proper title tags

## Contact & Support

This website was created as a professional template for academic researchers. For customization help or questions, refer to the HTML/CSS documentation or web development resources.

## License

This template is provided as-is for personal and academic use. Feel free to modify and customize for your needs.
