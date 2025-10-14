# Elite Auto Care

A modern, responsive website for a premium car detailing and maintenance service. Features an intuitive 3-step booking process allowing customers to build custom service packages.

## 🚗 Features

- **Modern Design**: Dark gradient theme with purple accents and smooth animations
- **3-Step Booking Process**: 
  - Step 1: Choose Detailing Package
  - Step 2: Choose Maintenance Plan
  - Step 3: Review & Book
- **Flexible Packages**: Mix and match from detailing and maintenance services
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile devices
- **Interactive UI**: Hover effects, smooth transitions, and visual feedback
- **Package Options**:
  - Monthly subscriptions (Basic, Premium, Platinum)
  - Custom packages
  - One-time ad hoc services

## 📋 Service Offerings

### Detailing Packages
- **Basic** - $500/month (1 clean per month)
- **Premium** - $900/month (2 cleans per month)
- **Platinum** - $1,600/month (premium service with unlimited touch-ups)
- **Custom** - Tailored packages
- **Ad Hoc** - $700 one-time service

### Maintenance Plans
- **Basic** - $500/month (1 call out per month)
- **Premium** - $900/month (2 call outs per month)
- **Platinum** - $1,600/month (unlimited call outs)
- **Custom** - Tailored plans
- **Ad Hoc** - $700 one-time service

## 🛠️ Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, Animations)
- Vanilla JavaScript (ES6+)
- No external dependencies or frameworks

## 📁 Project Structure

```
elite-auto-care/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styling
├── js/
│   └── main.js         # JavaScript functionality
├── README.md           # Project documentation
└── .gitignore         # Git ignore file
```

## 🚀 Getting Started

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR-USERNAME/elite-auto-care.git
   cd elite-auto-care
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js
     npx serve
     ```

3. **View the site**
   - Navigate to `http://localhost:8000` (if using local server)
   - Or directly open the `index.html` file

### GitHub Pages Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages section
   - Under "Source", select `main` branch
   - Click Save

3. **Access your site**
   - Your site will be available at: `https://YOUR-USERNAME.github.io/elite-auto-care/`

## 🎨 Customization

### Colors
Edit the gradient colors in `css/styles.css`:
```css
/* Main gradient background */
background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);

/* Accent gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Pricing
Update prices in `index.html` by finding the pricing cards in each step section.

### Content
Modify text content directly in `index.html`:
- Hero section
- Services descriptions
- Stats
- Footer information

### Contact Information
Update in the footer section:
```html
<li>123 Auto Street</li>
<li>Phone: (555) 123-4567</li>
<li>info@eliteautocare.com</li>
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Features to Add

Potential enhancements for future versions:
- [ ] Backend integration for form submissions
- [ ] Payment gateway integration
- [ ] Customer dashboard
- [ ] Booking calendar
- [ ] Email notifications
- [ ] Admin panel
- [ ] Image gallery
- [ ] Customer testimonials
- [ ] Google Maps integration
- [ ] Multi-language support

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

For inquiries about this project
