# Indonesian Tour Travel (ITT) 🏝️

Built with modern tech (Next.js, PostgreSQL, Tailwind CSS), **ITT** makes it easy for domestic and international travelers to discover and book authentic Indonesian tours online.

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Scripts](#-scripts)
- [Environment Variables](#-environment-variables)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

- 🔍 **Tour Discovery**: Browse and search authentic Indonesian tours
- 🎫 **Easy Booking**: Seamless booking experience for travelers
- 💳 **Payment Integration**: Secure payment processing
- 🗺️ **Interactive Maps**: Explore tour destinations with maps
- ⭐ **Reviews & Ratings**: See traveler feedback and ratings
- 🌍 **Multi-language Support**: Cater to international tourists
- 📱 **Responsive Design**: Works perfectly on all devices

## 🛠️ Tech Stack

### Frontend
- **Next.js 15.3.3** - React framework with App Router
- **React 19** - UI library
- **TypeScript 5.8** - Type-safe JavaScript
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Clsx** - Utility for classNames

### Backend
- **Next.js API Routes** - Serverless functions
- **PostgreSQL** - Relational database

### Development Tools
- **ESLint** - Code linting
- **TypeScript** - Static type checking
- **Turbopack** - Fast bundler

## 📦 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **PostgreSQL** (v12 or higher)
- **Git**

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rahmatez/indonesian-tour-travel.git
   cd indonesian-tour-travel
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Set up the database**
   ```bash
   # Run migrations
   npm run db:migrate
   ```

## 🎯 Getting Started

### Development Server

Start the development server with Turbopack:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Production Build

Build the application for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## 📁 Project Structure

```
indonesian-tour-travel/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── api/               # API routes
├── components/            # Reusable React components
├── lib/                   # Utility functions and helpers
├── styles/                # Global styles
├── public/                # Static assets
├── types/                 # TypeScript type definitions
├── package.json          # Project dependencies
├── tsconfig.json         # TypeScript configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── next.config.js        # Next.js configuration
```

## 📝 Scripts

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint

# Lint and fix issues
npm run lint -- --fix
```

## 🔐 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/indonesian_tour_travel

# API
NEXT_PUBLIC_API_URL=http://localhost:3000

# Authentication (if applicable)
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000

# Payment Gateway (if applicable)
NEXT_PUBLIC_STRIPE_KEY=your_stripe_key
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create your feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Code Standards

- Use TypeScript for all new files
- Follow ESLint rules
- Write meaningful commit messages
- Add tests for new features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, questions, or suggestions:
- Create an [Issue](https://github.com/rahmatez/indonesian-tour-travel/issues)
- Reach out via [Discussions](https://github.com/rahmatez/indonesian-tour-travel/discussions)

---

**Made with ❤️ for Indonesian tourism**
