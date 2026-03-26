import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';

export default function UploadMaterial() {
  const navigate = useNavigate();
  const [subjectName, setSubjectName] = useState('Quantum Physics');
  const [isEditingSubject, setIsEditingSubject] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('light');
    return () => document.documentElement.classList.remove('light');
  }, []);

  return (
    <div className="bg-surface font-body text-on-surface selection:bg-primary-container min-h-screen">
      <style dangerouslySetInnerHTML={{ __html: `
        .sticker-tooltip {
            clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 15% 100%, 0% 85%);
        }
        .asymmetric-cut {
            clip-path: polygon(0% 0%, 100% 2%, 98% 100%, 0% 98%);
        }
      `}} />
      
      {/* Shared Navbar */}
      <Navbar activePage="none" />

      <main className="pt-24 pb-32 px-6 max-w-5xl mx-auto min-h-screen">
        {/* Breadcrumb / Subject Header */}
        <div className="mb-12 flex items-center justify-between">
          <div className="relative">
            <div 
              className="group flex items-center gap-2 mb-2 cursor-pointer"
              onClick={() => setIsEditingSubject(true)}
            >
              <span className="font-label text-sm uppercase bg-tertiary-container text-on-tertiary-container px-3 py-1 -rotate-2 inline-block transition-transform group-hover:scale-105">
                Subject: {isEditingSubject ? (
                  <input 
                    type="text" 
                    value={subjectName} 
                    onChange={(e) => setSubjectName(e.target.value)}
                    onBlur={() => setIsEditingSubject(false)}
                    onKeyDown={(e) => e.key === 'Enter' && setIsEditingSubject(false)}
                    autoFocus
                    className="bg-transparent border-none outline-none p-0 m-0 w-auto min-w-[100px] text-inherit font-inherit"
                  />
                ) : subjectName}
              </span>
              {!isEditingSubject && <span className="material-symbols-outlined text-sm text-tertiary opacity-0 group-hover:opacity-100 transition-opacity">edit</span>}
            </div>
            <h2 className="font-headline text-5xl md:text-7xl font-black text-on-surface tracking-tight leading-none uppercase">
                Upload Your <br/><span className="text-primary">Material</span>
            </h2>
          </div>
          <div className="hidden md:block sticker-tooltip bg-on-surface text-surface px-6 py-4 max-w-[200px] text-sm font-label font-bold uppercase rotate-3">
            Feed the AI, Get the Vibe.
          </div>
        </div>

        {/* Main Content Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Upload Drop Zone */}
          <section className="md:col-span-8 group">
            <div className="relative bg-surface-container-lowest p-12 rounded-xl border-4 border-dashed border-primary/30 group-hover:border-primary transition-colors flex flex-col items-center justify-center text-center shadow-[12px_12px_0px_0px_rgba(164,0,164,0.1)] h-full min-h-[400px]">
              {/* Arrow Doodle */}
              <div className="absolute -top-10 -right-10 hidden lg:block rotate-12 text-tertiary">
                <svg fill="none" height="100" viewBox="0 0 100 100" width="100" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 20C40 10 70 40 85 80M85 80L75 65M85 80L95 70" stroke="currentColor" strokeLinecap="round" strokeWidth="4"></path>
                </svg>
                <span className="font-label font-bold text-xs">DROP IT HERE!</span>
              </div>
              <div className="w-24 h-24 mb-6 rounded-full bg-primary-container/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-5xl">cloud_upload</span>
              </div>
              <h3 className="font-headline text-2xl font-black mb-2">Drag & Drop Your Brain</h3>
              <p className="font-body text-on-surface-variant max-w-sm mb-8">PDFs, PPTs, Lecture Notes, or Photos of your scribbles. Max 50MB per file.</p>
              <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-headline font-bold text-lg hover:shadow-[0_0_20px_rgba(164,0,164,0.4)] transition-all active:translate-y-1 active:translate-x-1">
                  SELECT FILES
              </button>
              <div className="absolute bottom-6 left-6 opacity-20 pointer-events-none rotate-6">
                <span className="material-symbols-outlined text-8xl">description</span>
              </div>
            </div>
          </section>

          {/* Uploaded Files List */}
          <section className="md:col-span-4 flex flex-col gap-6">
            <div className="bg-surface-container-low p-6 rounded-xl border-l-8 border-tertiary">
              <h4 className="font-label text-sm font-black uppercase mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary">inventory_2</span>
                Uploaded Files (2)
              </h4>
              <div className="space-y-4">
                <div className="bg-surface-container-lowest p-4 rounded-lg flex items-center justify-between group cursor-pointer hover:bg-tertiary-container/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary-container rounded flex items-center justify-center">
                      <span className="material-symbols-outlined text-on-secondary-container">picture_as_pdf</span>
                    </div>
                    <div>
                      <p className="font-body font-bold text-xs truncate max-w-[120px]">Entanglement_Lecture.pdf</p>
                      <p className="font-label text-[10px] text-on-surface-variant uppercase">4.2 MB</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-tertiary font-black" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                </div>
                <div className="bg-surface-container-lowest p-4 rounded-lg flex items-center justify-between group cursor-pointer hover:bg-tertiary-container/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary-container rounded flex items-center justify-center">
                      <span className="material-symbols-outlined text-on-secondary-container">slideshow</span>
                    </div>
                    <div>
                      <p className="font-body font-bold text-xs truncate max-w-[120px]">Quantum_Mechanics.pptx</p>
                      <p className="font-label text-[10px] text-on-surface-variant uppercase">8.5 MB</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-tertiary font-black" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                </div>
              </div>
            </div>
            {/* Tip Card */}
            <div className="bg-primary p-6 rounded-xl text-white asymmetric-cut relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 opacity-30">
                <span className="material-symbols-outlined text-6xl">lightbulb</span>
              </div>
              <p className="font-headline font-black text-xl mb-2">PRO TIP:</p>
              <p className="font-body text-sm leading-relaxed">Better quality notes = harder vibes. Make sure your text is clear!</p>
            </div>
          </section>
        </div>

        {/* Call To Action */}
        <div className="mt-20 flex flex-col items-center">
          <div className="mb-6 flex items-center gap-2 text-on-surface-variant">
            <span className="h-px w-12 bg-outline-variant"></span>
            <span className="font-label text-xs uppercase tracking-widest">Done Uploading?</span>
            <span className="h-px w-12 bg-outline-variant"></span>
          </div>
          <button 
            onClick={() => navigate('/vibe')}
            className="group relative px-12 py-6 bg-on-surface text-surface rounded-xl overflow-hidden hover:scale-105 transition-transform active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-20 transition-opacity"></div>
            <span className="relative z-10 font-headline font-black text-3xl tracking-tighter uppercase flex items-center gap-4">
                Next: Choose Your Vibe
                <span className="material-symbols-outlined text-3xl">arrow_forward</span>
            </span>
          </button>
        </div>
      </main>

      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-40 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-primary/5 blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-tertiary/5 blur-[120px]"></div>
      </div>
    </div>
  );
}
