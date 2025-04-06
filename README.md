# Personal Portfolio Website

## 📋 Project Overview

This is a personal portfolio website designed to showcase your professional work, skills, and achievements. It serves as your digital presence on the internet, allowing potential employers, clients, or collaborators to learn about you and your work. The website features a modern, responsive design that works well on all devices and includes sections for your projects, blog posts, and contact information.

## 🎯 Why This Project?

In today's digital world, having a personal portfolio website is essential for:
- Showcasing your professional work and skills
- Building your personal brand
- Making it easy for others to find and contact you
- Demonstrating your technical abilities
- Sharing your thoughts and expertise through blog posts

## 🗂️ What's Included

The website contains several key sections:
- **Home**: A welcoming introduction to your work
- **About**: Your professional background and skills
- **Projects**: A showcase of your work with descriptions and links
- **Blog**: Your articles and thoughts on various topics
- **Contact**: Ways for visitors to get in touch with you

## 🚀 Technologies Used

This website is built using:

- **React**: A popular JavaScript library for building user interfaces
- **TypeScript**: A typed superset of JavaScript that adds static types
- **Vite**: A modern build tool that provides a faster and leaner development experience
- **Material-UI**: A popular React UI framework that provides pre-built components
- **Framer Motion**: A library for creating smooth animations
- **React Router**: For handling navigation between different pages
- **Giscus**: For blog post comments (needs to be set up)

## 📁 Project Structure

```
ryujeongmin.github.io/
├── src/                    # Source code directory
│   ├── components/         # Reusable UI components
│   ├── pages/             # Different pages of the website
│   ├── styles/            # Global styles and themes
│   └── utils/             # Utility functions
├── public/                # Static assets
├── assets/               # Other assets like images
└── package.json          # Project dependencies and scripts
```

## 🛠️ Development Setup

1. Make sure you have [Node.js](https://nodejs.org/) installed (version 16 or higher)
2. Clone this repository
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Build for production:
   ```bash
   npm run build
   ```

## 📝 Comment System (TODO)

The website currently uses Giscus for blog post comments. Since the repository is private, you'll need to:

1. Make the repository public on GitHub
2. Set up Giscus by:
   - Going to [Giscus](https://giscus.app/)
   - Connecting your GitHub account
   - Selecting this repository
   - Configuring the discussion category
   - Copying the generated script

This will allow visitors to leave comments on your blog posts using their GitHub accounts.

## 🎨 Design and Components

The website uses Material-UI components for a consistent and professional look. Key components include:

- **Navigation Bar**: For easy access to different sections
- **Hero Section**: A visually appealing introduction
- **About Section**: Information about you and your skills
- **Projects Section**: Showcase of your work
- **Blog Section**: Your articles and thoughts
- **Contact Section**: Ways to get in touch

### Where to Edit Content

1. **Personal Information**:
   - Edit `src/pages/About.tsx` for your bio and skills
   - Update `src/components/Contact.tsx` for contact details

2. **Projects**:
   - Add or modify projects in `src/pages/Projects.tsx`
   - Update project images in `assets/projects/`

3. **Blog Posts**:
   - Create new blog posts in `src/pages/blog/`
   - Add blog post images in `assets/blog/`

4. **Styling**:
   - Modify theme colors in `src/styles/theme.ts`
   - Update global styles in `src/styles/global.css`

5. **Navigation**:
   - Update menu items in `src/components/Navbar.tsx`
   - Modify routes in `src/App.tsx`

## 📋 TODO List

- [ ] **Set up Giscus comment system**
  - **Why needed**: To enable interactive discussions on blog posts
  - **What it is**: Giscus is a comments system powered by GitHub Discussions. It allows visitors to leave comments using their GitHub accounts, making it easy to moderate and maintain discussions.
  - **Implementation**: Requires making the repository public and configuring Giscus through their website.

- [ ] **Add more projects to the portfolio**
  - **Why needed**: To showcase your skills and experience
  - **What it is**: A collection of your work samples with descriptions, technologies used, and links to live demos or repositories.
  - **Implementation**: Add project details in `src/pages/Projects.tsx` and corresponding images in `assets/projects/`.

- [ ] **Create initial blog posts**
  - **Why needed**: To share knowledge and establish expertise
  - **What it is**: Articles about your experiences, tutorials, or thoughts on technology and development.
  - **Implementation**: Create markdown files in `src/pages/blog/` with proper metadata and content.

- [ ] **Implement dark mode toggle**
  - **Why needed**: To improve user experience and accessibility
  - **What it is**: A feature that allows users to switch between light and dark color schemes.
  - **Implementation**: Add theme context and toggle button in the navigation bar.

- [ ] **Add loading animations**
  - **Why needed**: To improve perceived performance and user experience
  - **What it is**: Smooth transitions and loading indicators when content is being fetched or pages are changing.
  - **Implementation**: Use Framer Motion for page transitions and loading states.

- [ ] **Set up automated testing**
  - **Why needed**: To ensure code quality and prevent regressions
  - **What it is**: Unit and integration tests for components and functionality.
  - **Implementation**: Add Jest and React Testing Library for component testing.

- [ ] **Add SEO optimization**
  - **Why needed**: To improve search engine visibility
  - **What it is**: Meta tags, structured data, and proper HTML semantics for better search engine indexing.
  - **Implementation**: Add meta tags and OpenGraph data to pages.

- [ ] **Implement contact form functionality**
  - **Why needed**: To allow visitors to send messages directly
  - **What it is**: A form that sends messages to your email or database.
  - **Implementation**: Add form validation and email service integration.

- [ ] **Add project filtering by category**
  - **Why needed**: To help visitors find relevant projects
  - **What it is**: A feature to filter projects by technology, type, or other categories.
  - **Implementation**: Add filter buttons and category tags to projects.

- [ ] **Create a sitemap**
  - **Why needed**: To help search engines index your site
  - **What it is**: An XML file listing all pages on your website.
  - **Implementation**: Generate sitemap.xml during build process.

## 🔍 Code Quality

The project uses:
- ESLint for code linting
- TypeScript for type safety
- Prettier for code formatting
- Automated testing (to be implemented)

## 🤝 Contributing

Since this is a personal portfolio, contributions are not expected. However, if you spot any issues or have suggestions, feel free to create an issue.

## 📄 License

This project is private and personal. All rights reserved.
