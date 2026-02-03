# Quick Start Guide

Get your new portfolio up and running in 5 minutes!

## 1. Install Dependencies

```bash
npm install
```

## 2. Configure Environment Variables

```bash
# Create your local env file
cp .env.example .env.local
```

Edit `.env.local` and add:
```env
# Required for contact form
GMAIL_APP_ID=your_gmail_app_password

# Optional - increases GitHub API rate limits
GITHUB_TOKEN=your_github_personal_access_token
```

### Getting Gmail App Password:
1. Go to [Google Account Settings](https://myaccount.google.com/apppasswords)
2. Enable 2-factor authentication if not already enabled
3. Create an "App Password" for "Mail"
4. Copy the 16-character password
5. Paste it as `GMAIL_APP_ID` in `.env.local`

### Update Email Address:
Edit `src/app/api/send-email/route.ts` and replace `anagrath1@gmail.com` with your email.

## 3. Customize Your Content

### Profile & Bio
Edit `src/app/components/Hero.tsx`:
- Update bio text
- Change social media links (GitHub, LinkedIn, Dev.to)

### About Section
Edit `src/app/components/About.tsx`:
- Write your story
- Update tech stack array

### GitHub Username
Edit `src/lib/github.ts`:
- Change `aadarsh-nagrath` to your GitHub username

### Dev.to Username
Edit `src/app/components/Writing.tsx`:
- Change `aadarsh-nagrath` to your Dev.to username

### Site Metadata
Edit `src/app/layout.tsx`:
- Update title, description, keywords

## 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio!

## 5. Build for Production

```bash
npm run build
npm start
```

## 6. Deploy to Vercel

```bash
# Make sure you're on the right branch
git checkout v3  # or your main branch

# Add and commit changes
git add .
git commit -m "New minimal portfolio design"
git push

# Deploy
# Visit vercel.com and connect your repository
# Or use Vercel CLI: vercel --prod
```

### Add Environment Variables in Vercel:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add `GMAIL_APP_ID` with your app password
4. Add `GITHUB_TOKEN` (optional)

## Troubleshooting

### Contact form not working?
- Check `GMAIL_APP_ID` is set correctly
- Verify 2FA is enabled on Google account
- Check email address in `route.ts` is correct

### GitHub projects not loading?
- Check GitHub username in `src/lib/github.ts`
- Add `GITHUB_TOKEN` for higher rate limits
- Verify your repos are public

### Blog posts not showing?
- Check Dev.to username in `src/app/components/Writing.tsx`
- Ensure you have published articles on Dev.to

## Need Help?

Check out:
- [README.md](./README.md) - Full documentation
- [CHANGELOG.md](./CHANGELOG.md) - What changed in this version
- [Next.js Docs](https://nextjs.org/docs)

---

**Enjoy your new portfolio! 🚀**
