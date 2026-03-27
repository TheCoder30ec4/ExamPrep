import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  useEffect(() => {
    document.documentElement.classList.add('light')
    return () => document.documentElement.classList.remove('light')
  }, [])

  return (
    <div className="bg-surface font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen">
      <style dangerouslySetInnerHTML={{ __html: `
        .roadmap-path {
            stroke-dasharray: 12;
            filter: drop-shadow(4px 4px 0px #ff5af9);
        }
        .doodle-float {
            position: absolute;
            pointer-events: none;
            z-index: 10;
        }
      `}} />

      {/* TopAppBar */}
      <header className="bg-white/60 backdrop-blur-xl shadow-[0_16px_32px_rgba(164,0,164,0.08)] fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-4">
          <button className="text-zinc-600 hover:scale-110 transition-transform active:translate-y-0.5 active:translate-x-0.5">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <h1 className="font-headline font-black tracking-tighter uppercase italic text-2xl text-[#a400a4] -rotate-2">QUANTUM PHYSICS</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden md:flex flex-col items-end mr-2">
            <span className="font-label text-[10px] uppercase tracking-widest text-secondary">Urban Scholar</span>
            <span className="font-label text-[10px] text-zinc-400">Level 42 Architect</span>
          </div>
          <Link to="/profile">
            <img alt="User profile avatar" className="w-10 h-10 rounded-full border-2 border-primary hover:scale-110 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLR2h_SJ96_w_A4E4KbORB8O2CblJNHECXVRlZtqLaMyxjMAGTWHmPjeOdVizpCbQwZm0nS-3v4SHDkTTfVU4p_iumjhDkPF1Ki-1YTd8PLuMXCxYN_rMMAEBFZjChBT5RL_WCIGmc9l_WdlXUJ0nhdDA7L28EQkMMvzATSqewr8c0MuimNuplEJOeqxQhWdFyq77zmwk1kA0onyN2_XF3vop3595alQ574sMQhPDZpgbOBMeNfLtzh-wp0ntQ4cePD-ZJRybdQLk_"/>
          </Link>
        </div>
      </header>

      <div className="flex min-h-screen pt-20 pb-32">
        {/* NavigationDrawer (Sidebar) */}
        <aside className="hidden md:flex flex-col fixed inset-y-0 left-0 z-[60] bg-[#f6f6f6] h-full w-80 border-r-4 border-[#a400a4] shadow-2xl pt-24 px-4 overflow-y-auto">
          <div className="mb-8 pl-4">
            <h2 className="text-[#a400a4] font-black font-headline text-xl mb-1">Urban Scholar</h2>
            <p className="text-zinc-500 font-label text-xs uppercase">Knowledge Vault</p>
          </div>
          <nav className="space-y-2">
            <a className="flex items-center gap-4 text-zinc-500 hover:text-[#a400a4] hover:bg-zinc-200 p-4 font-body font-semibold transition-all duration-300" href="#">
              <span className="material-symbols-outlined">functions</span>
              <span>Mathematics</span>
            </a>
            <a className="flex items-center gap-4 bg-[#a400a4] text-white rounded-none -ml-4 pl-8 p-4 font-body font-semibold transition-all duration-300" href="#">
              <span className="material-symbols-outlined">bolt</span>
              <span>Physics</span>
            </a>
            <a className="flex items-center gap-4 text-zinc-500 hover:text-[#a400a4] hover:bg-zinc-200 p-4 font-body font-semibold transition-all duration-300" href="#">
              <span className="material-symbols-outlined">science</span>
              <span>Chemistry</span>
            </a>
            <a className="flex items-center gap-4 text-zinc-500 hover:text-[#a400a4] hover:bg-zinc-200 p-4 font-body font-semibold transition-all duration-300" href="#">
              <span className="material-symbols-outlined">biotech</span>
              <span>Biology</span>
            </a>
            <a className="flex items-center gap-4 text-zinc-500 hover:text-[#a400a4] hover:bg-zinc-200 p-4 font-body font-semibold transition-all duration-300" href="#">
              <span className="material-symbols-outlined">menu_book</span>
              <span>Literature</span>
            </a>
          </nav>
          <div className="mt-auto mb-10 p-4 bg-surface-container-low rounded-xl border-2 border-dashed border-outline-variant">
            <span className="font-label text-[10px] text-primary font-bold">DAILY GOAL</span>
            <div className="h-2 w-full bg-surface-variant rounded-full mt-2 overflow-hidden">
              <div className="h-full bg-tertiary w-3/4"></div>
            </div>
          </div>
        </aside>

        {/* Main Content (Roadmap) */}
        <main className="flex-1 md:ml-80 px-4 md:px-12 relative overflow-hidden bg-surface-container-lowest">
          {/* Decorative Doodles */}
          <div className="doodle-float top-20 right-10 text-primary-fixed-dim opacity-40 rotate-12">
            <span className="material-symbols-outlined text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
          </div>
          <div className="doodle-float bottom-40 left-0 text-tertiary opacity-30 -rotate-12">
            <span className="material-symbols-outlined text-8xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          </div>
          
          <div className="max-w-4xl mx-auto py-12">
            <div className="mb-12 text-center md:text-left">
              <h2 className="font-headline text-5xl md:text-7xl font-black text-on-surface uppercase leading-none">The Study<br/><span className="text-primary italic">Quest</span></h2>
              <p className="font-label text-secondary mt-4 uppercase tracking-tighter font-bold">Path to Quantum Mastery • Chapter 4: Particle Duality</p>
            </div>
            
            {/* Roadmap Container */}
            <div className="relative min-h-[1000px] flex flex-col items-center">
              {/* SVG Roadmap Path */}
              <svg className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none" fill="none" viewBox="0 0 400 1000">
                <path className="roadmap-path" d="M200 0 C 350 150, 50 250, 200 400 S 350 650, 200 800 S 50 950, 200 1000" stroke="#006571" strokeWidth="4"></path>
              </svg>
              
              {/* Milestone: Video Tutorials */}
              <div className="relative z-10 w-full flex justify-start md:pl-20 mb-32">
                <div className="group bg-surface-container-lowest p-6 rounded-xl shadow-[12px_12px_0px_#cafd00] border-2 border-on-surface w-full max-w-xs transform -rotate-2 hover:rotate-0 transition-transform">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-primary-container text-on-primary-container font-label px-3 py-1 text-xs font-black uppercase">Phase 01</span>
                    <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  </div>
                  <h3 className="font-headline text-xl font-bold mb-2">Video Tutorials</h3>
                  <p className="text-on-surface-variant text-sm mb-4 italic">"Visualizing the wave-particle collapse through street-art metaphors."</p>
                  <button className="w-full bg-primary text-white font-label py-3 rounded-none uppercase tracking-widest font-black active:translate-y-1 transition-all">Rewatch</button>
                </div>
              </div>
              
              {/* Milestone: Flashcards */}
              <div className="relative z-10 w-full flex justify-end md:pr-20 mb-32">
                <div className="group bg-surface-container-lowest p-6 rounded-xl shadow-[12px_12px_0px_#ff5af9] border-2 border-on-surface w-full max-w-xs transform rotate-3 hover:rotate-0 transition-transform">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-secondary-container text-on-secondary-container font-label px-3 py-1 text-xs font-black uppercase">Phase 02</span>
                    <span className="material-symbols-outlined text-outline-variant">radio_button_unchecked</span>
                  </div>
                  <h3 className="font-headline text-xl font-bold mb-2">Flashcards</h3>
                  <p className="text-on-surface-variant text-sm mb-4 italic">"Memorize the constants. Own the variables. Rule the grid."</p>
                  <button className="w-full bg-on-surface text-surface-container-lowest font-label py-3 rounded-none uppercase tracking-widest font-black active:translate-y-1 transition-all">Start Drill</button>
                </div>
              </div>
              
              {/* Milestone: AI Podcast */}
              <div className="relative z-10 w-full flex justify-start md:pl-32 mb-32">
                <div className="group bg-surface-container-lowest p-6 rounded-xl shadow-[12px_12px_0px_#26e6ff] border-2 border-on-surface w-full max-w-xs transform -rotate-1 hover:rotate-0 transition-transform">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-tertiary-container text-on-tertiary-container font-label px-3 py-1 text-xs font-black uppercase">Phase 03</span>
                    <span className="material-symbols-outlined text-outline-variant">lock</span>
                  </div>
                  <h3 className="font-headline text-xl font-bold mb-2">AI Coach Podcast</h3>
                  <p className="text-on-surface-variant text-sm mb-4 italic">"Deep dive discussion into Heisenberg's Uncertainty Principle."</p>
                  <div className="flex items-center gap-2 opacity-50">
                    <span className="material-symbols-outlined">headphones</span>
                    <span className="font-label text-xs">Locked until Flashcards 80%</span>
                  </div>
                </div>
              </div>
              
              {/* Milestone: Mock Test (Boss Level) */}
              <div className="relative z-10 w-full flex flex-col items-center mb-20">
                <div className="group bg-inverse-surface p-8 rounded-xl shadow-[16px_16px_0px_#b41340] border-4 border-error w-full max-w-md transform hover:scale-105 transition-transform">
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative">
                      <span className="material-symbols-outlined text-error text-7xl" style={{ fontVariationSettings: "'FILL' 1" }}>skull</span>
                      <span className="absolute -top-4 -right-4 bg-error text-white text-[10px] font-black px-2 py-1 rounded-full uppercase italic animate-pulse">Boss Level</span>
                    </div>
                  </div>
                  <h3 className="font-headline text-3xl font-black text-white text-center mb-2">Mock Test</h3>
                  <p className="text-zinc-400 text-sm text-center mb-6 font-body">Complete this to unlock the next chapter. No mercy.</p>
                  <button className="w-full bg-error text-white font-label py-4 rounded-none uppercase tracking-widest font-black flex items-center justify-center gap-3">
                    <span>Challenge Boss</span>
                    <span className="material-symbols-outlined">trending_flat</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Chat & Bottom Nav Container */}
      <div className="fixed bottom-0 left-0 w-full z-40 bg-gradient-to-t from-surface via-surface to-transparent pt-12 pointer-events-none">
        {/* Persistent Chat Field */}
        <div className="max-w-2xl mx-auto px-4 mb-4 pointer-events-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-tertiary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative flex items-center bg-surface-container-lowest border-2 border-on-surface p-2 rounded-xl">
              <span className="material-symbols-outlined text-primary ml-2" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
              <input className="flex-1 bg-transparent border-none focus:ring-0 font-body text-sm px-4" placeholder="Have a doubt? Ask here..." type="text"/>
              <button className="bg-primary text-white p-2 rounded-lg hover:scale-110 active:scale-95 transition-all">
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* BottomNavBar (Mobile Only) */}
        <nav className="md:hidden bg-white dark:bg-zinc-950 rounded-t-[2rem] border-t-2 border-[#f0f1f1] shadow-[0_-8px_24px_rgba(0,0,0,0.05)] flex justify-around items-center px-4 pb-6 pt-2 pointer-events-auto">
          <a className="flex flex-col items-center justify-center bg-[#a400a4] text-white rounded-xl px-4 py-1 mb-1 font-label text-[10px] uppercase tracking-widest" href="#">
            <span className="material-symbols-outlined">map</span>
            <span>Quest</span>
          </a>
          <a className="flex flex-col items-center justify-center text-zinc-400 hover:text-[#006571] font-label text-[10px] uppercase tracking-widest" href="#">
            <span className="material-symbols-outlined">layers</span>
            <span>Vault</span>
          </a>
          <a className="flex flex-col items-center justify-center text-zinc-400 hover:text-[#006571] font-label text-[10px] uppercase tracking-widest" href="#">
            <span className="material-symbols-outlined">psychology</span>
            <span>AI Coach</span>
          </a>
          <Link to="/profile" className="flex flex-col items-center justify-center text-zinc-400 hover:text-[#006571] font-label text-[10px] uppercase tracking-widest">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>person</span>
            <span>Profile</span>
          </Link>
        </nav>
      </div>
    </div>
  )
}
