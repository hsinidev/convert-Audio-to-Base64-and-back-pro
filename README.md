# 🎙️ Audio ↔ Base64 Converter

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-doodax.com-2ea44f)](https://doodax.com/tools/convert-audio-to-base64/index.html)

<p align="center">
  <strong>The ultimate client-side tool for encoding audio files to Base64 and decoding them back instantly.</strong>
</p>

<p align="center">
  <a href="#-features">Features</a> •
  <a href="#-project-structure">Structure</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-privacy--security">Privacy</a> •
  <a href="#-contributing">Contributing</a>
</p>

---

## 🚀 LIVE DEMO

Check out the live application here: **[Base64.doodax.com](https://Base64.doodax.com)** (Opens in new tab)

---

## ✨ Features

-   **🔒 Privacy First**: Zero server uploads. All logic runs locally using HTML5 File API and FileReader.
-   **🔄 Bidirectional Conversion**:
    -   **Encode**: Drag & drop MP3, WAV, OGG, etc., to get a Base64 string.
    -   **Decode**: Paste a Base64 string to preview and download the audio file.
-   **⚡ Instant Preview**: Listen to your decoded audio immediately with the built-in HTML5 player.
-   **📋 Smart Clipboard**: One-click copy functionality for generated strings.
-   **🎨 Modern UI/UX**: Built with Tailwind CSS, featuring a responsive design and an immersive animated galaxy background.
-   **📱 Mobile Ready**: Fully optimized for touch devices and smaller screens.
-   **🔍 SEO Optimized**: Includes JSON-LD Schema, rich metadata, and content for high search visibility.

## 📂 Project Structure

```
/
├── public/                 # Static assets
│   ├── favicon.svg         # Site icon
│   ├── robots.txt          # SEO crawler instructions
│   └── sitemap.xml         # Site map
├── components/             # React components
│   ├── AudioDecoder.tsx    # Logic for decoding Base64 to audio
│   ├── AudioEncoder.tsx    # Logic for encoding audio files
│   ├── GalaxyBackground.tsx# Animated background
│   ├── Modal.tsx           # Reusable modal component
│   └── SeoArticle.tsx      # SEO content component
├── hooks/                  # Custom React hooks
│   └── useCopyToClipboard.ts
├── App.tsx                 # Main application layout
├── index.html              # Entry HTML with SEO meta tags
├── index.tsx               # React entry point
└── types.ts                # TypeScript definitions
```

## 🛠️ Tech Stack

-   **Frontend**: React 18+, TypeScript
-   **Styling**: Tailwind CSS
-   **Tooling**: Vite

## 🚀 Getting Started

### Prerequisites
-   Node.js (v16+)
-   npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/hsinidev/audio-base64-converter.git
    cd audio-base64-converter
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run local development server**
    ```bash
    npm run dev
    ```

## 🛡️ Privacy & Security

This application is designed with a "Zero-Trust" architecture regarding server interactions. 
-   **No Backend**: There is no API server processing your files.
-   **Memory Only**: Processed files exist only in your browser's RAM during the session.
-   **GDPR/CCPA Compliant**: Since we collect no data, we are inherently compliant.

## 👨‍💻 Author

**HSINI MOHAMED**

-   Website: [doodax.com](https://doodax.com)
-   Github: [@hsinidev](https://github.com/hsinidev)
-   Email: [hsini.web@gmail.com](mailto:hsini.web@gmail.com)

---
<p align="center">
  Made with ❤️ and ☕ by Hsini
</p>
