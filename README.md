# Renn Valo - Portfolio Website

A professional portfolio website showcasing full-stack development and AI engineering projects by Renn Valo.

## 🚀 Features

- **Modern Design**: Beautiful, responsive design with Tailwind CSS
- **Fast Performance**: Lightweight Node.js/Express backend
- **Project Showcase**: Detailed project pages with live site links
- **Mobile Friendly**: Fully responsive across all devices
- **Easy to Deploy**: Simple setup and deployment process

## 🛠️ Technologies

- **Backend**: Node.js, Express
- **Frontend**: HTML5, Tailwind CSS, Vanilla JavaScript
- **Templating**: Server-side rendering with static files
- **Markdown**: Marked.js for content processing

## 📋 Prerequisites

- Node.js (version 16 or higher)
- npm (comes with Node.js)

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### 3. Run in Production

```bash
npm start
```

## 📁 Project Structure

```
Portfolio/
├── public/                 # Static files
│   ├── index.html         # Homepage
│   ├── project.html       # Project detail page
│   ├── data/
│   │   └── projects.json  # Project data
│   └── js/
│       ├── main.js        # Homepage JavaScript
│       └── project.js     # Project page JavaScript
├── server.js              # Express server
├── package.json           # Dependencies
└── README.md             # This file
```

## 🎨 Customization

### Adding a New Project

Edit `public/data/projects.json` and add your project:

```json
{
  "id": "project-id",
  "slug": "project-slug",
  "title": "Project Title",
  "subtitle": "Project Subtitle",
  "year": "2025",
  "category": "Web Application",
  "technologies": ["React", "Node.js"],
  "image": "https://example.com/image.jpg",
  "liveUrl": "https://example.com",
  "shortDescription": "Brief description...",
  "highlights": [
    "Feature 1",
    "Feature 2"
  ],
  "keyFeatures": [
    "Feature A",
    "Feature B"
  ],
  "challenges": "Description of challenges...",
  "outcome": "Description of outcome..."
}
```

### Customizing Colors

The site uses a purple gradient theme. To change colors, edit the Tailwind classes in the HTML files:

- Primary: `purple-600`
- Secondary: `indigo-600`
- Accent: `pink-600`

### Updating Contact Information

Edit the contact section in `public/index.html`:

```html
<a href="mailto:your-email@example.com">Email Me</a>
<a href="https://github.com/yourusername">GitHub</a>
```

## 🌐 Deployment

### Deploy to Heroku

1. Create a `Procfile`:
```
web: node server.js
```

2. Deploy:
```bash
git init
heroku create
git add .
git commit -m "Initial commit"
git push heroku main
```

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Railway

1. Connect your GitHub repository to Railway
2. Set the start command: `npm start`
3. Deploy automatically on push

### Deploy to a VPS

1. Upload files to your server
2. Install dependencies:
```bash
npm install --production
```

3. Use PM2 to keep the server running:
```bash
npm install -g pm2
pm2 start server.js --name portfolio
pm2 startup
pm2 save
```

4. Set up Nginx as a reverse proxy (optional):
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 🔧 Environment Variables

You can customize the port by setting the `PORT` environment variable:

```bash
PORT=8080 npm start
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

This is a personal portfolio, but feel free to fork it for your own use!

## 📄 License

MIT License - feel free to use this template for your own portfolio.

## 👤 Author

**Renn Valo**
- Full Stack Developer & AI Engineer
- Specializing in modern web applications and AI integration

## 🙏 Acknowledgments

- Tailwind CSS for the styling framework
- Unsplash for placeholder images
- Google Fonts for typography

---

Built with ❤️ by Renn Valo
