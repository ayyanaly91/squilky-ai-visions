import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, ArrowRight, Bot, Braces, ChartNoAxesCombined, CircuitBoard, Sparkles, Workflow } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef, type MouseEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/squilky-logo.png.asset.json";
import aiOrb from "@/assets/ai-neural-orb.png";
import commerce from "@/assets/dashboard-commerce.jpg";
import agent from "@/assets/dashboard-agent.jpg";
import automation from "@/assets/dashboard-automation.jpg";
import analytics from "@/assets/dashboard-analytics.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Squilky.ai — AI Web Development & AI Agents" },
    { name: "description", content: "Premium AI websites and intelligent AI agents that automate, engage, and grow your business." },
    { property: "og:title", content: "Squilky.ai — AI Web Development & AI Agents" },
    { property: "og:description", content: "Premium AI websites and intelligent AI agents that automate, engage, and grow your business." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

const ease = [0.25, 0.1, 0.25, 1] as const;
const showcase = [commerce, agent, automation, analytics, agent, commerce, analytics, automation];

function FadeIn({ children, delay = 0, y = 24, className = "" }: { children: ReactNode; delay?: number; y?: number; className?: string }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-8%" }} transition={{ duration: .8, delay, ease }}>{children}</motion.div>;
}

function Magnet({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  const move = (event: MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.transform = `translate3d(${(event.clientX - rect.left - rect.width / 2) / 3}px, ${(event.clientY - rect.top - rect.height / 2) / 3}px, 0)`;
  };
  return <div className={`transition-transform duration-200 ${className}`} onMouseMove={move} onMouseLeave={(e) => { e.currentTarget.style.transform = "translate3d(0,0,0)"; }}>{children}</div>;
}

function ContactButton({ children = "Start a Project" }: { children?: ReactNode }) {
  return <Magnet><Button asChild className="group h-14 rounded-full border border-primary/30 bg-primary px-7 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-[0_0_35px_rgba(0,229,255,.22)] hover:bg-primary/85"><a href="#contact">{children}<ArrowDownRight className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" /></a></Button></Magnet>;
}

function Logo({ compact = false }: { compact?: boolean }) {
  return <a href="#top" aria-label="Squilky.ai home" className="relative block overflow-hidden"><img src={logoAsset.url} alt="Squilky.ai" width={768} height={768} className={`${compact ? "h-20 w-20" : "h-16 w-16 md:h-20 md:w-20"} object-contain`} /><span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_#00e5ff]" /></a>;
}

function HeroSection() {
  return <section id="top" className="relative flex h-screen min-h-[720px] flex-col overflow-hidden bg-background px-5 md:px-10">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(22,135,255,.15),transparent_32%),radial-gradient(circle_at_72%_35%,rgba(124,58,237,.12),transparent_24%)]" />
    <div className="animate-grid pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,229,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
    <motion.nav initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, ease }} className="relative z-30 flex items-center justify-between pt-5 md:pt-7">
      <Logo />
      <div className="hidden items-center gap-10 rounded-full border border-foreground/10 bg-secondary/60 px-7 py-4 backdrop-blur-xl sm:flex">
        {['About','Services','Projects','Contact'].map(x => <a key={x} href={`#${x.toLowerCase()}`} className="text-sm font-medium uppercase text-[#dcebfa] transition-opacity hover:opacity-70 lg:text-base">{x}</a>)}
      </div>
      <a href="#contact" className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary backdrop-blur-lg" aria-label="Contact Squilky"><ArrowDownRight /></a>
    </motion.nav>
    <div className="relative z-20 mt-[8vh] text-center md:mt-[5vh]">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1, duration: .7, ease }} className="mb-4 flex items-center justify-center gap-3 text-xs font-medium tracking-[.25em] text-primary md:text-sm"><span className="h-px w-10 bg-primary shadow-[0_0_8px_#00e5ff]" />AI WEB DEVELOPMENT • AI AGENTS<span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_#00e5ff]" /></motion.div>
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15, duration: .9, ease }} className="hero-heading text-[12vw] font-black uppercase leading-[.78] tracking-tight sm:text-[11vw] lg:text-[10vw]">We build the<br/>future of business.</motion.h1>
    </div>
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .6, duration: 1, ease }} className="animate-orb pointer-events-none absolute left-1/2 top-[43%] z-10 w-[310px] -translate-x-1/2 sm:w-[400px] md:top-[38%] md:w-[500px] lg:w-[590px]"><img src={aiOrb} alt="Glowing AI neural network sphere" width={1024} height={1024} className="h-auto w-full drop-shadow-[0_0_60px_rgba(0,229,255,.2)]" /></motion.div>
    <div className="relative z-20 mt-auto flex items-end justify-between pb-8 md:pb-10">
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .35, duration: .7, ease }} className="max-w-[190px] text-[.72rem] font-light uppercase leading-snug tracking-wide text-[#b8c7d9] sm:max-w-[280px] md:max-w-[360px] md:text-base">We build high-converting AI websites and intelligent AI agents that help businesses automate, engage, and grow.</motion.p>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .5, duration: .7, ease }}><ContactButton>Build With Squilky</ContactButton></motion.div>
    </div>
  </section>;
}

