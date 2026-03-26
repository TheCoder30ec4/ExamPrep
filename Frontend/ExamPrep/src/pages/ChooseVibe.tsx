import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';

export default function ChooseVibe() {
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.classList.add('light');
    return () => document.documentElement.classList.remove('light');
  }, []);

  return (
    <div className="bg-surface font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen">
      {/* Shared Navbar */}
      <Navbar activePage="none" />

      <main className="max-w-6xl mx-auto px-6 pt-12 pb-32">
        {/* Header Section */}
        <header className="mb-16 relative">
          <div className="absolute -top-8 -left-8 w-24 h-24 bg-tertiary/10 rounded-full blur-3xl"></div>
          <h2 className="font-headline text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] mb-4">
              Pick Your <span className="text-primary italic inline-block -rotate-2 graffiti-text">Vibe</span>
          </h2>
          <p className="font-label text-secondary font-bold uppercase tracking-widest bg-secondary-container/30 inline-block px-3 py-1">Step 2: Atmosphere Calibration</p>
        </header>

        {/* Genre Bento Grid */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-20">
          <button className="group relative md:col-span-2 md:row-span-2 bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary active:scale-95 text-left">
            <div className="absolute top-4 right-4 z-10">
              <span className="material-symbols-outlined text-primary text-4xl">bedtime</span>
            </div>
            <div className="h-64 relative">
              <img 
                alt="Lo-Fi Vibes" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQvGH3nfGJ8kIzJ5V1f4G06nvqBtQCIxHyLL0hvBSGBcUIchZ_CsTwVHF4Ob7ybimPi1BM6nku-QSB-ztXygD_ujMnRg_ua5AlItVwPzkbZLLd8_1cAwq8QXRgKTDUB_RlrHnfzSebTt4elvNUwbSs0YylO-Gl_P3gLsxgzMSASPozf-Un9pxnUDEDqrdGLCP6nHWDGohBnflQ98cLwVrTizDuiD1VwH1OPNQbUElT9qPYpZjMiCx07GjFUTQWGCiQ99Px7rIYVM2b"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent"></div>
            </div>
            <div className="p-6">
              <h3 className="font-headline text-3xl font-black italic text-on-surface uppercase mb-2">Lo-Fi Chill</h3>
              <p className="text-on-surface-variant font-medium">Bpm 80 • Rainfall • Vinyl Crackle</p>
            </div>
          </button>

          <button className="group relative bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-secondary active:scale-95 text-left">
            <div className="p-6">
              <span className="material-symbols-outlined text-secondary text-3xl mb-4">bolt</span>
              <h3 className="font-headline text-xl font-black text-on-surface uppercase mb-1">Hardcore Drill</h3>
              <p className="font-label text-xs uppercase text-on-surface-variant">Aggressive focus • High energy</p>
            </div>
            <div className="h-24 bg-secondary/10 relative overflow-hidden">
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-4 border-secondary/20 rounded-full"></div>
            </div>
          </button>

          <button className="group relative bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary-fixed active:scale-95 text-left">
            <div className="p-6">
              <span className="material-symbols-outlined text-primary-fixed text-3xl mb-4">rocket_launch</span>
              <h3 className="font-headline text-xl font-black text-on-surface uppercase mb-1">Synthwave</h3>
              <p className="font-label text-xs uppercase text-on-surface-variant">Retro-future • Deep flow</p>
            </div>
            <div className="h-24 bg-primary/10 relative overflow-hidden">
              <div className="absolute top-2 left-2 w-16 h-1 w-full bg-primary/20 -rotate-12"></div>
            </div>
          </button>

          <button className="group relative md:col-span-2 bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-tertiary active:scale-95 flex items-center text-left">
            <div className="p-8 flex-1">
              <span className="material-symbols-outlined text-tertiary text-4xl mb-2">videogame_asset</span>
              <h3 className="font-headline text-2xl font-black text-on-surface uppercase">8-Bit Grind</h3>
              <p className="text-on-surface-variant">Arcade adrenaline for marathon sessions.</p>
            </div>
            <div className="w-1/3 h-full bg-tertiary-container/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-tertiary text-6xl opacity-20" style={{ fontVariationSettings: "'FILL' 1" }}>pixel_journal</span>
            </div>
          </button>
        </section>

        {/* Study Style Section */}
        <section className="mb-24">
          <div className="flex items-end gap-4 mb-8">
            <h2 className="font-headline text-4xl font-black uppercase tracking-tight">Study Style</h2>
            <div className="h-1 flex-1 bg-surface-container-highest mb-3 relative">
              <div className="absolute left-0 top-0 h-full w-1/3 bg-tertiary"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <label className="cursor-pointer group">
              <input className="hidden peer" name="style" type="radio"/>
              <div className="p-8 rounded-xl bg-surface-container-low border-2 border-transparent peer-checked:border-secondary peer-checked:bg-surface-container-lowest transition-all duration-200 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-secondary opacity-0 peer-checked:opacity-100"></div>
                <h4 className="font-headline text-lg font-black uppercase mb-2 group-hover:text-secondary transition-colors">Explain it like I'm 5</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">Complex theories broken down into simple street-slang and analogies.</p>
              </div>
            </label>
            <label className="cursor-pointer group">
              <input defaultChecked className="hidden peer" name="style" type="radio"/>
              <div className="p-8 rounded-xl bg-surface-container-low border-2 border-transparent peer-checked:border-primary peer-checked:bg-surface-container-lowest transition-all duration-200 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-primary opacity-0 peer-checked:opacity-100"></div>
                <h4 className="font-headline text-lg font-black uppercase mb-2 group-hover:text-primary transition-colors">Academic Grind</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">No fluff. Pure data, rapid-fire flashcards, and heavy citations.</p>
              </div>
            </label>
            <label className="cursor-pointer group">
              <input className="hidden peer" name="style" type="radio"/>
              <div className="p-8 rounded-xl bg-surface-container-low border-2 border-transparent peer-checked:border-tertiary peer-checked:bg-surface-container-lowest transition-all duration-200 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-tertiary opacity-0 peer-checked:opacity-100"></div>
                <h4 className="font-headline text-lg font-black uppercase mb-2 group-hover:text-tertiary transition-colors">Syllabus Sniper</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">High-yield topics only. Laser-focused on the likely exam questions.</p>
              </div>
            </label>
          </div>
        </section>

        {/* Generate Button */}
        <footer className="flex justify-center mb-12">
          <button 
            onClick={() => navigate('/dashboard')}
            className="relative group"
          >
            <div className="absolute inset-0 bg-primary-container blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-primary text-on-primary font-headline text-2xl font-black uppercase px-12 py-6 rounded-full shadow-[0_16px_32px_rgba(164,0,164,0.2)] hover:scale-105 active:scale-95 transition-all flex items-center gap-4">
                Generate My Study Plan
                <span className="material-symbols-outlined text-3xl">auto_awesome</span>
            </div>
            {/* Splatter Decoration */}
            <div className="absolute -bottom-4 -left-8 pointer-events-none">
              <svg className="text-tertiary opacity-40" height="64" viewBox="0 0 100 100" width="64">
                <circle cx="20" cy="20" fill="currentColor" r="10"></circle>
                <circle cx="50" cy="30" fill="currentColor" r="15"></circle>
                <circle cx="30" cy="60" fill="currentColor" r="8"></circle>
              </svg>
            </div>
          </button>
        </footer>
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-end pb-6 px-4 bg-white/60 dark:bg-black/60 backdrop-blur-xl z-50 rounded-t-[24px] shadow-[0_-8px_32px_rgba(164,0,164,0.08)] bg-[#f0f1f1] dark:bg-zinc-800 md:hidden">
        <a className="flex flex-col items-center justify-center text-zinc-500 p-2 hover:text-secondary transition-colors active:scale-95 duration-100" href="#">
          <span className="material-symbols-outlined">library_books</span>
          <span className="font-label text-[10px] uppercase font-bold">Library</span>
        </a>
        <a className="flex flex-col items-center justify-center text-zinc-500 p-2 hover:text-secondary transition-colors active:scale-95 duration-100" href="#">
          <span className="material-symbols-outlined">cloud_upload</span>
          <span className="font-label text-[10px] uppercase font-bold">Upload</span>
        </a>
        <a className="flex flex-col items-center justify-center bg-primary text-white rounded-xl p-3 scale-110 -translate-y-2 shadow-lg active:scale-95 duration-100" href="#">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
          <span className="font-label text-[10px] uppercase font-bold">Vibe</span>
        </a>
        <a className="flex flex-col items-center justify-center text-zinc-500 p-2 hover:text-secondary transition-colors active:scale-95 duration-100" href="#">
          <span className="material-symbols-outlined">timer</span>
          <span className="font-label text-[10px] uppercase font-bold">Focus</span>
        </a>
      </nav>
    </div>
  );
}
