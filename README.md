# Divyashree H — Portfolio Website

A modern, responsive portfolio website showcasing my experience as a Full-Stack Engineer at SAP Labs.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

- **Dark Theme** with lime/neon accent color (#c8ff00)
- **Grid-dot Background** on hero section
- **Scroll Reveal Animations** using Intersection Observer
- **Active Navigation Highlighting** on scroll
- **Responsive Design** — works on all devices
- **No Build Step Required** — pure HTML, CSS, and JavaScript

## 🚀 Run Locally

Simply open `index.html` in your browser — no build step or server needed!

```bash
# Option 1: Double-click index.html

# Option 2: Use a local server (recommended for development)
npx serve .

# Option 3: Use Python's built-in server
python -m http.server 8000

# Option 4: Use VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file with all sections
├── style.css           # Styles with CSS variables & dark theme
├── script.js           # Scroll animations & interactivity
├── README.md           # This file
├── SKILL.md            # Portfolio generation guidelines
└── Divyashree_H_*.pdf  # Resume PDF
```

## 🌐 Deploy

### GitHub Pages

1. Push this repository to GitHub
2. Go to **Settings** → **Pages**
3. Under "Source", select **main** branch and **/ (root)** folder
4. Click **Save**
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **Add New** → **Project**
3. Import your GitHub repository (or drag & drop the folder)
4. Click **Deploy**
5. Your site will be live instantly with a `.vercel.app` URL

### Netlify

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the project folder onto the deploy area
3. Your site will be live instantly with a `.netlify.app` URL

### Cloudflare Pages

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect your GitHub repository
3. Set build command to empty (no build needed)
4. Set output directory to `/`
5. Deploy!

## 🎨 Customization

### Change Accent Color

Edit the CSS variables in `style.css`:

```css
:root {
  --accent: #c8ff00;           /* Main accent color */
  --accent-dim: rgba(200, 255, 0, 0.15);
  --accent-glow: rgba(200, 255, 0, 0.4);
}
```

### Change Fonts

Update the Google Fonts import in `index.html` and the font variables in `style.css`:

```css
:root {
  --font-display: 'Syne', sans-serif;
  --font-body: 'DM Sans', sans-serif;
  --font-mono: 'Space Mono', monospace;
}
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by Divyashree H**

📧 [shreedivya1920@gmail.com](mailto:shreedivya1920@gmail.com) | 💼 [LinkedIn](https://linkedin.com/in/divyashreeh15) | 🐙 [GitHub](https://github.com/divyashreeh15)