function MarqueeSection() {
  const row = (items: string[], direction: 'left'|'right') => <div className="overflow-hidden"><div className={`flex w-max gap-3 ${direction === 'left' ? 'marquee-left' : 'marquee-right'}`}>{[...items,...items].map((src,i) => <div key={`${src}-${i}`} className="h-[180px] w-[280px] shrink-0 overflow-hidden rounded-2xl border border-primary/15 bg-secondary shadow-[0_0_30px_rgba(0,229,255,.06)] sm:h-[230px] sm:w-[360px] lg:h-[270px] lg:w-[420px]"><img src={src} alt="AI interface showcase" loading="lazy" width={1280} height={800} className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]" /></div>)}</div></div>;
  return <section aria-label="AI interface showcase" className="space-y-3 bg-background pb-10 pt-24 sm:pt-32 md:pt-40">{row(showcase,'right')}{row([...showcase].reverse(),'left')}</section>;
}

function RevealText() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start .8','end .2'] });
  const text = "Squilky.ai helps ambitious businesses turn ideas into powerful digital experiences. From high-converting AI websites to intelligent AI agents, we combine modern design, automation, and artificial intelligence to build systems that work smarter and help businesses grow.";
  return <p ref={ref} className="mx-auto max-w-[650px] text-center text-base font-medium leading-relaxed text-[#dcebfa] sm:text-xl">{text.split('').map((char,i) => <RevealChar key={i} progress={scrollYProgress} range={[i/text.length,(i+18)/text.length]}>{char}</RevealChar>)}</p>;
}
function RevealChar({ children, progress, range }: { children: string; progress: ReturnType<typeof useScroll>['scrollYProgress']; range: [number,number] }) { const opacity = useTransform(progress, range, [.2,1]); return <motion.span style={{ opacity }}>{children}</motion.span>; }

function AboutSection() { return <section id="about" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-5 py-24">
  <FadeIn className="absolute left-[5%] top-[16%] text-primary/50"><CircuitBoard className="h-16 w-16 animate-pulse" strokeWidth={1} /></FadeIn><FadeIn delay={.15} className="absolute right-[7%] top-[18%] text-accent/60"><Bot className="h-20 w-20" strokeWidth={1} /></FadeIn><FadeIn delay={.25} className="absolute bottom-[14%] left-[8%] text-accent/40"><Workflow className="h-20 w-20" strokeWidth={1} /></FadeIn><FadeIn delay={.35} className="absolute bottom-[12%] right-[8%] text-primary/40"><ChartNoAxesCombined className="h-20 w-20" strokeWidth={1} /></FadeIn>
  <FadeIn><h2 className="hero-heading mb-14 text-center text-[clamp(3rem,12vw,10rem)] font-black uppercase leading-none tracking-tight">About Squilky</h2></FadeIn><RevealText/><div className="mt-12"><ContactButton /></div>
  </section>; }

const services = [
  ['01','AI Website Development','Conversion-focused websites designed with intelligence at their core.'],['02','AI Agents','Custom agents that support customers, qualify leads, and work around the clock.'],['03','AI Automation','Connected workflows that remove repetitive work and accelerate operations.'],['04','Custom AI Solutions','Purpose-built intelligence shaped around your business, data, and goals.'],['05','Website & AI Optimization','Continuous improvement for faster experiences and stronger conversion.']
];
function ServicesSection() { return <section id="services" className="relative rounded-t-[40px] bg-[#f7fafc] px-5 py-20 text-[#070b12] sm:px-8 md:rounded-t-[60px] md:px-10 md:py-32"><FadeIn><h2 className="mb-16 text-center text-[clamp(3rem,12vw,10rem)] font-black uppercase leading-none tracking-tight">Services</h2></FadeIn><div className="mx-auto max-w-7xl border-t border-[#070b12]/15">{services.map(([num,name,desc],i)=><FadeIn key={name} delay={i*.05}><article className="grid gap-4 border-b border-[#070b12]/15 py-8 sm:grid-cols-[.7fr_1.6fr] sm:items-center md:py-12"><span className="text-[clamp(3rem,9vw,8.75rem)] font-black leading-none">{num}</span><div><h3 className="text-2xl font-bold uppercase sm:text-4xl">{name}</h3><p className="mt-3 max-w-xl text-base font-light text-[#475569] sm:text-lg">{desc}</p></div></article></FadeIn>)}</div></section>; }

