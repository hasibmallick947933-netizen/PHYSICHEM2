# PHYSICHEM

Premium website for a Physics & Chemistry coaching centre (Classes 9–12).

**Stack:** React (Vite) + Tailwind CSS + Framer Motion · Node.js + Express + MongoDB (Mongoose) + Cloudinary

---

## ⚠️ Read this first — Security

Credentials for MongoDB and Cloudinary were shared in plain text during this build. **They are not stored anywhere in this repository** (see `backend/.env.example`, which contains placeholders only) — but because they were exposed in a chat, you should:

1. **Rotate your MongoDB Atlas password** (Database Access → edit user → new password).
2. **Regenerate your Cloudinary API secret** (Dashboard → Settings → Security → regenerate).
3. Only ever put the new values into `backend/.env` (local, gitignored) or your Render/Vercel environment variable dashboard — never into a chat, a commit, or a public file.

`.gitignore` already excludes `.env` files, `node_modules`, and build output.

---

## What's built

- **Full public site** — Home (with a scroll-linked animated science visual built on `framer-motion`'s `useScroll`), About, Teachers, Courses, Methodology, Contact (working enquiry form wired to the API).
- **Full design system** — Navbar (glassmorphism on scroll, mobile menu, active-link indicator), Footer, Button/Card/Badge/SectionHeading primitives, dark navy + electric blue/cyan theme exactly per spec.
- **Admin dashboard** — Login (JWT), Overview stats, Teachers CRUD, Courses CRUD, Enquiries table with status updates, Settings.
- **Backend API** — Express + Mongoose models (Teacher, Course, Enquiry, Admin), JWT auth middleware, Cloudinary image upload route, all CRUD routes.
- **Deploy configs** — `render.yaml` for the backend, `frontend/vercel.json` for the SPA.
- Verified: `npm install` + `npm run build` both run clean on the frontend; every backend file passes `node --check`.

### Honest scope note
This is a real, working foundation you can run today — not a mockup. Placeholder content (`[Teacher Name]`, `[Phone Number]`, etc.) is used everywhere real data wasn't provided, exactly as instructed. The admin dashboard's "Site Settings" screen is a stub (shows the logged-in admin) — wire it to a `/api/settings` endpoint if you want contact info editable from the dashboard rather than hardcoded in `Footer.jsx`/`Contact.jsx`.

---

## Project structure

```
physichem/
├── frontend/                 React app (Vite)
│   └── src/
│       ├── components/
│       │   ├── layout/       Navbar, Footer
│       │   ├── ui/           Button, Card, Badge, SectionHeading
│       │   ├── home/         Hero, ScrollScienceVisual, Trust/Subjects/Teachers/Methodology/Classes/WhyChoose/FinalCTA
│       │   └── admin/        AdminSidebar, AdminLayout
│       ├── pages/             Home, About, Teachers, Courses, Methodology, Contact
│       │   └── admin/         AdminLogin, AdminDashboard, AdminTeachers, AdminCourses, AdminEnquiries, AdminSettings
│       ├── context/           AdminAuthContext (JWT session)
│       └── lib/api.js         Axios instance
├── backend/                  Express API
│   ├── config/                db.js, cloudinary.js
│   ├── models/                Teacher, Course, Enquiry, Admin
│   ├── middleware/auth.js     JWT protect middleware
│   ├── routes/                auth, teachers, courses, enquiries, upload, admin(stats)
│   └── server.js
├── render.yaml                Render blueprint for the backend
└── README.md
```

---

## Local setup

### 1. Backend

```bash
cd backend
npm install
cp .env.example .env
# edit .env with your (rotated) MongoDB URI, JWT secret, Cloudinary keys
npm run seed:admin   # creates your first admin login from ADMIN_SEED_EMAIL/PASSWORD in .env
npm run dev          # http://localhost:5000
```

### 2. Frontend

```bash
cd frontend
npm install
cp .env.example .env
# VITE_API_URL=http://localhost:5000/api
npm run dev          # http://localhost:5173
```

Admin dashboard: `http://localhost:5173/admin/login`

---

## Pushing to GitHub

I can't push to your repo directly from this chat (no stored git credentials). From your machine, inside this project folder:

```bash
git init                     # already done for you in the packaged zip — skip if present
git remote add origin https://github.com/hasibmallick947933-netizen/PHYSICHEM.git
git branch -M main
git add .
git commit -m "PHYSICHEM: initial full-stack build"
git push -u origin main
```

If the repo already has a commit (e.g. an auto-created README from GitHub), pull first: `git pull origin main --allow-unrelated-histories`, resolve any conflict, then push.

---

## Deploying

### Backend → Render

1. New **Web Service** → connect the `PHYSICHEM` GitHub repo. Render will detect `render.yaml` (root directory `backend`, build `npm install`, start `npm start`).
2. In the Render dashboard, set the environment variables flagged `sync: false` in `render.yaml`: `MONGODB_URI`, `JWT_SECRET`, `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`, `CLIENT_URL` (your Vercel frontend URL), `ADMIN_SEED_EMAIL`, `ADMIN_SEED_PASSWORD`.
3. Deploy, then run `npm run seed:admin` once via Render's Shell tab (or locally against the production `MONGODB_URI`) to create your admin login.

### Frontend → Vercel

1. New Project → import the same repo.
2. Set **Root Directory** to `frontend` (important — this is a monorepo).
3. Environment variable: `VITE_API_URL` = your Render backend URL + `/api` (e.g. `https://physichem-backend.onrender.com/api`).
4. Deploy. `frontend/vercel.json` already handles SPA routing (React Router refresh on deep links).

Once both are live, update `CLIENT_URL` on Render to your real Vercel domain (for CORS) and redeploy the backend.

---

## Next steps you may want

- Replace placeholder text (`[Teacher Name]`, `[Phone Number]`, `[Coaching Centre Address]`, etc.) with real content in `Footer.jsx`, `Contact.jsx`, `Teachers.jsx`, and seed real Teacher/Course documents via the admin dashboard.
- Wire the admin "Add Teacher" photo field to `POST /api/upload` (Cloudinary) — the endpoint exists; the form currently only takes a bio, not a file input.
- Add a Google Maps embed URL in `Contact.jsx` in place of the placeholder block.
- Consider adding rate-limiting (e.g. `express-rate-limit`) to the public `/api/enquiries` POST route before going live, to prevent spam submissions.
