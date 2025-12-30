# Feeble

Feeble is a modern web application built with React, TypeScript, and Vite, featuring a responsive and animated UI.

## 🚀 Tech Stack

This project utilizes the following technologies:

- **Core Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Motion](https://motion.dev/) (Framer Motion)

## 📁 Project Structure

The project structure is organized as follows:

```
Feeble/
├── src/
│   ├── assets/              # Static assets (images, icons)
│   ├── components/          # Reusable UI components
│   │   ├── homepage/        # Homepage specific components
│   │   │   └── herosection.tsx
│   │   └── navbar/          # Navigation components
│   │       └── Navbar.tsx
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles and Tailwind directives
├── public/                 # Public assets
├── package.json            # Project dependencies and scripts
└── vite.config.ts          # Vite configuration
```

## 🛠️ Getting Started

1.  **Install dependencies:**

    ```bash
    npm install
    ```

2.  **Run the development server:**

    ```bash
    npm run dev
    ```

3.  **Build for production:**

    ```bash
    npm run build
    ```

## 🎨 Features

-   **Responsive Design**: Fully responsive layout adapting to mobile, tablet, and desktop screens.
-   **Modern UI**: Clean and minimal interface with custom typography (General Sans).
-   **Animations**: Smooth entrance and scrolling animations using Motion.
