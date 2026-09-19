import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, ArrowRight, ArrowUp, Bot, ChartNoAxesCombined, CircuitBoard, Github, Instagram, Linkedin, Mail, Send, Sparkles, Twitter, Workflow } from "lucide-react";
import { animate, motion, useInView, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import logoTransparent from "@/assets/squilky-logo-transparent.png";
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


function CursorSpotlight() {
  const reduce = useReducedMotion();
  const x = useMotionValue(-600), y = useMotionValue(-600);
  const sx = useSpring(x, { stiffness: 90, damping: 26, mass: .6 });
  const sy = useSpring(y, { stiffness: 90, damping: 26, mass: .6 });
  useEffect(() => {
    if (reduce) return;
    const onMove = (e: globalThis.MouseEvent) => { x.set(e.clientX - 320); y.set(e.clientY - 320); };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduce, x, y]);
  if (reduce) return null;
  return <motion.div aria-hidden style={{ x: sx, y: sy }} className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[640px] w-[640px] rounded-full bg-[radial-gradient(circle,rgba(0,229,255,.09),rgba(124,58,237,.07)_42%,transparent_70%)] blur-2xl will-change-transform md:block" />;
}

function Tilt({ children, className = "", max = 7 }: { children: ReactNode; className?: string; max?: number }) {
  const reduce = useReducedMotion();
  const rx = useSpring(useMotionValue(0), { stiffness: 140, damping: 18 });
  const ry = useSpring(useMotionValue(0), { stiffness: 140, damping: 18 });
  const move = (e: MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    ry.set(((e.clientX - r.left) / r.width - .5) * max * 2);
    rx.set(-((e.clientY - r.top) / r.height - .5) * max * 2);
  };
  return <motion.div onMouseMove={move} onMouseLeave={() => { rx.set(0); ry.set(0); }} style={{ rotateX: rx, rotateY: ry, transformPerspective: 1100 }} className={`will-change-transform ${className}`}>{children}</motion.div>;
}

const orbSeeds = [[6,12,140,9],[18,68,90,14],[31,26,60,11],[44,82,120,17],[57,18,70,13],[69,58,110,15],[80,34,80,10],[92,74,130,16],[12,46,70,12],[38,90,95,18],[63,88,60,12],[88,10,100,14]];
function Particles() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, -260]), { stiffness: 40, damping: 20 });
  if (reduce) return null;
  return <motion.div aria-hidden style={{ y }} className="pointer-events-none absolute inset-0 z-0 overflow-hidden will-change-transform">
    {orbSeeds.map(([left, top, size, dur], i) => <span key={i} className="animate-drift absolute rounded-full blur-[1px] will-change-transform" style={{ left: `${left}%`, top: `${top}%`, width: size / 10, height: size / 10, animationDuration: `${dur}s`, animationDelay: `${i * .7}s`, background: i % 2 ? "#7c3aed" : "#00e5ff", boxShadow: `0 0 ${size / 6}px ${i % 2 ? "#7c3aed" : "#00e5ff"}` }} />)}
  </motion.div>;
}

function Beam({ children, className = "", radius = "rounded-full" }: { children: ReactNode; className?: string; radius?: string }) {
  return <div className={`group/beam relative isolate overflow-hidden ${radius} p-px ${className}`}>
    <span aria-hidden className="beam-ring pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[260%] w-[260%] -translate-x-1/2 -translate-y-1/2 opacity-40 transition-opacity duration-500 group-hover/beam:opacity-100" />
    <div className={`relative ${radius} bg-background`}>{children}</div>
  </div>;
}

