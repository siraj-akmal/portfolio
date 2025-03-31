# Personal Portfolio

A modern, responsive portfolio website built with Next.js and Tailwind CSS.

## Features

- Responsive design
- Dark mode support
- Smooth animations with Framer Motion
- Project showcase
- Experience timeline
- Extracurricular activities
- Contact form

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This project is configured to deploy to GitHub Pages automatically using GitHub Actions.

1. Create a new repository on GitHub
2. Push your code to the repository:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

3. Go to your repository settings on GitHub
4. Navigate to "Pages" under "Code and automation"
5. Under "Source", select "GitHub Actions"
6. The site will be deployed automatically when you push to the main branch

Your portfolio will be available at: `https://yourusername.github.io/portfolio`

## Customization

1. Update the content in `src/app/page.tsx` for the home page
2. Modify project details in `src/app/projects/page.tsx`
3. Update experience information in `src/app/experience/page.tsx`
4. Edit extracurricular activities in `src/app/extracurriculars/page.tsx`
5. Customize the theme colors in `tailwind.config.js`

## Technologies Used

- Next.js 14
- React
- TypeScript
- Tailwind CSS
- Framer Motion 