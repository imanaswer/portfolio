import { Briefcase, GraduationCap, Code, Server, Database } from "lucide-react";
import Link from "next/link";

export default function Experiences() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#2d2d2d] font-sans selection:bg-[#dccfc6] selection:text-black pb-20">
      
      {/* 1. TOP NAVIGATION */}
      <nav className="flex justify-center gap-8 py-12 text-lg text-gray-500 underline-offset-4 font-sans mb-16">
        <Link href="/" className="hover:text-black hover:underline transition-all">about</Link>
        <Link href="/projects" className="hover:text-black hover:underline transition-all">projects</Link>
        <Link href="/experiences" className="text-black underline decoration-2 underline-offset-4">experiences</Link>
      </nav>

      <div className="max-w-3xl mx-auto px-6 space-y-24">

        {/* --- SECTION: WORK EXPERIENCE --- */}
        <section className="space-y-12">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="text-gray-400" size={24} />
            <h2 className="text-3xl font-bold font-serif text-black">Work Experience</h2>
          </div>

          {/* Role 1: Google */}
          <div className="group relative border-l-2 border-gray-200 pl-8 pb-12 last:pb-0">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-200 group-hover:bg-black transition-colors border-2 border-[#faf9f6]"></div>
            
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
              <h3 className="text-xl font-bold text-black">Software Engineering Intern</h3>
              <span className="text-sm font-mono text-gray-500">Feb 2025 — Aug 2025</span>
            </div>
            
            <div className="text-lg text-gray-700 font-medium mb-4 flex items-center gap-2">
              Google (Search Ranking Algorithm Team)
            </div>

            <ul className="list-disc list-outside ml-4 space-y-2 text-gray-600 leading-relaxed text-sm md:text-base">
              <li>
                [cite_start]Optimized large-scale search ranking pipelines by integrating AI-driven feature engineering and user behavior modeling[cite: 16].
              </li>
              <li>
                [cite_start]Collaborated in training transformer-based models on millions of records to improve semantic relevance[cite: 17].
              </li>
            </ul>
          </div>

          {/* Role 2: Sproutheads */}
          <div className="group relative border-l-2 border-gray-200 pl-8 pb-12">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-200 group-hover:bg-black transition-colors border-2 border-[#faf9f6]"></div>
            
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
              <h3 className="text-xl font-bold text-black">Python Developer (Automation)</h3>
              <span className="text-sm font-mono text-gray-500">Jul 2024 — Aug 2025</span>
            </div>
            
            <div className="text-lg text-gray-700 font-medium mb-4">
              Sproutheads Software Innovations LLP
            </div>

            <ul className="list-disc list-outside ml-4 space-y-2 text-gray-600 leading-relaxed text-sm md:text-base">
              <li>
                [cite_start]Built and maintained web apps with React.js and backend APIs using Node.js & Express.js[cite: 20].
              </li>
              <li>
                [cite_start]Managed data operations with MongoDB/MySQL and assisted in cloud deployments on AWS[cite: 21, 22].
              </li>
            </ul>
          </div>

          {/* Role 3: CODE-69 */}
          <div className="group relative border-l-2 border-gray-200 pl-8 pb-12">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-200 group-hover:bg-black transition-colors border-2 border-[#faf9f6]"></div>
            
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
              <h3 className="text-xl font-bold text-black">Full Stack Developer</h3>
              <span className="text-sm font-mono text-gray-500">Jan 2024 — Jun 2024</span>
            </div>
            
            <div className="text-lg text-gray-700 font-medium mb-4">
              CODE-69
            </div>

            <ul className="list-disc list-outside ml-4 space-y-2 text-gray-600 leading-relaxed text-sm md:text-base">
              <li>
                [cite_start]Built and deployed AI-powered penetration testing software using Django & React[cite: 25].
              </li>
              <li>
                [cite_start]Improved backend response times by 20% while supporting 1K+ simulated users[cite: 26].
              </li>
            </ul>
          </div>

           {/* Role 4: AMMACHI Labs */}
           <div className="group relative border-l-2 border-gray-200 pl-8">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-200 group-hover:bg-black transition-colors border-2 border-[#faf9f6]"></div>
            
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
              <h3 className="text-xl font-bold text-black">Research Intern</h3>
              <span className="text-sm font-mono text-gray-500">Nov 2023 — Jul 2024</span>
            </div>
            
            <div className="text-lg text-gray-700 font-medium mb-4">
              AMMACHI Labs Research Centre
            </div>

            <ul className="list-disc list-outside ml-4 space-y-2 text-gray-600 leading-relaxed text-sm md:text-base">
              <li>
                [cite_start]Built analytics pipelines with Python & TensorFlow for active learning classrooms[cite: 30].
              </li>
              <li>
                [cite_start]Developed motion heatmap generation + audio-visual fusion, improving engagement analytics by 25%[cite: 31].
              </li>
            </ul>
          </div>
        </section>


        {/* --- SECTION: EDUCATION --- */}
        <section className="space-y-12">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-gray-400" size={24} />
            <h2 className="text-3xl font-bold font-serif text-black">Education</h2>
          </div>

          <div className="group relative border-l-2 border-gray-200 pl-8">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-200 group-hover:bg-black transition-colors border-2 border-[#faf9f6]"></div>
            
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
              <h3 className="text-xl font-bold text-black">Bachelor of Technology (B.Tech)</h3>
              <span className="text-sm font-mono text-gray-500">Graduating Aug 2025</span>
            </div>
            
            <div className="text-lg text-gray-700 font-medium mb-2">
              [cite_start]Amrita Vishwa Vidyapeetham [cite: 4]
            </div>
            <p className="text-gray-600 mb-4">
              [cite_start]Computer Science and Engineering [cite: 5]
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              [cite_start]<strong>Relevant Courses:</strong> Applied Machine Learning, Operating Systems, Computer Architecture, Algorithms & Data Structures[cite: 8].
            </p>
          </div>
        </section>

        {/* --- SECTION: TECHNICAL SKILLS --- */}
        <section className="space-y-12">
           <div className="flex items-center gap-3 mb-8">
            <Code className="text-gray-400" size={24} />
            <h2 className="text-3xl font-bold font-serif text-black">Technical Skills</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <h3 className="font-bold mb-4 flex items-center gap-2 text-gray-800"><Server size={18}/> Core & Backend</h3>
                <div className="flex flex-wrap gap-2">
                    {["Python", "Java", "Go", "C", "Microservices", "Scalable Cloud Solutions"].map(skill => (
                        <span key={skill} className="bg-[#e8e4dc] px-3 py-1 rounded-md text-xs font-medium text-gray-700 font-mono">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="font-bold mb-4 flex items-center gap-2 text-gray-800"><Database size={18}/> Data & AI</h3>
                <div className="flex flex-wrap gap-2">
                    {["TensorFlow", "PostgreSQL", "SQL", "Data Engineering", "PowerBI"].map(skill => (
                        <span key={skill} className="bg-[#e8e4dc] px-3 py-1 rounded-md text-xs font-medium text-gray-700 font-mono">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}