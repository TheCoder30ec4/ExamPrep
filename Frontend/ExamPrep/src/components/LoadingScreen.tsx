import React, { useState, useEffect } from 'react';

const loadingStates = [
  {
    title: "Loading...",
    sub: "System Calibration in Progress",
    footerPrefix: "Mixing your vibe...",
    footerHighlight: "AI is cooking.",
  },
  {
    title: "Connecting...",
    sub: "Establishing secure link",
    footerPrefix: "Fetching resources...",
    footerHighlight: "Almost ready.",
  },
  {
    title: "Initializing...",
    sub: "Loading Brain Gains modules",
    footerPrefix: "Preparing environment...",
    footerHighlight: "Stand by.",
  }
];

const LoadingScreen: React.FC = () => {
  const [currentState, setCurrentState] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentState((prev) => (prev + 1) % loadingStates.length);
    }, 800);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Increases to 100% over roughly 2.5 seconds (50 increments of 2 = 100, 50 * 50ms = 2500ms)
        return prev + 2;
      });
    }, 50);

    return () => {
      clearInterval(textInterval);
      clearInterval(progressInterval);
    };
  }, []);

  const { title, sub, footerPrefix, footerHighlight } = loadingStates[currentState];

  return (
    <div className="bg-surface font-body text-on-surface overflow-hidden min-h-screen">
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-transparent">
        <div className="font-headline font-black uppercase tracking-tighter -rotate-1 text-primary text-2xl italic">
            ExamPrep
        </div>
      </header>
      
      <main className="relative min-h-screen w-full flex flex-col items-center justify-center p-8 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-surface-container-lowest via-surface to-surface-container overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none mix-blend-multiply" 
          aria-label="Faint multi-colored graffiti mural on white wall background"
          style={{
            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC8y5wZCfVSmJiTeqDB8SAMEaHk4W1VhWPxCAIlLYwVjnpHyyls0aJ1GvEczlCtW9oibrXv4p4cWK4RB3aEeUqdHQnLgd5i-Ypr0T7Fw2T3rJPXfBfTwUaF866aCBORAqFp5t4Hz5TlHCm0DRR8ygy33T5SwiAREbKcXKa9zWjDppRXPeISXfq8L3YyqA4E_j5_CkpqgFgsUrezeU56u7f6u_-dCRRSPMnVyucwf_7s-K1vVbUbU4fy0IRpVCaQNPFqzTykbTJJDRUk')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>
        
        <div className="relative w-full max-w-lg h-96 flex items-center justify-center">
          <div className="absolute top-0 right-10 rotate-12 bg-tertiary-container p-4 rounded-xl shadow-lg border-2 border-on-tertiary-container">
            <span className="material-symbols-outlined text-on-tertiary-container text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          </div>
          
          <div className="absolute bottom-10 left-4 -rotate-12 bg-secondary-container p-3 rounded-xl shadow-lg border-2 border-on-secondary-container">
            <span className="material-symbols-outlined text-on-secondary-container text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
          </div>
          
          <div className="absolute top-[10%] -left-8 -rotate-6">
            <div className="bg-primary px-6 py-2 rounded-lg transform skew-x-12 shadow-[8px_8px_0px_0px_rgba(68,0,68,0.2)]">
                <span className="font-headline text-white font-black text-xl tracking-widest">BRAIN GAINS</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-4 relative z-10">
            <h1 className="font-headline text-7xl md:text-9xl font-black italic tracking-tighter text-transparent bg-gradient-to-r from-primary via-secondary to-tertiary spray-text bg-[length:200%_auto] transition-all duration-300">
                {title}
            </h1>
            <div className="bg-surface-container-highest p-2 -rotate-2 shadow-sm border-b-4 border-r-4 border-outline-variant">
                <span className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant transition-opacity duration-300">{sub}</span>
            </div>
          </div>
          
          <div className="absolute bottom-4 right-8 rotate-6 text-tertiary">
            <span className="material-symbols-outlined text-6xl opacity-50">draw</span>
          </div>
        </div>
        
        <div className="w-full max-w-2xl mt-12 flex flex-col items-center space-y-8 px-4">
          <div className="w-full h-12 bg-surface-container-high rounded-full relative overflow-hidden p-1.5 shadow-inner">
            <div 
              className="h-full bg-gradient-to-r from-primary to-primary-fixed rounded-full relative flex items-center justify-end pr-4 shadow-[0_0_20px_rgba(164,0,164,0.4)] transition-all duration-75 ease-linear"
              style={{ width: `${progress}%` }}
            >
                <div className="h-3 w-3 bg-white rounded-full animate-pulse shadow-[0_0_10px_white]"></div>
                <div className="absolute right-0 top-full -translate-y-2 w-4 h-8 bg-primary rounded-full blur-[1px]"></div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-tertiary text-on-tertiary font-label text-sm font-black px-4 py-1.5 rounded-full rotate-2 shadow-lg flex items-center gap-2">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                99.9% PASS RATE
            </div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-surface-container-highest rounded-full border-t border-l border-outline"></div>
          </div>
        </div>
        
        <footer className="fixed bottom-12 w-full flex flex-col items-center gap-2">
            <p className="font-body text-on-surface-variant font-medium text-lg tracking-tight transition-opacity duration-300">
                {footerPrefix} <span className="text-primary font-bold italic underline decoration-tertiary decoration-4 underline-offset-4">{footerHighlight}</span>
            </p>
            <div className="flex gap-4 mt-4">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <div className="w-2 h-2 bg-tertiary rounded-full"></div>
            </div>
        </footer>
      </main>
    </div>
  );
};

export default LoadingScreen;