const stats: [number, string, string][] = [[120, "+", "AI systems shipped"], [48, "%", "Average conversion lift"], [24, "/7", "Agents working for you"], [12, "x", "Faster support response"]];
function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, { duration: 1.6, ease, onUpdate: (v) => setValue(Math.round(v)) });
    return () => controls.stop();
  }, [inView, to]);
  return <span ref={ref} className="hero-heading text-[clamp(2.5rem,7vw,4.5rem)] font-black leading-none">{value}{suffix}</span>;
}
function StatsSection() {
  return <section aria-label="Squilky.ai results" className="relative overflow-hidden bg-background px-4 py-16 sm:px-8 sm:py-24 md:px-10">
    <Particles />
    <div className="relative z-10 mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map(([n, suffix, label], i) => <FadeIn key={label} delay={i * .08}>
        <Tilt className="h-full">
          <div className="h-full rounded-3xl border border-foreground/10 bg-secondary/40 p-7 backdrop-blur-xl transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_45px_rgba(0,229,255,.16)]">
            <Counter to={n} suffix={suffix} />
            <p className="mt-4 text-sm font-light uppercase tracking-widest text-[#b8c7d9]">{label}</p>
          </div>
        </Tilt>
      </FadeIn>)}
    </div>
  </section>;
}

function ContactButton({ children = "Start a Project" }: { children?: ReactNode }) {
  return <Beam><Magnet><Button asChild className="group relative h-14 rounded-full border border-primary/30 bg-primary px-7 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-[0_0_35px_rgba(0,229,255,.22)] hover:bg-primary/85"><a href="#contact"><span aria-hidden className="text-shimmer pointer-events-none absolute inset-0 rounded-full" />{children}<ArrowDownRight className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" /></a></Button></Magnet></Beam>;
}

function Logo({ compact = false, className = "" }: { compact?: boolean; className?: string }) {
  return <a href="#top" aria-label="Squilky.ai home" className={`group relative inline-block ${className}`}><span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-primary/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" /><img src={logoTransparent} alt="Squilky.ai" width={1254} height={1254} className={`${compact ? "h-16 w-16 md:h-20 md:w-20" : "h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20"} object-contain transition-transform duration-500 group-hover:scale-105`} /><span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_#00e5ff]" /></a>;
}


function HeroSection() {
  return <section id="top" className="relative flex h-[100svh] min-h-[640px] flex-col overflow-hidden bg-background px-4 sm:px-6 md:px-10">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(22,135,255,.15),transparent_32%),radial-gradient(circle_at_72%_35%,rgba(124,58,237,.12),transparent_24%)]" />
    <div className="animate-grid pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,229,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
    <Particles />
    <motion.nav initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, ease }} className="relative z-30 flex items-center justify-between pt-5 md:pt-7">
      <Logo />
      <div className="hidden items-center gap-10 rounded-full border border-foreground/10 bg-secondary/60 px-7 py-4 backdrop-blur-xl sm:flex">
        {['About','Services','Projects','Contact'].map(x => <a key={x} href={`#${x.toLowerCase()}`} className="group relative text-sm font-medium uppercase tracking-wider text-[#dcebfa] transition-all duration-200 hover:text-primary hover:[text-shadow:0_0_14px_rgba(0,229,255,.55)] lg:text-base">{x}<span className="absolute -bottom-1 left-0 h-px w-0 bg-primary shadow-[0_0_8px_#00e5ff] transition-all duration-300 group-hover:w-full" /></a>)}
      </div>
      <a href="#contact" className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary backdrop-blur-lg" aria-label="Contact Squilky"><ArrowDownRight /></a>
    </motion.nav>
    <div className="relative z-20 mt-[8vh] text-center md:mt-[5vh]">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1, duration: .7, ease }} className="relative mb-4 flex items-center justify-center gap-3 text-xs font-medium tracking-[.25em] text-primary md:text-sm"><span className="h-px w-10 bg-primary shadow-[0_0_8px_#00e5ff]" />AI WEB DEVELOPMENT • AI AGENTS<span aria-hidden className="text-shimmer pointer-events-none absolute inset-0" /><span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_#00e5ff]" /></motion.div>
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15, duration: .9, ease }} className="hero-heading text-[12vw] font-black uppercase leading-[.78] tracking-tight sm:text-[11vw] lg:text-[10vw]">We build the<br/>future of business.</motion.h1>
    </div>
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .6, duration: 1, ease }} className="animate-orb will-change-transform absolute left-1/2 top-[43%] z-10 w-[310px] -translate-x-1/2 sm:w-[400px] md:top-[38%] md:w-[500px] lg:w-[590px]"><Tilt max={10}><img src={aiOrb} alt="Glowing AI neural network sphere" width={1024} height={1024} className="h-auto w-full drop-shadow-[0_0_60px_rgba(0,229,255,.2)]" /></Tilt></motion.div>
    <div className="relative z-20 mt-auto flex items-end justify-between pb-8 md:pb-10">
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .35, duration: .7, ease }} className="max-w-[190px] text-[.72rem] font-light uppercase leading-snug tracking-wide text-[#b8c7d9] sm:max-w-[280px] md:max-w-[360px] md:text-base">We build high-converting AI websites and intelligent AI agents that help businesses automate, engage, and grow.</motion.p>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .5, duration: .7, ease }}><ContactButton>Build With Squilky</ContactButton></motion.div>
    </div>
  </section>;
}

