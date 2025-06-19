# 📦 recall-products

A modern web application built with **Next.js 15**, **React 19**, **Tailwind CSS 4**, and **NextAuth.js**, designed for managing or displaying product recalls or similar data-centric functionalities.

## 🚀 Introduction

**recall-products** is a private web application leveraging cutting-edge frontend technologies to deliver a high-performance user experience. It includes robust authentication via OAuth providers and a clean, responsive UI built with Tailwind CSS and animated with tw-animate-css.

---

## ✨ Features

- ⚡ Built on Next.js 15 with Turbopack for fast development
- 🎨 UI components with Tailwind CSS and icon sets from Phosphor, Lucide, and React Icons
- 🔐 Secure OAuth authentication via Google and Apple with NextAuth.js
- 🎭 Animated UI using `tw-animate-css`
- 🧩 Modular architecture with TypeScript

---

## 💾 Installation

```bash
git clone https://github.com/your-org/recall-products.git
cd recall-products
npm install
```

---

## ▶️ Usage

### Development

```bash
npm run dev
```

### Production

```bash
npm run build
npm run start
```

---

## ⚙️ Configuration

Create a `.env` file in the root of your project with the following:

```env
AUTH_SECRET=your_auth_secret

AUTH_GOOGLE_ID=your_google_client_id
AUTH_GOOGLE_SECRET=your_google_client_secret

AUTH_APPLE_ID=your_apple_client_id
AUTH_APPLE_SECRET=your_apple_client_secret
```

These credentials are required for OAuth-based login through Google and Apple. Make sure to keep this file secure and never commit it to version control.

---

## 📜 Scripts

| Script          | Description                    |
| --------------- | ------------------------------ |
| `npm run dev`   | Starts development server      |
| `npm run build` | Builds the application         |
| `npm run start` | Starts production server       |
| `npm run lint`  | Lints the project using ESLint |

---

## 📦 Dependencies

**Runtime:**

- `next` `v15.3.3`
- `react` `v19`
- `next-auth` (OAuth support)
- `tailwindcss` `v4`
- Icon libraries: `@phosphor-icons/react`, `lucide-react`, `react-icons`

**Dev Tools:**

- `TypeScript` `^5`
- `ESLint` `^9`
- `@types/*` for React/Node
- `tailwindcss` plugins: `tw-animate-css`, `@tailwindcss/postcss`

---

## 🛠 Development

This project uses:

- TypeScript for static typing
- ESLint and `eslint-config-next` for linting
- Class utility management with `clsx` and `class-variance-authority`

---

## 🧩 Troubleshooting

- **Auth Errors:** Ensure all values in `.env` are correctly set and match your OAuth provider's credentials.
- **Build Failures:** Run `npm run lint` and fix all linting issues before running `build`.
- **Styles not loading:** Confirm Tailwind CSS and PostCSS config are correctly set up.

---

## 👥 Contributors

This is a private project. To contribute, please reach out to the maintainer.

---

## 📄 License

This project is private and not licensed for public use.
