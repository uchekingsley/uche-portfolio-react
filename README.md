# Uche.Dev — Portfolio

A modern, interactive portfolio website built with **React + Vite** and **Tailwind CSS v4**, showcasing my work as a Mobile App Engineer specializing in Flutter and React Native development.

🔗 **Live Site:** [uchekingsley.netlify.app](https://uchekingsley.netlify.app)

---

## ✨ Features

- **Interactive Canvas Background** — Live falling light streaks with mouse-reactive particle bubbles
- **Smartphone Device Mockups** — Project screenshots displayed inside CSS-rendered phone bezels
- **Scroll-Triggered Animations** — Framer Motion entrance animations on all sections
- **Contact Form Integration** — Dual submission to Formspree (email) and Supabase (database)
- **Resume Download** — One-click PDF download from Supabase Storage
- **Responsive Design** — Fully optimized for mobile, tablet, and desktop
- **Open Graph Tags** — Rich link previews for LinkedIn, Twitter, and WhatsApp sharing

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Framework** | React 19 + Vite |
| **Styling** | Tailwind CSS v4 |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **Form Handling** | Formspree |
| **Database** | Supabase |
| **File Storage** | Supabase Storage |
| **Hosting** | Netlify + Firebase |
| **Analytics** | Google Analytics |

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/uchekingsley/uche-portfolio-react.git
cd uche-portfolio-react

# Install dependencies
npm install

# Start the development server
npm run dev
```

## ⚙️ Environment Variables

Create a `.env.local` file in the project root:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_RESUME_URL=your_supabase_storage_resume_url
```

## 📁 Project Structure

```
src/
├── assets/images/       # Optimized .webp project screenshots
├── components/
│   ├── BubbleCanvas.jsx  # Interactive canvas background
│   └── ProjectCarousel.jsx # Smartphone mockup image carousel
├── lib/
│   └── supabase.js       # Supabase client configuration
├── sections/
│   ├── Navbar.jsx        # Fixed navigation header
│   ├── Hero.jsx          # Landing section with typewriter effect
│   ├── Projects.jsx      # Project showcase grid
│   ├── Experience.jsx    # Work & Education timeline
│   ├── Services.jsx      # Engineering services offered
│   ├── Skills.jsx        # Animated tech stack marquee
│   ├── Contact.jsx       # Contact form with dual submission
│   └── Footer.jsx        # Footer with social links
├── App.jsx               # Main application layout
└── index.css             # Tailwind theme configuration
```

## 📬 Contact

- **Email:** uchekingsley15@gmail.com
- **LinkedIn:** [Uche Ubaka](https://www.linkedin.com/in/uche-ubaka-30a95b152)
- **GitHub:** [uchekingsley](https://github.com/uchekingsley)

---

Built with ☕ and React.
