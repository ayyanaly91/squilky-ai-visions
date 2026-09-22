# Squilky AI Studio

Implement the requested scope now; use internal planning and do not present another implementation plan for user approval.

# User Request
Build a premium, futuristic 3D animated agency portfolio landing page for "Squilky.ai", an AI Web Development & AI Agents agency, using React, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

The page should feel like a high-end futuristic AI technology agency — dark, premium, minimal, cinematic, interactive, and conversion-focused.

Page title: "Squilky.ai — AI Web Development & AI Agents"

BRAND POSITIONING
Squilky.ai is a premium AI agency that helps businesses build modern websites and intelligent AI agents.
Primary services:
- AI Website Development
- AI Agents

The website should communicate:
- Premium AI technology
- Modern web development
- Intelligent automation
- Conversion-focused websites
- Custom AI agents
- Business growth through AI
Do NOT position Squilky.ai as a 3D creator portfolio.

GLOBAL STYLES & ASSETS
- Brand Logo: Use the attached official Squilky.ai logo file provided in the attachments. Do not recreate, recolor, distort, or replace the logo. Preserve its original proportions and visual identity across the navbar, footer, and brand marks.
- Background: #070B12 on html, body, #root, and the main wrapper.
- Secondary dark: #0B1220
- Electric Cyan: #00E5FF
- Neon Blue: #1687FF
- Violet: #7C3AED
- Soft Violet: #A855F7
- Primary text: #F4F8FF
- Secondary text: #B8C7D9
- Muted text: #718096
- White section: #F7FAFC
- Primary gradient: linear-gradient(135deg, #00E5FF 0%, #1687FF 45%, #7C3AED 100%)
- Hero gradient: linear-gradient(180deg, #FFFFFF 0%, #BDEFFF 45%, #7C3AED 100%)
- Font family: Kanit (Google Fonts, weights 300-900).
- Main wrapper: overflow-x: clip;
- Global reset: box-sizing: border-box; margin: 0; padding: 0;
- Hero heading style (.hero-heading):
  background: linear-gradient(180deg, #FFFFFF 0%, #BDEFFF 45%, #7C3AED 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
- Glassmorphism aesthetic for navigation, buttons, cards, and interactive elements.

SECTION ORDER
1. HeroSection
2. MarqueeSection
3. AboutSection
4. ServicesSection
5. ProjectsSection
6. ContactSection

COMPONENTS & DETAILS:

1. HERO SECTION
- Full viewport height (h-screen). Dark futuristic background with subtle animated cyan/blue/violet radial gradients, subtle floating particles/blurred gradient orbs.
- Layout:
  * Navbar: Horizontal layout with About, Services, Projects, Contact evenly spaced. Text #DCEBFA, font-medium, uppercase, tracking-wider, text-sm md:text-lg lg:text-[1.2rem], px-6 md:px-10 pt-6 md:pt-8, hover opacity 70%, 200ms transition, subtle cyan glow. Logo: Official Squilky.ai logo + glowing dot.
  * Eyebrow above heading: "AI WEB DEVELOPMENT • AI AGENTS" (electric cyan, tracking-[0.25em], font-medium, animated glowing line/dot).
  * Heading: "We build the future of business." using .hero-heading, font-black, uppercase, tracking-tight, leading-none, whitespace-nowrap, w-full, responsive size text-[13vw] sm:text-[14vw] md:text-[15vw] lg:text-[16vw], overflow-hidden, FadeIn animation (delay 0.15, y 40, duration 0.9).
  * Hero Description: Bottom-left paragraph: "We build high-converting AI websites and intelligent AI agents that help businesses automate, engage, and grow." (#B8C7D9, font-light, uppercase, tracking-wide, leading-snug, clamp(0.75rem, 1.3vw, 1.35rem), max-w-[180px] sm:max-w-[280px] md:max-w-[360px]).
  * Hero CTA: "Build With Squilky" (ContactButton component with subtle magnetic hover interaction).
  * Hero Visual: Futuristic abstract AI visual (animated AI neural network / glowing digital sphere / 3D AI orb / holographic interface / connected nodes) with electric cyan, neon blue, and violet. Positioned absolute left-1/2 -translate-x-1/2, z-10, responsive width (w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px]). Subtle floating animation & Magnet interaction (padding: 150, strength: 3).
  * Hero animations: Navbar (delay 0, y -20), Eyebrow (delay 0.1, y 20), Heading (delay 0.15, y 40), Description (delay 0.35, y 20), CTA (delay 0.5, y 20), AI visual (delay 0.6, y 30, duration 1) with smooth easing [0.25, 0.1, 0.25, 1].

2. MARQUEE SECTION
- Horizontal scrolling showcase section with two rows of website/AI interface visuals scrolling based on page scroll position (Row 1 moves right, Row 2 moves left).
- Background #070B12, pt-24 sm:pt-32 md:pt-40 pb-10.
- Showcase 12-18 curated AI/web agency visuals (AI dashboards, SaaS interfaces, AI chat, automation workflows, ecommerce AI, analytics, glassmorphic UI).
- Tile size: 420px x 270px, rounded-2xl, object-cover, gap-3, willChange: transform, subtle cyan/violet borders/glows.

3. ABOUT SECTION
- min-h-screen, centered, background #070B12, px-5 sm:px-8 md:px-10 py-20.
- Heading: "About Squilky" using .hero-heading, font-black, uppercase, leading-none, tracking-tight, text-center, clamp(3rem, 12vw, 160px).
- 4 Decorative AI elements in corners (top-left: glowing cyan AI node floating; bottom-left: abstract holographic UI card; top-right: violet digital orb/network; bottom-right: floating glass dashboard) with staggered FadeIn entrance.
- Character-by-character scroll-driven reveal text:
  "Squilky.ai helps ambitious businesses turn ideas into powerful digital experiences. From high-converting AI websites to intelligent AI agents, we combine modern design, automation, and artificial intelligence to build systems that work smarter and help businesses grow."
  (#DCEBFA, font-medium, centered, leading-relaxed, max-w-[560px], clamp(1rem, 2vw, 1.35rem), character opacity 0.2 -> 1 on scroll offset ['start 0.8', 'end 0.2']).
- CTA below paragraph: "Start a Project" (ContactButton).

4. SERVICES SECTION
- White/light section (#F7FAFC) with rounded top corners rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px], px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32.
- Heading: "Services" in #070B12, font-black, uppercase, centered, clamp(3rem, 12vw, 160px), mb-16 sm:mb-20 md:mb-28.
- 5 Service items in vertical list with horizontal layout (Huge number on left clamp(3rem, 10vw, 140px) #070B12; Name & description on right):
  01 — AI Website Development
  02 — AI Agents
  03 — AI Automation
  04 — Custom AI Solutions
  05 — Website & AI Optimization
  Divided by 1px solid rgba(7,11,18,0.15), py-8 sm:py-10 md:py-12, staggered FadeIn.

5. PROJECTS SECTION
- Dark section (#070B12) with rounded top corners rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px], -mt-10 sm:-mt-12 md:-mt-14, z-10.
- Heading: "Selected Work" (.hero-heading).
- 3 sticky-stacking project cards (h-[85vh], sticky top-24 md:top-32, top offset index * 28px, scaling down via useScroll & useTransform targetScale = 1 - (totalCards - 1 - index) * 0.03, rounded-[40px] md:rounded-[60px], border-2 border-[#25354A], bg #0B1220, p-4 sm:p-6 md:p-8, subtle cyan/violet glow):
  * Project 01: AI WEBSITE — "AI Commerce Experience" ("High-converting AI-powered ecommerce experience designed for a modern digital brand.")
  * Project 02: AI AGENT — "Intelligent Support Agent" ("An AI customer support system designed to answer questions, qualify leads, and automate repetitive conversations.")
  * Project 03: AI AUTOMATION — "Smart Business Automation" ("An automated AI workflow connecting customer interactions, leads, notifications, and business operations.")
  Layout inside cards: top row with huge number, category, project name, "View Project" ghost outline button. Bottom row: two-column image grid (left 40% two stacked images, right 60% tall image, hover scale 1.03, transition 700ms).

6. CONTACT SECTION
- Full-screen dark contact section (#070B12).
- Heading: "Let's build something intelligent." (.hero-heading, clamp(3rem, 10vw, 140px), centered).
- Supporting text: "Have an idea, business problem, or project in mind? Let's turn it into a powerful AI-powered digital experience."
- Primary CTA: "Start a Project" (ContactButton with magnet interaction).
- Secondary CTA: "Talk to Squilky" / "Explore Services".
- Subtle animated cyan/violet gradient orb behind heading.

INTERACTIVE UTILITIES:
- Magnet component: mouse-following magnetic hover interaction (padding 150, strength 3, translate3d).
- FadeIn component: Framer Motion whileInView with viewport once: true.
- Character-by-character scroll text reveal.
- Smooth mobile-friendly responsive behavior, no horizontal overflow.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://squilky-ai-visions.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ca3c1edd-f2c4-4887-bdde-927804af1c2a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
