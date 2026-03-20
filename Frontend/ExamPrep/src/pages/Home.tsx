import { Link } from 'react-router-dom'
import Navbar from '@/components/Navbar'

function Home() {
  return (
    <div className="bg-background font-body text-on-background selection:bg-tertiary-container selection:text-on-tertiary-container overflow-x-hidden min-h-screen scroll-smooth relative z-0">
      <div className="fixed inset-0 z-[-1] bg-gradient-to-br from-primary/10 via-tertiary-fixed-dim/5 to-secondary/10 animate-gradient-xy pointer-events-none"></div>

      <Navbar activePage="home" />

      <main className="relative">
        {/* Chaos Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden h-full">
          {/* Paint Splatters */}
          <div className="absolute top-20 left-10 w-48 h-48 bg-primary/20 splatter-1 rotate-45 blur-xl"></div>
          <div className="absolute top-80 right-20 w-64 h-64 bg-tertiary-fixed-dim/30 splatter-1 -rotate-12 blur-2xl"></div>
          <div className="absolute top-[400px] left-1/3 w-96 h-96 bg-secondary-fixed/10 splatter-1 rotate-[120deg] blur-3xl"></div>
          
          {/* Doodles/Arrows */}
          <div className="absolute top-40 right-[15%] text-primary opacity-20 rotate-[15deg] animate-drift">
            <span className="material-symbols-outlined text-9xl">north_east</span>
          </div>
          <div className="absolute top-[600px] left-[5%] text-tertiary-fixed opacity-30 -rotate-[25deg] animate-drift" style={{ animationDelay: '1s' }}>
            <span className="material-symbols-outlined text-[10rem]">star</span>
          </div>
          <div className="absolute top-[100px] left-[45%] text-secondary opacity-15 rotate-[45deg]">
            <span className="material-symbols-outlined text-8xl">bolt</span>
          </div>
          
          {/* Abstract Mural Strokes */}
          <div className="absolute top-0 right-0 w-1/2 h-[800px] opacity-10 pointer-events-none">
            <svg className="w-full h-full" fill="none" viewBox="0 0 400 800" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 100C150 50 350 200 300 400C250 600 50 550 100 750" stroke="#ff5af9" strokeDasharray="10 30" strokeLinecap="round" strokeWidth="40"></path>
              <path d="M0 200C100 150 300 300 250 500" opacity="0.5" stroke="#beee00" strokeLinecap="round" strokeWidth="60"></path>
            </svg>
          </div>

          {/* GenZ Words & Graffiti */}
          <div className="absolute top-[250px] right-[5%] opacity-20 rotate-12 font-headline font-black text-6xl text-primary tracking-widest">
            SLAY.
          </div>
          <div className="absolute top-[750px] left-[15%] opacity-15 rotate-[-25deg] font-headline font-black text-5xl text-tertiary">
            MAIN CHARACTER ENERGY
          </div>
          <div className="absolute top-[500px] left-[55%] opacity-10 rotate-[5deg] font-label font-bold text-4xl text-secondary tracking-widest">
            COOKING
          </div>
          <svg className="absolute top-[350px] left-[20%] w-48 h-48 opacity-20 stroke-secondary stroke-[4px] fill-transparent" viewBox="0 0 100 100">
             <path d="M 10 90 Q 50 10 90 90" />
             <path d="M 20 50 L 80 50" />
          </svg>

          {/* Lower Page GenZ Words & Graffiti */}
          <div className="absolute top-[1800px] right-[10%] w-64 h-64 bg-primary/20 rounded-full blur-[80px]"></div>
          <div className="absolute bottom-[500px] left-[5%] opacity-15 rotate-[15deg] font-headline font-black text-6xl text-primary tracking-widest">
            NO SLEEP.
          </div>
          <div className="absolute bottom-[800px] right-[20%] opacity-10 rotate-[-10deg] font-headline font-black text-5xl text-tertiary">
            GRIND NEVER STOPS
          </div>
          <div className="absolute top-[2400px] left-[40%] opacity-20 rotate-[35deg] font-label font-bold text-4xl text-secondary tracking-widest">
            VIBE CHECK
          </div>
          <svg className="absolute bottom-[200px] right-[10%] w-64 h-64 opacity-20 stroke-secondary stroke-[4px] fill-transparent" viewBox="0 0 100 100">
             <path d="M 10 90 Q 50 10 90 90" />
             <path d="M 20 50 L 80 50" />
             <path d="M 50 10 L 50 90" />
             <circle cx="50" cy="50" r="20" />
          </svg>
        </div>
        
        {/* Hero Section */}
        <section className="relative min-h-[795px] flex flex-col md:flex-row items-center px-6 md:px-12 py-16 gap-12 max-w-7xl mx-auto z-10">
          <div className="flex-1 z-10 space-y-8">
            <div className="inline-block px-4 py-2 bg-primary text-on-primary font-label text-sm font-black uppercase tracking-widest rounded-lg mb-4 transform -rotate-3 border-2 border-tertiary-fixed shadow-[4px_4px_0px_0px_#000]">
              AI-Powered Mastery
            </div>
            <h1 className="font-headline text-6xl md:text-8xl font-black text-on-surface leading-[0.9] tracking-tighter graffiti-text">
              Exam Ready <br />in <span className="text-primary spray-underline italic">60 Minutes.</span>
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant max-w-xl font-medium leading-relaxed relative">
              <span className="absolute -left-6 -top-4 text-tertiary-fixed text-4xl opacity-50 select-none font-black italic">"</span>
              Upload. Learn. Ace it. <br />
              <span className="text-secondary font-black italic underline decoration-tertiary-container decoration-8 underline-offset-4">Built for Gen Z</span>, powered by AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Link to="/auth" className="bg-tertiary-fixed text-on-tertiary-fixed px-10 py-5 rounded-xl font-headline font-black text-xl shadow-[10px_10px_0px_0px_#a400a4] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all group overflow-hidden relative text-center">
                <span className="relative z-10">START PREPPING</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
              </Link>
              <Link to="/how-it-works" className="bg-surface-container-lowest text-primary px-10 py-5 rounded-xl font-headline font-black text-xl shadow-[8px_8px_0px_0px_#ff5af9] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all border-4 border-primary">
                HOW IT WORKS
              </Link>
            </div>
          </div>
          
          {/* Hero Image/Mural Area */}
          <div className="flex-1 relative w-full h-[350px] md:h-[500px] z-20 mx-auto max-w-md md:max-w-lg">
            {/* Decorative Backing */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-tertiary-fixed/20 rounded-[4rem] rotate-6 scale-110 blur-2xl"></div>
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <div className="relative group w-full h-full flex items-center justify-center">
                {/* Main Image */}
                <div className="relative w-full h-full rounded-[3rem] overflow-hidden border-[8px] border-white shadow-[15px_15px_0px_rgba(0,0,0,0.1)] rotate-[-3deg] transition-transform group-hover:rotate-1 duration-500">
                  <img alt="Animated hero visual" className="w-full h-full object-cover bg-surface" src="/output-onlinegiftools.gif" />
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay pointer-events-none"></div>
                  <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-30 pointer-events-none"></div>
                </div>
                {/* Enhanced Sticker/Doodle Overlays */}
                <div className="absolute -bottom-8 -left-10 bg-secondary text-white p-5 sticker-card shadow-2xl rotate-[15deg] border-4 border-white animate-bounce">
                  <span className="material-symbols-outlined text-5xl" data-icon="rocket_launch">rocket_launch</span>
                </div>
                <div className="absolute -top-12 -right-8 bg-tertiary-fixed text-on-tertiary-fixed px-8 py-3 rounded-full font-label font-black text-lg shadow-[8px_8px_0px_#000] -rotate-12 border-2 border-white">
                  99.9% PASS RATE
                </div>
                <div className="absolute -right-16 top-1/2 w-32 h-32 text-primary opacity-60 -rotate-12">
                  <svg className="w-full h-full fill-none stroke-current stroke-[3]" viewBox="0 0 100 100">
                    <path d="M10,50 C40,10 70,90 90,50 M90,50 L75,40 M90,50 L75,60"></path>
                  </svg>
                </div>
                <div className="absolute -left-20 top-10 text-6xl text-on-primary-fixed-variant opacity-20 font-black font-headline -rotate-45">BOOM</div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Grid */}
        <section id="toolkit" className="bg-transparent py-24 px-6 md:px-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="max-w-7xl mx-auto space-y-16 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-4">
                <span className="font-label font-bold text-primary tracking-[0.2em] uppercase bg-primary-container/20 px-3 py-1 rounded">The Toolkit</span>
                <h2 className="font-headline text-5xl md:text-6xl font-black leading-none">Stop Studying. <br /><span className="text-secondary italic underline decoration-lime-400 decoration-8 underline-offset-8">Start Winning.</span></h2>
              </div>
              <p className="font-body text-on-surface-variant max-w-sm text-lg font-medium border-l-4 border-primary pl-4">We took every boring study habit and injected it with pure digital adrenaline.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-surface-container-lowest p-8 rounded-2xl border-4 border-primary/10 hover:border-primary hover:shadow-[12px_12px_0px_0px_rgba(164,0,164,0.1)] transition-all group relative overflow-hidden">
                <div className="mb-6 w-16 h-16 bg-primary-container/20 rounded-2xl flex items-center justify-center text-primary group-hover:rotate-12 transition-transform">
                  <span className="material-symbols-outlined text-4xl" data-icon="upload_file">upload_file</span>
                </div>
                <h3 className="font-headline text-2xl font-black mb-3">Upload Your PDFs</h3>
                <p className="text-on-surface-variant leading-relaxed">Drop your notes, textbooks, or messy hand-written scribbles. AI cleans it up and learns it in seconds.</p>
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <span className="material-symbols-outlined text-8xl" data-icon="description">description</span>
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-surface-container-lowest p-8 rounded-2xl border-4 border-secondary/10 hover:border-secondary hover:shadow-[12px_12px_0px_0px_rgba(0,101,113,0.1)] transition-all group relative overflow-hidden">
                <div className="mb-6 w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary group-hover:rotate-12 transition-transform">
                  <span className="material-symbols-outlined text-4xl" data-icon="video_library">video_library</span>
                </div>
                <h3 className="font-headline text-2xl font-black mb-3">YouTube Tutorials</h3>
                <p className="text-on-surface-variant leading-relaxed">Paste a link and get a bullet-point summary plus timestamps of the exact parts you actually need to know.</p>
              </div>
              {/* Card 3 */}
              <div className="bg-surface-container-lowest p-8 rounded-2xl border-4 border-tertiary/10 hover:border-tertiary hover:shadow-[12px_12px_0px_0px_rgba(78,99,0,0.1)] transition-all group relative overflow-hidden">
                <div className="mb-6 w-16 h-16 bg-tertiary-container/40 rounded-2xl flex items-center justify-center text-tertiary group-hover:rotate-12 transition-transform">
                  <span className="material-symbols-outlined text-4xl" data-icon="podcasts">podcasts</span>
                </div>
                <h3 className="font-headline text-2xl font-black mb-3">Personalized Podcast</h3>
                <p className="text-on-surface-variant leading-relaxed">Turn your study guide into a conversational AI podcast. Listen and learn while you're on the move.</p>
              </div>
              {/* Card 4 */}
              <div className="bg-surface-container-lowest p-8 rounded-2xl border-4 border-primary/10 hover:border-primary transition-all group relative overflow-hidden">
                <div className="mb-6 w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:rotate-12 transition-transform">
                  <span className="material-symbols-outlined text-4xl" data-icon="psychology">psychology</span>
                </div>
                <h3 className="font-headline text-2xl font-black mb-3">Interest-Based Explanations</h3>
                <p className="text-on-surface-variant leading-relaxed">Explain Quantum Physics using NBA analogies? Done. We teach you in the language you actually speak.</p>
              </div>
              {/* Card 5 */}
              <div className="bg-surface-container-lowest p-8 rounded-2xl border-4 border-secondary/10 hover:border-secondary transition-all group relative overflow-hidden">
                <div className="mb-6 w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary group-hover:rotate-12 transition-transform">
                  <span className="material-symbols-outlined text-4xl" data-icon="quiz">quiz</span>
                </div>
                <h3 className="font-headline text-2xl font-black mb-3">Snap Quizzes</h3>
                <p className="text-on-surface-variant leading-relaxed">Flash-fire questions delivered via push notification. Keep your brain sharp without opening the app.</p>
              </div>
              {/* Card 6 */}
              <div className="bg-surface-container-lowest p-8 rounded-2xl border-4 border-tertiary/10 hover:border-tertiary transition-all group relative overflow-hidden">
                <div className="mb-6 w-16 h-16 bg-tertiary-container/40 rounded-2xl flex items-center justify-center text-tertiary group-hover:rotate-12 transition-transform">
                  <span className="material-symbols-outlined text-4xl" data-icon="article">article</span>
                </div>
                <h3 className="font-headline text-2xl font-black mb-3">Mock Papers</h3>
                <p className="text-on-surface-variant leading-relaxed">Generated exam papers that feel exactly like the real thing. Complete with AI grading and feedback.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-secondary/5 rotate-[-2deg] scale-x-110 -z-10"></div>
          <div className="max-w-5xl mx-auto bg-primary text-on-primary p-12 md:p-24 rounded-[3rem] relative overflow-hidden text-center space-y-8 shadow-[15px_15px_0px_0px_#26e6ff] border-4 border-white">
            <div className="absolute -top-12 -left-12 text-on-primary-container opacity-20 rotate-12">
              <span className="material-symbols-outlined text-[15rem]" data-icon="bolt">bolt</span>
            </div>
            <div className="absolute -bottom-12 -right-12 text-on-primary-container opacity-20 -rotate-12">
              <span className="material-symbols-outlined text-[12rem]" data-icon="auto_awesome">auto_awesome</span>
            </div>
            <h2 className="font-headline text-5xl md:text-8xl font-black leading-tight tracking-tighter">Join the <br /><span className="bg-on-primary text-primary px-6 inline-block -rotate-2 transform hover:rotate-1 transition-transform">Curated Riot</span></h2>
            <p className="text-xl md:text-3xl font-black max-w-2xl mx-auto text-primary-fixed uppercase tracking-tighter">Stop failing and start flourishing. First session is free.</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-10">
              <Link to="/auth" className="bg-tertiary-fixed text-on-tertiary-fixed px-12 py-6 rounded-2xl font-headline font-black text-2xl hover:scale-110 hover:-rotate-2 transition-all shadow-[10px_10px_0px_0px_#000]">
                CLAIM YOUR PASS
              </Link>
              <div className="flex flex-col items-center sm:items-start">
                <p className="font-label text-sm uppercase font-black tracking-[0.3em] opacity-90">No credit card.</p>
                <p className="font-label text-sm uppercase font-black tracking-[0.3em] opacity-90 text-tertiary-fixed">Just pure vibes.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-zinc-50 dark:bg-zinc-950 w-full mt-20 px-8 py-16 flex flex-col items-center gap-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div className="text-3xl font-black text-fuchsia-700 font-headline italic rotate-[-1deg]">ExamPrep</div>
        <div className="flex gap-8 flex-wrap justify-center">
          <a className="text-zinc-500 font-headline font-black uppercase text-xs tracking-widest hover:text-primary transition-colors" href="#">Privacy</a>
          <a className="text-zinc-500 font-headline font-black uppercase text-xs tracking-widest hover:text-primary transition-colors" href="#">Terms</a>
          <a className="text-zinc-500 font-headline font-black uppercase text-xs tracking-widest hover:text-primary transition-colors" href="#">Support</a>
          <a className="text-zinc-500 font-headline font-black uppercase text-xs tracking-widest hover:text-primary transition-colors" href="#">Discord</a>
        </div>
        <p className="text-zinc-400 font-body text-sm leading-relaxed text-center font-medium max-w-md">
          © 2024 ExamPrep AI. The Curated Riot. All rights for the rebels.
        </p>
      </footer>
    </div>
  )
}

export default Home