function MarqueeSection() {
  const row = (items: string[], direction: 'left'|'right') => <div className="overflow-hidden"><div className={`flex w-max gap-2.5 will-change-transform [transform:translateZ(0)] sm:gap-3 ${direction === 'left' ? 'marquee-left' : 'marquee-right'}`}>{[...items,...items].map((src,i) => <div key={`${src}-${i}`} className="h-[140px] w-[230px] shrink-0 overflow-hidden rounded-2xl border border-primary/15 bg-secondary shadow-[0_0_30px_rgba(0,229,255,.06)] sm:h-[230px] sm:w-[360px] lg:h-[270px] lg:w-[420px]"><img src={src} alt="AI interface showcase" loading="lazy" width={1280} height={800} className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]" /></div>)}</div></div>;
  return <section aria-label="AI interface showcase" className="space-y-3 bg-background pb-10 pt-24 sm:pt-32 md:pt-40">{row(showcase,'right')}{row([...showcase].reverse(),'left')}</section>;
}

function RevealText() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start .8','end .2'] });
  const text = "Squilky.ai helps ambitious businesses turn ideas into powerful digital experiences. From high-converting AI websites to intelligent AI agents, we combine modern design, automation, and artificial intelligence to build systems that work smarter and help businesses grow.";
  return <p ref={ref} className="mx-auto max-w-[650px] text-center text-base font-medium leading-relaxed text-[#dcebfa] sm:text-xl">{text.split('').map((char,i) => <RevealChar key={i} progress={scrollYProgress} range={[i/text.length,(i+18)/text.length]}>{char}</RevealChar>)}</p>;
}
function RevealChar({ children, progress, range }: { children: string; progress: ReturnType<typeof useScroll>['scrollYProgress']; range: [number,number] }) { const opacity = useTransform(progress, range, [.2,1]); return <motion.span style={{ opacity }}>{children}</motion.span>; }

function AboutSection() { return <section id="about" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-4 py-20 sm:px-6 sm:py-24">
  <FadeIn className="absolute left-[5%] top-[16%] text-primary/50"><CircuitBoard className="h-16 w-16 animate-pulse" strokeWidth={1} /></FadeIn><FadeIn delay={.15} className="absolute right-[7%] top-[18%] text-accent/60"><Bot className="h-20 w-20" strokeWidth={1} /></FadeIn><FadeIn delay={.25} className="absolute bottom-[14%] left-[8%] text-accent/40"><Workflow className="h-20 w-20" strokeWidth={1} /></FadeIn><FadeIn delay={.35} className="absolute bottom-[12%] right-[8%] text-primary/40"><ChartNoAxesCombined className="h-20 w-20" strokeWidth={1} /></FadeIn>
  <FadeIn><h2 className="hero-heading mb-14 text-center text-[clamp(3rem,12vw,10rem)] font-black uppercase leading-none tracking-tight">About Squilky</h2></FadeIn><RevealText/><div className="mt-12"><ContactButton /></div>
  </section>; }