type Project = { num: string; tag: string; name: string; desc: string; imgs: [string, string, string] };
const projects: Project[] = [
  {num:'01',tag:'AI WEBSITE',name:'AI Commerce Experience',desc:'High-converting AI-powered ecommerce experience designed for a modern digital brand.',imgs:[commerce,analytics,commerce]},
  {num:'02',tag:'AI AGENT',name:'Intelligent Support Agent',desc:'An AI customer support system designed to answer questions, qualify leads, and automate repetitive conversations.',imgs:[agent,analytics,agent]},
  {num:'03',tag:'AI AUTOMATION',name:'Smart Business Automation',desc:'An automated AI workflow connecting customer interactions, leads, notifications, and business operations.',imgs:[automation,agent,automation]},
];
function ProjectCard({ project, index }: { project: Project; index: number }) { const ref=useRef<HTMLElement>(null); const {scrollYProgress}=useScroll({target:ref,offset:['start end','start start']}); const scale=useTransform(scrollYProgress,[0,1],[1,1-(projects.length-1-index)*.03]); return <motion.article ref={ref} style={{scale,top:`${96+index*28}px`}} className="sticky mb-20 h-[78vh] min-h-[610px] overflow-hidden rounded-[32px] border-2 border-[#25354a] bg-secondary p-5 shadow-[0_0_50px_rgba(0,229,255,.06)] md:h-[85vh] md:rounded-[50px] md:p-8"><div className="mb-6 grid grid-cols-[auto_1fr] gap-4 md:grid-cols-[auto_1fr_auto] md:items-center"><span className="text-6xl font-black text-primary md:text-8xl">{project.num}</span><div><p className="text-xs tracking-[.2em] text-primary">{project.tag}</p><h3 className="text-2xl font-bold uppercase md:text-4xl">{project.name}</h3><p className="mt-2 max-w-xl text-sm text-[#b8c7d9] md:text-base">{project.desc}</p></div><Button variant="outline" className="hidden rounded-full border-foreground/20 bg-transparent text-foreground hover:bg-foreground/10 hover:text-foreground md:inline-flex">View Project <ArrowRight/></Button></div><div className="grid h-[calc(100%-160px)] grid-cols-[.4fr_.6fr] gap-3"><div className="grid gap-3 overflow-hidden"><ProjectImage src={project.imgs[0]}/><ProjectImage src={project.imgs[1]}/></div><ProjectImage src={project.imgs[2]}/></div></motion.article>; }
function ProjectImage({src}:{src:string}) { return <div className="min-h-0 overflow-hidden rounded-2xl border border-foreground/10"><img src={src} alt="AI project interface" loading="lazy" width={1280} height={800} className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"/></div>; }
function ProjectsSection() { return <section id="projects" className="relative z-10 -mt-10 rounded-t-[40px] bg-background px-5 py-24 sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32"><FadeIn><h2 className="hero-heading mb-16 text-center text-[clamp(3rem,11vw,9rem)] font-black uppercase leading-none tracking-tight">Selected Work</h2></FadeIn><div className="mx-auto max-w-7xl">{projects.map((p,i)=><ProjectCard key={p.name} project={p} index={i}/>)}</div></section>; }

function ContactSection() { return <section id="contact" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-5 py-24 text-center"><div className="pointer-events-none absolute h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(0,229,255,.16),rgba(124,58,237,.1)_38%,transparent_70%)] blur-2xl"/><FadeIn className="relative z-10 max-w-6xl"><Sparkles className="mx-auto mb-7 h-9 w-9 text-primary"/><h2 className="hero-heading text-[clamp(3rem,10vw,8.75rem)] font-black uppercase leading-[.9] tracking-tight">Let's build something intelligent.</h2><p className="mx-auto mt-8 max-w-2xl text-lg font-light text-[#b8c7d9]">Have an idea, business problem, or project in mind? Let's turn it into a powerful AI-powered digital experience.</p><div className="mt-10 flex flex-wrap items-center justify-center gap-4"><ContactButton/><Button asChild variant="outline" className="h-14 rounded-full border-foreground/20 bg-transparent px-7 text-foreground hover:bg-foreground/10 hover:text-foreground"><a href="#services">Explore Services <ArrowRight/></a></Button></div></FadeIn></section>; }

function Index() {
  return <main className="overflow-x-clip bg-background"><HeroSection/><MarqueeSection/><AboutSection/><ServicesSection/><ProjectsSection/><ContactSection/><footer className="flex items-center justify-between border-t border-foreground/10 bg-background px-5 py-6 md:px-10"><Logo compact/><p className="text-xs uppercase tracking-widest text-muted-foreground">© 2026 Squilky.ai</p><Braces className="text-primary"/></footer></main>;
}
