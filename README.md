# Aadarsh Nagrath - Portfolio

A minimal, modern portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features a clean black design with smooth animations and responsive layout.

## ✨ Features

- **Minimal Black Design** - Professional, coder-inspired aesthetic
- **Fully Responsive** - Mobile-first design that works on all devices
- **GitHub Integration** - Automatically fetches and displays your repositories
- **Blog Integration** - Shows latest articles from Dev.to
- **Contact Form** - Working email contact form with Nodemailer
- **Dark Mode Only** - Optimized for dark theme
- **Type Safe** - Built with TypeScript
- **Performance Optimized** - Fast load times with Next.js 14

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```bash
cp .env.example .env.local
```

4. Configure environment variables in `.env.local`:
```env
# Required for contact form
GMAIL_APP_ID=your_gmail_app_password

# Optional - for higher GitHub API rate limits
GITHUB_TOKEN=your_github_token
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Building for Production

```bash
npm run build
npm start
```

## 🔧 Configuration

### Email Setup

The contact form uses Gmail. To set it up:

1. Enable 2-factor authentication on your Google account
2. Generate an App Password: [Google Account Settings](https://myaccount.google.com/apppasswords)
3. Add the App Password to `.env.local` as `GMAIL_APP_ID`
4. Update the email address in `src/app/api/send-email/route.ts`

### Customization

Update the following files to personalize:

- `src/app/components/Hero.tsx` - Name, bio, and social links
- `src/app/components/About.tsx` - About section and tech stack
- `src/lib/github.ts` - GitHub username
- `src/app/components/Writing.tsx` - Dev.to username
- `src/app/layout.tsx` - Site metadata

## 📁 Project Structure

```
src/
├── app/
│   ├── components/      # React components
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Writing.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── api/
│   │   └── send-email/  # Email API route
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   └── ui/              # Reusable UI components
└── lib/
    ├── github.ts        # GitHub API integration
    └── utils.ts         # Utility functions
```

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **Animations:** Framer Motion
- **Email:** Nodemailer
- **Font:** Inter & JetBrains Mono

## 👨‍💻 About Me

Hi, I'm **Aadarsh Nagrath**, a passionate **Software Engineer** with expertise in full-stack development, DevOps practices, and cloud computing. I'm currently pursuing my Bachelor's degree in **Computer Science Engineering with Cloud Computing** at **Chandigarh University** and actively contributing to various open-source projects.

### Contact
- **Email**: anagrath1@gmail.com
- **LinkedIn**: [linkedin.com/in/aadarsh-nagrath](https://linkedin.com/in/aadarsh-nagrath)
- **GitHub**: [github.com/aadarsh-nagrath](https://github.com/aadarsh-nagrath)
- **Portfolio**: [aadarsh-nagrath.vercel.app](https://aadarsh-nagrath.vercel.app)

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 🙏 Acknowledgments

Design inspired by [Conor Dewey's portfolio](https://www.conordewey.com/)

---

**DockerImage**: `aadarshnagrath/portfolio:latest`