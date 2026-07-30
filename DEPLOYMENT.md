# Deployment Guide: Storm Surge GIS Dashboard

## Option 1: GitHub Pages (Recommended)

### Step 1: Create GitHub Repository
```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Storm Surge GIS Dashboard"

# Create repository on GitHub (via web interface)
# Then link your local repo to GitHub
git remote add origin https://github.com/YOUR-USERNAME/storm-surge-gis-dashboard.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 2: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **main** branch
4. Select **/ (root)** folder
5. Click **Save**
6. Your site will be published at: `https://YOUR-USERNAME.github.io/storm-surge-gis-dashboard/`

### Step 3: Wait for Deployment
- GitHub Pages typically takes 1-5 minutes to deploy
- Check the **Actions** tab to monitor build progress
- Once complete, visit your URL to see the live dashboard

---

## Option 2: Netlify

### Quick Deploy
1. Visit [Netlify Drop](https://app.netlify.com/drop)
2. Drag and drop the entire `storm-surge-gis-dashboard` folder
3. Get instant deployment URL
4. Optional: Connect to GitHub for continuous deployment

### GitHub Integration
```bash
# Push code to GitHub first (see Option 1, Step 1)

# Then on Netlify:
1. Click "New site from Git"
2. Choose GitHub and authorize
3. Select your repository
4. Build settings:
   - Build command: (leave empty)
   - Publish directory: /
5. Click "Deploy site"
```

---

## Option 3: Vercel

### Quick Deploy
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project directory
cd storm-surge-gis-dashboard
vercel

# Follow prompts to deploy
```

### GitHub Integration
1. Visit [Vercel](https://vercel.com)
2. Click "Import Project"
3. Connect GitHub repository
4. Configure:
   - Framework Preset: Other
   - Root Directory: ./
   - Build Command: (none)
   - Output Directory: ./
5. Click "Deploy"

---

## Option 4: Custom Domain Setup

### GitHub Pages with Custom Domain
1. Add a `CNAME` file to repository root:
```bash
echo "yourdomain.com" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

2. Configure DNS:
   - Add A records pointing to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or add CNAME record: `YOUR-USERNAME.github.io`

3. Enable HTTPS in GitHub Pages settings

---

## Repository Structure

```
storm-surge-gis-dashboard/
├── index.html              # Main dashboard page
├── css/
│   └── styles.css         # Custom styles
├── js/
│   ├── map.js            # Leaflet map logic
│   ├── calculator.js     # Vulnerability calculator
│   └── charts.js         # Chart.js visualizations
├── data/                  # (Optional) JSON data files
├── images/               # (Optional) Image assets
├── README.md             # Project documentation
├── DEPLOYMENT.md         # This file
├── LICENSE              # MIT License
└── .gitignore           # Git ignore rules
```

---

## Post-Deployment Checklist

- [ ] Verify all interactive features work
- [ ] Test map marker clicks and popups
- [ ] Test vulnerability calculator
- [ ] Test inundation estimator sliders
- [ ] Verify all charts render correctly
- [ ] Test on mobile devices
- [ ] Check browser console for errors
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Verify all external CDN resources load (Leaflet, Chart.js, Tailwind)

---

## Troubleshooting

### Dashboard Not Loading
- Check browser console for errors
- Verify all CDN links are accessible
- Ensure file paths are relative (not absolute)

### Map Not Displaying
- Check Leaflet.js CDN is loading
- Verify OpenStreetMap tiles are accessible
- Check browser console for tile loading errors

### Charts Not Rendering
- Verify Chart.js CDN is loading
- Check canvas elements exist in DOM
- Review browser console for Chart.js errors

### GitHub Pages 404 Error
- Ensure `index.html` is in repository root
- Check GitHub Pages settings point to correct branch
- Wait 5-10 minutes after enabling GitHub Pages

---

## Performance Optimization

### Enable Caching (Netlify/Vercel)
Add `netlify.toml` or `vercel.json`:

**netlify.toml**:
```toml
[[headers]]
  for = "/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000"
    
[[headers]]
  for = "/*.html"
  [headers.values]
    Cache-Control = "public, max-age=0, must-revalidate"
```

**vercel.json**:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000"
        }
      ]
    }
  ]
}
```

---

## Continuous Deployment

Once connected to GitHub, any push to the main branch will automatically trigger a new deployment on:
- GitHub Pages (via GitHub Actions)
- Netlify (via webhook)
- Vercel (via Git integration)

---

## Support

For issues or questions:
- GitHub Issues: Create an issue in your repository
- Documentation: See README.md
- Original Deployment: https://jl8ynu1c.scispace.co

---

## License

This project is licensed under the MIT License - see LICENSE file for details.
