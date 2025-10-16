# Next Blog App

Modern full‑stack blog & subscription platform built with Next.js App Router (v15), React 19, MongoDB (Mongoose), Tailwind CSS, and file‑based image uploads. It provides a public blog listing & detail pages, plus an admin dashboard to manage posts and email newsletter subscriptions.

## ✨ Features

- Public blog list with individual blog detail pages
- Skeleton loading on main blog grid (shadcn-style pulse placeholders sized exactly like cards)
- Image upload (stored locally in `public/` with timestamped filenames)
- Admin dashboard sidebar with sections:
  - Add Product / (Add Blog Post)
  - Blog List (CRUD: create, list, delete)
  - Subscriptions (list & delete subscriber emails)
	- Active menu icon contrast fix (icon turns white on selection)
- Newsletter email capture & storage
- RESTful API routes using Next.js Route Handlers
- MongoDB connection with connection caching to avoid duplicates in dev
- Strongly structured Mongoose models (`Blog`, `Email`)
- Tailwind CSS styling
- Toast notifications (react‑toastify) potential for UX feedback (library included)

## 🧱 Tech Stack

| Layer         | Technology              |
| ------------- | ----------------------- |
| Framework     | Next.js 15 (App Router) |
| UI Library    | React 19                |
| Styling       | Tailwind CSS            |
| Data Layer    | MongoDB + Mongoose 8    |
| HTTP Client   | Axios                   |
| Notifications | React Toastify          |
| Runtime       | Node.js (via Next.js)   |

## 📁 Project Structure

```
app/
	layout.js              # Root layout
	page.js                # Landing page (blog list or hero)
	globals.css            # Global Tailwind imports
	blogs/[id]/page.jsx    # Dynamic blog detail page
	api/blog/route.js      # Blog CRUD (GET list|single, POST create, DELETE remove)
	api/email/route.js     # Email subscriptions (GET list, POST create, DELETE remove)
	admin/
		layout.jsx           # Admin dashboard layout (sidebar etc.)
		page.jsx             # Admin landing/dashboard page
		addProduct/page.jsx  # Form to create blog post (image upload)
		blogList/page.jsx    # List & delete blogs
		subscriptions/page.jsx # List & delete subscriber emails
Components/
	Header.jsx / Footer.jsx
	BlogList.jsx / BlogItem.jsx
	AdminComponents/
		Sidebar.jsx
		BlogTableItem.jsx
		SubsTableItem.jsx
lib/
	config/db.js           # Mongo connection helper (uses MONGODB_URI, MONGODB_DBNAME)
	models/BlogModel.js    # Blog schema & model
	models/EmailModel.js   # Email schema & model
public/                  # Static assets + uploaded images
Assets/                  # JS asset references
README.md
```

## 🧭 Loading States

- The main blog list shows skeleton placeholders while data is fetched from `/api/blog`.
	- Component: `Components/BlogCardSkeleton.jsx`
	- Usage: rendered by `Components/BlogList.jsx` when `loading === true`
	- Layout: widths match `BlogItem` cards (w-[330px] sm:w-[300px]) ensuring identical column count.
	- Animation: Tailwind `animate-pulse` (no extra dependencies).


## 🗃️ Data Models

### BlogModel (`blog` collection)

```
title:       String (required)
description: String (required)
category:    String (required)
author:      String (required)
image:       String (required)
authorImg:   String (required)
date:        Date (default: now)
```

### EmailModel (`email` collection)

```
email: String (required)
date:  Date (default: now)
```

## 🚀 Getting Started

1. Clone & install
   ```bash
   git clone <repo-url>
   cd next-blog-app
   npm install
   ```
2. Run development server
   ```bash
   npm run dev
   ```
3. Open http://localhost:3000 in your browser.

### Available Scripts

| Script          | Description                      |
| --------------- | -------------------------------- |
| `npm run dev`   | Start dev server with hot reload |
| `npm run build` | Create production build          |
| `npm run lint`  | Run ESLint over the project      |
