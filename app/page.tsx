import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link"; // Import Link for fast page switching

export default function Home() {
  return (
    // The "Cream" Background Color
    <main className="min-h-screen bg-[#faf9f6] text-[#2d2d2d] font-serif selection:bg-[#dccfc6] selection:text-black">
      
      {/* 1. TOP NAVIGATION */}
      <nav className="flex justify-center gap-8 py-12 text-lg text-gray-500 underline-offset-4 font-sans">
        <a href="#about" className="hover:text-black hover:underline transition-all">about</a>
        {/* Updated to link to the separate Projects page */}
        <Link href="/projects" className="hover:text-black hover:underline transition-all">projects</Link>
        <Link href="/experiences" className="hover:text-black hover:underline transition-all">experiences</Link>      </nav>

      {/* 2. MAIN CONTENT CENTERED */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 mt-10 md:mt-32 max-w-5xl mx-auto px-6">
        
        {/* LEFT: Profile Picture (Circle) */}
        <div className="shrink-0">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white">
            {/* Make sure 'avatar.jpg' is in your public folder */}
            <img 
              src="/avatar.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT: Text Content */}
        <div className="text-center md:text-left space-y-6 max-w-lg">
          
          {/* THE HEADING + CAT */}
          <div className="relative inline-block">
            {/* THE FIX: 'mix-blend-multiply' makes the white background of the GIF transparent */}
            <img 
              src="/cat.gif" 
              alt="Cat" 
              className="absolute -top-12 left-10 w-16 h-16 md:w-20 md:h-20 mix-blend-multiply opacity-90"
            />
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-black">
              hi! i&apos;m <span className="relative">Anaswer.</span> 
            </h1>
          </div>

          {/* Subtitle */}
          <div className="text-xl text-gray-600 leading-relaxed font-sans">
            <p>Software Engineer !!!</p>
            <p>Prev @ Google !!!</p>
            <p>Specializing in <span className="text-black font-medium">Agentic AI</span> & Python</p>
          </div>

          {/* Bullet Points */}
          <div className="text-lg text-gray-700 font-sans space-y-1">
            <p className="font-medium text-black">Things I do:</p>
            <ul className="space-y-1 text-gray-600">
              <li>- Shipped production backend features</li>
              <li>- Built scalable systems and data pipelines</li>
              <li>- Contributed to ML feature engineering</li>
            </ul>
          </div>

          {/* Links Section */}
          <p className="text-lg text-gray-600 font-sans pt-4">
            Currently building cool things with AI. <br/>
            Check out my <Link href="/projects" className="underline decoration-gray-400 hover:decoration-black underline-offset-4 text-black">work</Link> or say hi.
          </p>
          

          {/* Icons */}
          <div className="flex justify-center md:justify-start gap-5 pt-2">
            <a href="https://github.com/yourusername" target="_blank" className="text-black hover:scale-110 transition-transform">
                <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" className="text-black hover:scale-110 transition-transform">
                <Linkedin size={24} />
            </a>
            <a href="mailto:your@email.com" className="text-black hover:scale-110 transition-transform">
                <Mail size={24} />
            </a>
          </div>

        </div>
      </div>
      
    </main>
  );
}