const services = [
  ['01','AI Website Development','Conversion-focused websites designed with intelligence at their core.'],['02','AI Agents','Custom agents that support customers, qualify leads, and work around the clock.'],['03','AI Automation','Connected workflows that remove repetitive work and accelerate operations.'],['04','Custom AI Solutions','Purpose-built intelligence shaped around your business, data, and goals.'],['05','Website & AI Optimization','Continuous improvement for faster experiences and stronger conversion.']
];
function ServicesSection() { return <section id="services" className="relative rounded-t-[40px] bg-[#f7fafc] px-4 py-16 sm:py-20 text-[#070b12] sm:px-8 md:rounded-t-[60px] md:px-10 md:py-32"><FadeIn><h2 className="mb-16 text-center text-[clamp(3rem,12vw,10rem)] font-black uppercase leading-none tracking-tight">Services</h2></FadeIn><div className="mx-auto max-w-7xl border-t border-[#070b12]/15">{services.map(([num,name,desc],i)=><FadeIn key={name} delay={i*.05}><Tilt max={2.5}><article className="group grid gap-4 border-b border-[#070b12]/15 py-8 transition-all duration-500 hover:bg-[#070b12]/[.035] hover:px-4 sm:grid-cols-[.7fr_1.6fr] sm:items-center md:py-12"><span className="bg-[linear-gradient(135deg,#00e5ff,#1687ff_45%,#7c3aed)] bg-clip-text text-[clamp(3rem,9vw,8.75rem)] font-black leading-none text-transparent opacity-25 transition-opacity duration-500 group-hover:opacity-100">{num}</span><div className="flex items-center justify-between gap-6"><div><h3 className="text-2xl font-bold uppercase transition-transform duration-500 group-hover:translate-x-2 sm:text-4xl">{name}</h3><p className="mt-3 max-w-xl text-base font-light text-[#475569] sm:text-lg">{desc}</p></div><ArrowRight className="hidden h-8 w-8 shrink-0 -translate-x-3 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 sm:block" /></div></article></Tilt></FadeIn>)}</div></section>; }

