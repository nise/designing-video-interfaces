# Quick Start Guide

## Get Running in 2 Minutes

### 1. Install Dependencies

```bash
cd static-app
npm install
```

### 2. Start Dev Server

```bash
npx vite
```

Open http://localhost:5173

### 3. (Optional) Load Your Data

Export from MongoDB:

```bash
cd ..
node scripts/export-data.js
cd static-app
npx vite
```

## Build for Production

```bash
npm run build
```

Then deploy the `dist/` folder to your hosting service (GitHub Pages, Netlify, Vercel, etc.)

## Documentation

- **SETUP_GUIDE.md** - Complete setup and customization guide
- **README.md** - Full documentation with all features
- **../MIGRATION_GUIDE.md** - How it was converted from Express

## Key Files to Know

| File                          | Purpose                                                    |
| ----------------------------- | ---------------------------------------------------------- |
| `src/App.vue`                 | Main navigation and layout                                 |
| `src/views/`                  | Page components (Home, Portals, Patterns, etc.)            |
| `src/services/dataService.js` | Loads JSON data                                            |
| `public/data/`                | Your data files (portals.json, patterns.json, images.json) |
| `vite.config.js`              | Build configuration                                        |

## Features

✅ Browse portals with search and sort  
✅ View portal details with images  
✅ Browse patterns and see related portals  
✅ Responsive mobile design  
✅ No backend or database required

## Troubleshooting

**Port 5173 in use?**

```bash
npx vite --port 3000
```

**Need help?**
See SETUP_GUIDE.md or README.md in this directory
