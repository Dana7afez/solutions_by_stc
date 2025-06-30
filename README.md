# Solutions by STC - FAQ Page

A modern, responsive FAQ page for Solutions by STC with category-based navigation and enhanced user experience.

## 🚀 Live Demo

Visit the live site: [https://dana7afez.github.io/solutions_by_stc/](https://dana7afez.github.io/solutions_by_stc/)

## 🛠️ Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Modern UI components
- **Lucide React** - Beautiful icons

## 📋 Features

- ✅ **Category-based FAQ navigation**
- ✅ **Responsive design for all devices**
- ✅ **Smooth animations and transitions**
- ✅ **Enhanced search functionality**
- ✅ **STC brand-compliant styling**
- ✅ **Collapsible FAQ items**
- ✅ **Professional illustrations**

## 🏃‍♂️ Running Locally

1. **Clone the repository:**
   \`\`\`bash
   git clone https://github.com/Dana7afez/solutions_by_stc.git
   cd solutions_by_stc
   \`\`\`

2. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

3. **Run the development server:**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions. Every push to the main branch triggers a new deployment.

### Manual Deployment Steps:

1. **Build the project:**
   \`\`\`bash
   npm run build
   \`\`\`

2. **Export static files:**
   \`\`\`bash
   npm run export
   \`\`\`

3. **Deploy to GitHub Pages:**
   The GitHub Action will handle this automatically.

## 📁 Project Structure

\`\`\`
solutions_by_stc/
├── app/
│   ├── faqs/
│   │   └── page.tsx          # Main FAQ page
│   ├── globals.css           # Global styles
│   └── layout.tsx            # Root layout
├── components/
│   ├── animated-header.tsx   # Navigation header
│   ├── category-selector.tsx # FAQ categories
│   ├── faq-list.tsx         # FAQ items list
│   └── ui/                  # Shadcn UI components
├── public/
│   ├── logo.svg             # STC logo
│   └── faq-illustration.png # FAQ illustration
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions workflow
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies and scripts
\`\`\`

## 🎨 Design System

The project follows the Solutions by STC design system:

- **Primary Color:** `#ff375e` (Pink/Red)
- **Secondary Color:** `#29c0ff` (Blue)
- **Info Color:** `#4f018c` (Purple)
- **Success Color:** `#00c48c` (Green)
- **Font Family:** STC, system fonts

## 📱 Responsive Design

- **Mobile First:** Optimized for mobile devices
- **Tablet Support:** Enhanced layout for tablets
- **Desktop:** Full-featured desktop experience
- **Touch Friendly:** Large touch targets for mobile

## 🔧 Configuration

### Environment Variables

No environment variables are required for this project.

### Next.js Configuration

The project uses static export configuration for GitHub Pages deployment:

\`\`\`javascript
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true }
}
\`\`\`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support and questions:
- **Email:** support@solutions.com.sa
- **Website:** [https://domains.solutions.com.sa](https://domains.solutions.com.sa)

---

Built with ❤️ for Solutions by STC