type Project = { num: string; tag: string; name: string; desc: string; imgs: [string, string, string] };
const projects: Project[] = [
  {num:'01',tag:'AI WEBSITE',name:'AI Commerce Experience',desc:'High-converting AI-powered ecommerce experience designed for a modern digital brand.',imgs:[commerce,analytics,commerce]},
  {num:'02',tag:'AI AGENT',name:'Intelligent Support Agent',desc:'An AI customer support system designed to answer questions, qualify leads, and automate repetitive conversations.',imgs:[agent,analytics,agent]},
  {num:'03',tag:'AI AUTOMATION',name:'Smart Business Automation',desc:'An automated AI workflow connecting customer interactions, leads, notifications, and business operations.',imgs:[automation,agent,automation]},
];
function ProjectCard({ project, index }: { project: Project; index: number }) { const ref=useRef<HTMLElement>(null); const {scrollYProgress}=useScroll({target:ref,offset:['start end','start start']}); const scale=useTransform(scrollYProgress,[0,1],[1,1-(projects.length-1-index)*.03]); return <motion.article ref={ref} style={{scale,top:`${96+index*28}px`}} className="sticky mb-10 h-[78svh] min-h-[540px] will-change-transform sm:mb-16 md:mb-20 overflow-hidden rounded-[32px] border-2 border-[#25354a] bg-secondary p-5 shadow-[0_0_50px_rgba(0,229,255,.06)] transition-[border-color,box-shadow] duration-500 hover:border-primary/40 hover:shadow-[0_0_80px_rgba(0,229,255,.16)] md:h-[85vh] md:rounded-[50px] md:p-8"><div className="mb-6 grid grid-cols-[auto_1fr] gap-4 md:grid-cols-[auto_1fr_auto] md:items-center"><span className="text-6xl font-black text-primary md:text-8xl">{project.num}</span><div><p className="text-xs tracking-[.2em] text-primary">{project.tag}</p><h3 className="text-2xl font-bold uppercase md:text-4xl">{project.name}</h3><p className="mt-2 max-w-xl text-sm text-[#b8c7d9] md:text-base">{project.desc}</p></div><Button variant="outline" className="hidden rounded-full border-foreground/20 bg-transparent text-foreground hover:bg-foreground/10 hover:text-foreground md:inline-flex">View Project <ArrowRight/></Button></div><Tilt max={4} className="h-[calc(100%-160px)]"><div className="grid h-full grid-cols-[.4fr_.6fr] gap-3"><div className="grid gap-3 overflow-hidden"><ProjectImage src={project.imgs[0]}/><ProjectImage src={project.imgs[1]}/></div><ProjectImage src={project.imgs[2]}/></div></Tilt></motion.article>; }
function ProjectImage({src}:{src:string}) { return <div className="min-h-0 overflow-hidden rounded-2xl border border-foreground/10"><img src={src} alt="AI project interface" loading="lazy" width={1280} height={800} className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"/></div>; }
function ProjectsSection() { return <section id="projects" className="relative z-10 -mt-10 rounded-t-[40px] bg-background px-4 py-20 sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32"><FadeIn><h2 className="hero-heading mb-16 text-center text-[clamp(3rem,11vw,9rem)] font-black uppercase leading-none tracking-tight">Selected Work</h2></FadeIn><div className="mx-auto max-w-7xl">{projects.map((p,i)=><ProjectCard key={p.name} project={p} index={i}/>)}</div></section>; }

function ContactSection() { return <section id="contact" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 py-20 text-center sm:px-6 sm:py-24"><div className="pointer-events-none absolute h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(0,229,255,.16),rgba(124,58,237,.1)_38%,transparent_70%)] blur-2xl"/><FadeIn className="relative z-10 max-w-6xl"><Sparkles className="mx-auto mb-7 h-9 w-9 text-primary"/><h2 className="hero-heading text-[clamp(3rem,10vw,8.75rem)] font-black uppercase leading-[.9] tracking-tight">Let's build something intelligent.</h2><p className="mx-auto mt-8 max-w-2xl text-lg font-light text-[#b8c7d9]">Have an idea, business problem, or project in mind? Let's turn it into a powerful AI-powered digital experience.</p><div className="mt-10 flex flex-wrap items-center justify-center gap-4"><ContactButton/><Button asChild variant="outline" className="h-14 rounded-full border-foreground/20 bg-transparent px-7 text-foreground hover:bg-foreground/10 hover:text-foreground"><a href="#services">Explore Services <ArrowRight/></a></Button></div></FadeIn></section>; }

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: .001 });
  return <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-50 h-[3px] origin-left bg-[linear-gradient(90deg,#00e5ff,#1687ff_45%,#7c3aed)] shadow-[0_0_14px_rgba(0,229,255,.5)]" />;
}

const footerNav: [string, string[]][] = [
  ['Services', ['AI Website Development','AI Agents','AI Automation','Custom AI Solutions','Website & AI Optimization']],
  ['Solutions', ['Ecommerce & Retail','SaaS & Startups','Professional Services','Lead Generation','Customer Support']],
  ['Company', ['About Squilky','Our Process','Selected Work','Careers','Contact']],
  ['Resources', ['AI Playbook','Case Studies','Insights','FAQ','Support']],
  ['Legal', ['Privacy Policy','Terms of Service','Cookie Policy','Security','Accessibility']],
];
const socials: [string, typeof Twitter][] = [['X / Twitter', Twitter], ['LinkedIn', Linkedin], ['Instagram', Instagram], ['GitHub', Github]];

function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  return <form onSubmit={(e) => { e.preventDefault(); if (email.trim()) setSent(true); }} className="relative mt-7 w-full max-w-md">
    <div className="gradient-border rounded-2xl p-px">
      <div className="flex items-center gap-2 rounded-2xl bg-[#0b1220] p-2 transition-shadow duration-300 focus-within:shadow-[0_0_35px_rgba(0,229,255,.25)]">
        <Mail className="ml-2 h-5 w-5 shrink-0 text-primary" />
        <input value={email} onChange={(e) => { setEmail(e.target.value); setSent(false); }} type="email" required placeholder="Your work email" aria-label="Your work email" className="min-w-0 flex-1 bg-transparent py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground" />
        <Button type="submit" className="h-11 shrink-0 rounded-xl bg-primary px-4 text-xs font-semibold uppercase tracking-wider text-primary-foreground hover:bg-primary/85">{sent ? 'Sent' : 'Book'} <Send className="h-4 w-4" /></Button>
      </div>
    </div>
    <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">{sent ? "Thanks — we'll be in touch within 24 hours." : 'Free 20-minute AI consultation. No spam, ever.'}</p>
  </form>;
}

