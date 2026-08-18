# 🚀 Hyderabad Startup Map

A comprehensive ecosystem explorer for Hyderabad's thriving startup and tech community. Discover emerging startups, find funding opportunities, connect with founders, and explore job openings across the city.

**Live Demo:** [hyd-startups-map.vercel.app](https://hyd-startups-map.vercel.app)

---

## ✨ Features

### 🗺️ **Interactive Map Explorer**
- Real-time map visualization of Hyderabad startups
- Click markers to view startup details instantly
- Responsive map controls and zoom functionality
- Location-based startup discovery

### 🔍 **Advanced Filtering**
- Filter by stage (Seed, Series A, Series B+, etc.)
- Search by industry (AI, FinTech, HealthTech, AgriTech, etc.)
- Location-based filtering (HITEC City, Gachibowli, Madhapur, etc.)
- Search by startup name or tagline

### 📊 **Rich Startup Data**
- 23+ active Hyderabad startups
- Funding information and employee count
- Founder details with LinkedIn profiles
- Website links and company descriptions
- Industry classification and stage tracking

### 👥 **Founder Directory**
- 13+ founder profiles across industries
- LinkedIn integration for networking
- Founder-to-company connections
- Role and company information

### 💼 **Job Listings**
- 15+ active job openings
- Positions across engineering, product, design, sales
- Company information for each listing

### 💰 **Investor Network**
- 20+ active VCs and angel networks
- Focus areas and investment thesis
- Geographic presence (Hyderabad, Bengaluru, Pan-India)

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19 + TypeScript
- **Styling:** Tailwind CSS
- **Maps:** Leaflet + React-Leaflet + OpenStreetMap
- **Data:** JSON-based local dataset
- **Deployment:** Vercel (Serverless)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/saisuchindra/hyd-startups-map.git
cd hyd-startups-map

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
hyd-startups-map/
├── app/
│   ├── (marketing)/          # Marketing pages
│   ├── api/                  # API routes
│   ├── admin/                # Admin dashboard
│   ├── auth/                 # Authentication
│   ├── explore/              # Main explorer page
│   ├── startups/             # Startup profiles
│   ├── founders/             # Founder directory
│   ├── investors/            # Investor list
│   ├── industries/           # Industry pages
│   ├── jobs/                 # Job listings
│   └── locations/            # Location pages
├── components/
│   └── explore/              # Map & explorer components
├── data/
│   └── hyderabad-startups.json   # Main dataset
├── lib/
│   ├── real-data.ts          # Data adapter
│   └── mock-data.ts          # Data re-export
└── public/
```

---

## 📊 Dataset Overview

### Startups (23)
Covers diverse industries:
- **AI & ML:** Uniphore, HyperVerge, ML Cubes, STAQU Technologies
- **FinTech:** BharatX, Telr
- **HealthTech:** mFine, Livongo, Aarogya
- **PropTech & RentTech:** MyGate, Furlenco
- **EdTech:** NxtWave
- **Infrastructure:** Cloud4C, Delta Electronics, Apptio
- **Deep Tech:** QNu Labs, Asteria Aerospace
- **And more...**

### Founders (13+)
Key startup leaders across the ecosystem with LinkedIn profiles.

### Investors (20)
Active VCs and angel networks including:
- Peak XV Partners, Sequoia Capital India, Flipkart Ventures
- Sage Angel Circle, Hyderabad Angels Network
- Endiya Partners, Khosla Impact, and more

### Jobs (15)
Current openings in engineering, product, design, sales, and operations.

---

## 🎯 API Routes

- `GET /api/startups` - List all startups
- `GET /api/startups/[id]` - Get startup details
- `GET /api/founders` - List all founders
- `GET /api/investors` - List all investors
- `GET /api/jobs` - List all jobs
- `GET /api/search` - Search across startups, founders, investors

---

## 📱 Pages

| Route | Purpose |
|-------|---------|
| `/` | Landing page |
| `/explore` | Interactive startup map & explorer |
| `/startups` | Startups directory |
| `/startups/[slug]` | Individual startup profile |
| `/founders` | Founders directory |
| `/investors` | Investor directory |
| `/jobs` | Job listings |
| `/industries` | Industry insights |
| `/locations` | Location-based explorer |
| `/search` | Global search |

---

## 🎨 UI Components

- **StartupMap** - Interactive Leaflet map with markers and popups
- **StartupDetailDrawer** - Right-side detail panel
- **ExplorerHeader** - Search bar and view mode toggle
- **ExplorerSidebar** - Advanced filters and options

---

## 🔄 Data Updates

The dataset is stored in `data/hyderabad-startups.json` and can be easily updated:

```json
{
  "startups": [...],
  "founders": [...],
  "investors": [...],
  "jobs": [...],
  "industryHighlights": [...],
  "popularLocations": [...]
}
```

---

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Docker

```bash
docker build -t hyd-startups-map .
docker run -p 3000:3000 hyd-startups-map
```

---

## 🐛 Known Issues & Future Work

- [ ] Add marker clustering for better performance with large datasets
- [ ] Implement user authentication and profile management
- [ ] Add startup submission and claiming workflow
- [ ] Integrate real-time funding data
- [ ] Multi-city expansion (Bangalore, Delhi, Mumbai)
- [ ] Mobile app version
- [ ] Advanced analytics dashboard

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👤 Author

**Sai Suchindra**
- GitHub: [@saisuchindra](https://github.com/saisuchindra)
- LinkedIn: [Sai Suchindra](https://www.linkedin.com/in/saisuchindra)

---

## 🙏 Acknowledgments

- OpenStreetMap and Leaflet for mapping infrastructure
- All Hyderabad startups and founders in the ecosystem
- Next.js and React communities for excellent frameworks

---

## 📞 Support

For questions or feedback, please open an issue on GitHub or reach out directly.

**Happy exploring! 🚀**

