import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#2d2d2d] font-sans selection:bg-[#dccfc6] selection:text-black pb-20">
      
      {/* 1. TOP NAVIGATION */}
      <nav className="flex justify-center gap-8 py-12 text-lg text-gray-500 underline-offset-4 font-sans mb-16">
        <Link href="/" className="hover:text-black hover:underline transition-all">about</Link>
        <Link href="/projects" className="text-black underline decoration-2 underline-offset-4">projects</Link>
        <Link href="/#experiences" className="hover:text-black hover:underline transition-all">experiences</Link>
      </nav>

      {/* 2. PROJECT LIST CONTAINER */}
      <div className="max-w-6xl mx-auto px-6 space-y-32">
        
        {/* --- PROJECT 1: Trading Sentinel --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start group">
            
            {/* Left: Image */}
            <div className="md:col-span-7 relative">
                <a href="https://github.com/imanaswer/trading-sentinel" target="_blank" className="block aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-sm border border-gray-200 group-hover:shadow-md transition-all">
                   <img 
                      src="/trading.jpg" 
                      alt="Trading Sentinel Dashboard" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                   />
                </a>
            </div>

            {/* Right: Content */}
            <div className="md:col-span-5 flex flex-col h-full pt-2">
                <div className="flex justify-between items-start">
                    <div>
                        <h2 className="text-2xl font-bold font-serif text-black group-hover:underline decoration-2 underline-offset-4">
                            Trading Sentinel
                        </h2>
                        <p className="text-sm text-gray-500 mt-2 font-mono">Automated Algo-Trading Bot</p>
                    </div>
                    {/* GitHub Link */}
                    <a href="https://github.com/imanaswer/trading-sentinel" target="_blank" className="text-gray-400 hover:text-black transition-colors">
                        <Github size={22}/>
                    </a>
                </div>

                <p className="mt-6 text-gray-600 leading-relaxed text-sm md:text-base">
                    An autonomous market analysis system built to remove emotion from trading. 
                    It ingests real-time market data, calculates technical indicators using <strong>Python</strong>, and executes trades via <strong>n8n</strong> workflows.
                </p>

                {/* Tech Stack Pills */}
                <div className="mt-6 flex flex-wrap gap-2">
                    {["Python", "n8n", "Docker", "PostgreSQL"].map((tech) => (
                        <span key={tech} className="bg-[#e8e4dc] text-gray-800 px-3 py-1 rounded-md text-xs font-medium font-mono">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>

        {/* --- PROJECT 2: Bedtime Stories AI --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start group">
            <div className="md:col-span-7 relative">
                <a href="https://github.com/imanaswer/bedtime-stories" target="_blank" className="block aspect-video bg-indigo-50 rounded-lg overflow-hidden shadow-sm border border-gray-200 group-hover:shadow-md transition-all">
                   <img 
                      src="/bedtime.jpg" 
                      alt="Bedtime Stories AI App" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                   />
                </a>
            </div>

            <div className="md:col-span-5 flex flex-col h-full pt-2">
                <div className="flex justify-between items-start">
                    <div>
                        <h2 className="text-2xl font-bold font-serif text-black group-hover:underline decoration-2 underline-offset-4">
                            Bedtime Stories AI
                        </h2>
                        <p className="text-sm text-gray-500 mt-2 font-mono">Generative AI Platform</p>
                    </div>
                    <a href="https://github.com/imanaswer/bedtime-stories" target="_blank" className="text-gray-400 hover:text-black transition-colors">
                        <Github size={22}/>
                    </a>
                </div>

                <p className="mt-6 text-gray-600 leading-relaxed text-sm md:text-base">
                    A full-stack application that generates personalized children's stories. 
                    Uses <strong>OpenAI</strong> for plot generation and <strong>Stable Diffusion</strong> for dynamic cover art, wrapping it all in a Next.js interface.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                    {["React", "Next.js", "OpenAI API", "Tailwind"].map((tech) => (
                        <span key={tech} className="bg-[#e8e4dc] text-gray-800 px-3 py-1 rounded-md text-xs font-medium font-mono">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>

        {/* --- PROJECT 3: Habit Tracker --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start group">
            <div className="md:col-span-7 relative">
                <a href="https://github.com/imanaswer/habit-tracker" target="_blank" className="block aspect-video bg-gray-50 rounded-lg overflow-hidden shadow-sm border border-gray-200 group-hover:shadow-md transition-all">
                   <img 
                      src="/habit.jpg" 
                      alt="Habit Tracker Mobile App" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                   />
                </a>
            </div>

            <div className="md:col-span-5 flex flex-col h-full pt-2">
                <div className="flex justify-between items-start">
                    <div>
                        <h2 className="text-2xl font-bold font-serif text-black group-hover:underline decoration-2 underline-offset-4">
                            Habit Tracker iOS
                        </h2>
                        <p className="text-sm text-gray-500 mt-2 font-mono">Mobile Productivity</p>
                    </div>
                    <a href="https://github.com/imanaswer/habit-tracker" target="_blank" className="text-gray-400 hover:text-black transition-colors">
                        <Github size={22}/>
                    </a>
                </div>

                <p className="mt-6 text-gray-600 leading-relaxed text-sm md:text-base">
                    A minimalist iOS application for tracking daily fitness and productivity routines. 
                    Built with <strong>React Native</strong> for 60fps performance and smooth haptic feedback.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                    {["React Native", "Expo", "TypeScript", "iOS"].map((tech) => (
                        <span key={tech} className="bg-[#e8e4dc] text-gray-800 px-3 py-1 rounded-md text-xs font-medium font-mono">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>

      </div>
    </main>
  );
}