function SiteFooter() {
  return <footer className="relative overflow-hidden border-t border-foreground/10 bg-background pt-16 sm:pt-20 md:pt-28">
    <div className="animate-aura pointer-events-none will-change-transform absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,229,255,.14),rgba(124,58,237,.12)_40%,transparent_70%)] blur-3xl" />
    <div className="animate-float-slow pointer-events-none absolute right-[8%] top-[22%] h-2 w-2 rounded-full bg-accent shadow-[0_0_18px_#7c3aed]" />
    <div className="animate-float-slow pointer-events-none absolute left-[12%] top-[46%] h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_16px_#00e5ff]" />
    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8 md:px-10">
      <div className="grid gap-14 lg:grid-cols-[1.15fr_2fr]">
        <FadeIn>
          <Logo />
          <p className="mt-6 max-w-sm text-lg font-light leading-relaxed text-[#b8c7d9]">Squilky.ai builds high-converting AI websites and intelligent agents for ambitious businesses — blending design, automation, and artificial intelligence into systems that work smarter.</p>
          <Newsletter />
        </FadeIn>
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
          {footerNav.map(([title, items], i) => <FadeIn key={title} delay={i * .06}>
            <h3 className="text-xs font-semibold uppercase tracking-[.22em] text-primary">{title}</h3>
            <ul className="mt-5 space-y-3">{items.map(item => <li key={item}><a href="#contact" className="group inline-flex min-h-[32px] items-center gap-1.5 py-1 text-sm font-light text-[#b8c7d9] transition-colors duration-200 hover:text-foreground"><span className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-3" />{item}</a></li>)}</ul>
          </FadeIn>)}
        </div>
      </div>

      <FadeIn delay={.1}>
        <div className="mt-16 flex flex-col gap-6 border-t border-foreground/10 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-6">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-primary/25 bg-secondary/40 px-4 py-2 text-xs uppercase tracking-widest text-[#dcebfa] backdrop-blur-lg"><span className="animate-status h-2 w-2 rounded-full bg-primary" />All systems operational</span>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-secondary/40 px-4 py-2 text-xs uppercase tracking-widest text-[#dcebfa] backdrop-blur-lg"><Sparkles className="h-3.5 w-3.5 text-accent" />Accepting Q4 projects</span>
          </div>
          <div className="flex items-center gap-3">
            {socials.map(([label, Icon]) => <a key={label} href="#contact" aria-label={label} className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/10 bg-secondary/40 text-[#b8c7d9] backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:text-primary hover:shadow-[0_0_25px_rgba(0,229,255,.25)]"><Icon className="h-4.5 w-4.5" /></a>)}
          </div>
        </div>
      </FadeIn>

      <div className="flex flex-col gap-4 border-t border-foreground/10 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">© 2026 Squilky.ai — AI Web Development & AI Agents</p>
        <a href="#top" className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#b8c7d9] transition-colors hover:text-primary">Back to top<span className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/15 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(0,229,255,.3)]"><ArrowUp className="h-4 w-4" /></span></a>
      </div>
    </div>
    <p aria-hidden className="hero-heading pointer-events-none select-none px-5 pb-6 text-center text-[13.5vw] font-black uppercase leading-[.85] tracking-tighter opacity-[.07]">Squilky.ai</p>
  </footer>;
}

function Index() {
  return <main className="relative overflow-x-clip bg-background"><ScrollProgress/><CursorSpotlight/><HeroSection/><MarqueeSection/><AboutSection/><ServicesSection/><ProjectsSection/><StatsSection/><ContactSection/><SiteFooter/></main>;
}

