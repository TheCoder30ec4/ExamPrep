import { Link } from 'react-router-dom'
import Navbar from '@/components/Navbar'

export default function HowItWorks() {
  return (
    <div className="bg-background font-body text-on-background selection:bg-tertiary-container selection:text-on-tertiary-container overflow-x-hidden min-h-screen scroll-smooth relative z-0">
      <div className="fixed inset-0 z-[-1] bg-gradient-to-tr from-secondary/10 via-tertiary-fixed-dim/5 to-primary/10 animate-gradient-xy pointer-events-none"></div>

      <Navbar activePage="how-it-works" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"></div>
        <div className="absolute top-1/2 -right-20 w-80 h-80 bg-tertiary/10 rounded-full blur-[100px]"></div>
        <div className="absolute top-40 left-[15%] opacity-20 rotate-12">
          <span className="material-symbols-outlined text-8xl text-primary" data-icon="star">star</span>
        </div>
        
        {/* Additional Graffiti / Street Art Elements */}
        <div className="absolute top-[20%] right-[10%] text-secondary opacity-15 rotate-[-15deg] animate-drift">
          <span className="font-headline font-black text-6xl tracking-tighter uppercase whitespace-nowrap">Pure Energy</span>
        </div>
        <div className="absolute top-[45%] left-[-5%] text-primary opacity-10 rotate-[80deg] origin-left">
          <span className="font-headline font-black text-8xl tracking-tight uppercase whitespace-nowrap">STUDY HARDER</span>
        </div>
        <div className="absolute bottom-[20%] left-[10%] text-tertiary opacity-20 -rotate-12 animate-bounce flex">
          <span className="material-symbols-outlined text-6xl" data-icon="electric_bolt">electric_bolt</span>
          <span className="material-symbols-outlined text-6xl" data-icon="electric_bolt">electric_bolt</span>
        </div>
        <div className="absolute bottom-[35%] right-[-10%] text-on-surface-variant opacity-15 rotate-[-90deg] origin-right">
          <span className="font-headline font-black text-7xl tracking-tighter uppercase whitespace-nowrap">NO BRAIN FOG</span>
        </div>
        <div className="absolute top-[60%] left-[80%] opacity-20 rotate-45 animate-drift" style={{ animationDelay: '1s' }}>
          <span className="material-symbols-outlined text-9xl text-primary-fixed" data-icon="south_east">south_east</span>
        </div>
        <div className="absolute bottom-10 left-1/3 w-32 h-32 text-secondary opacity-30 rotate-12">
          <svg className="w-full h-full fill-none stroke-current stroke-[4]" viewBox="0 0 100 100">
             <path d="M10,50 Q25,25 50,50 T90,50"></path>
          </svg>
        </div>
        <div className="absolute top-[30%] left-[5%] text-primary opacity-10 rotate-[90deg] origin-left">
          <span className="font-headline font-black text-6xl tracking-tight uppercase whitespace-nowrap">GRIND NEVER STOPS</span>
        </div>
        <div className="absolute top-[75%] right-[5%] text-secondary opacity-10 rotate-[-90deg] origin-right">
          <span className="font-headline font-black text-7xl tracking-tighter uppercase whitespace-nowrap">NO EXCUSES</span>
        </div>
        <div className="absolute top-[10%] left-[80%] text-tertiary-fixed opacity-40 rotate-[15deg] animate-pulse">
          <span className="material-symbols-outlined text-6xl" data-icon="local_fire_department">local_fire_department</span>
        </div>
        <div className="absolute bottom-[45%] left-[5%] text-on-surface opacity-10 -rotate-6">
          <span className="font-headline font-black text-8xl tracking-widest uppercase whitespace-nowrap">ACE IT</span>
        </div>
        <div className="absolute top-[80%] left-[20%] text-primary opacity-20 rotate-[-15deg] animate-drift">
          <span className="material-symbols-outlined text-8xl" data-icon="rocket_launch">rocket_launch</span>
        </div>
        <div className="absolute top-[50%] right-[15%] text-tertiary opacity-30 rotate-[35deg] animate-bounce">
          <span className="material-symbols-outlined text-7xl" data-icon="celebration">celebration</span>
        </div>
        <div className="absolute bottom-[10%] right-[20%] text-secondary opacity-20 rotate-[-5deg]">
          <span className="font-headline font-black text-8xl tracking-tight uppercase whitespace-nowrap">HUSTLE</span>
        </div>
        <div className="absolute top-[5%] right-[30%] w-24 h-24 text-primary opacity-20 rotate-12">
          <svg className="w-full h-full fill-none stroke-current stroke-[4]" viewBox="0 0 100 100">
             <circle cx="50" cy="50" r="40" strokeDasharray="10 10"></circle>
          </svg>
        </div>
      </div>

      <main className="relative z-10 w-full max-w-4xl mx-auto py-24 px-6">
        <div className="mb-16 relative flex justify-center">
          <h2 className="font-headline font-black text-5xl md:text-6xl uppercase tracking-tighter leading-none text-primary transform -rotate-1 text-center">
            How It <br/> Works
          </h2>
          <div className="absolute -top-4 -right-2 w-16 h-16 bg-tertiary-container rounded-full flex items-center justify-center rotate-12 shadow-lg">
            <span className="material-symbols-outlined text-on-tertiary-container font-bold text-4xl" data-icon="bolt">bolt</span>
          </div>
        </div>
        
        {/* Vertical Step-by-Step */}
        <div className="space-y-12 relative max-w-2xl mx-auto">
          {/* Step 1 */}
          <div className="flex gap-6 items-center relative z-10 w-full flex-col sm:flex-row">
            <div className="flex gap-6 items-start flex-1 w-full">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-on-primary font-headline font-black text-2xl flex items-center justify-center rounded-xl shadow-[4px_4px_0_0_#4a5e00] rotate-[-4deg]">
                1
              </div>
              <div className="bg-white p-6 rounded-xl border-l-4 border-primary shadow-sm flex-1">
                <h3 className="font-headline font-bold text-xl mb-2 text-on-surface">Upload study material</h3>
                <p className="text-on-surface-variant text-base font-medium">Drop your PDFs or just shout a topic at us. We handle the heavy lifting.</p>
              </div>
            </div>
            <div className="w-40 h-40 sm:w-56 sm:h-56 flex-shrink-0 animate-drift">
               <img src="/step1-upload.png" alt="Upload Book" className="w-full h-full object-contain drop-shadow-xl hover:scale-110 transition-transform hover:rotate-3" />
            </div>
          </div>
          
          <div className="w-full flex justify-center py-2">
            <span className="material-symbols-outlined text-tertiary text-5xl rotate-90" data-icon="south_east">south_east</span>
          </div>
          
          {/* Step 2 */}
          <div className="flex gap-6 items-center relative z-10 w-full flex-col sm:flex-row-reverse sm:text-right">
            <div className="flex gap-6 items-start flex-1 w-full sm:flex-row-reverse">
              <div className="flex-shrink-0 w-12 h-12 bg-secondary text-white font-headline font-black text-2xl flex items-center justify-center rounded-xl shadow-[-4px_4px_0_0_#a400a4] rotate-[6deg]">
                2
              </div>
              <div className="bg-white p-6 rounded-xl border-r-4 border-secondary shadow-sm flex-1">
                <h3 className="font-headline font-bold text-xl mb-2 text-on-surface">Tell us your vibe</h3>
                <p className="text-on-surface-variant text-base font-medium">Link your Spotify and interests. We mix the curriculum to your beat.</p>
              </div>
            </div>
            <div className="w-40 h-40 sm:w-56 sm:h-56 flex-shrink-0 animate-drift" style={{ animationDelay: '1.5s' }}>
               <img src="/step2-vibe.png" alt="Vibe Headphones" className="w-full h-full object-contain drop-shadow-xl hover:scale-110 transition-transform hover:-rotate-3" />
            </div>
          </div>
          
          <div className="w-full flex justify-center py-2">
            <span className="material-symbols-outlined text-primary text-5xl rotate-90" data-icon="south_west">south_west</span>
          </div>
          
          {/* Step 3 */}
          <div className="flex gap-6 items-center relative z-10 w-full flex-col sm:flex-row">
            <div className="flex gap-6 items-start flex-1 w-full">
              <div className="flex-shrink-0 w-12 h-12 bg-tertiary text-on-tertiary font-headline font-black text-2xl flex items-center justify-center rounded-xl shadow-[4px_4px_0_0_#006571] rotate-[-2deg]">
                3
              </div>
              <div className="bg-white p-6 rounded-xl border-l-4 border-tertiary shadow-sm flex-1">
                <h3 className="font-headline font-bold text-xl mb-2 text-on-surface">Learn your way</h3>
                <p className="text-on-surface-variant text-base font-medium">AI-generated podcasts, short-form vids, and custom notes that don't suck.</p>
              </div>
            </div>
            <div className="w-40 h-40 sm:w-56 sm:h-56 flex-shrink-0 animate-drift" style={{ animationDelay: '0.5s' }}>
               <img src="/step3-listen.png" alt="Skateboard Learn" className="w-full h-full object-contain drop-shadow-xl hover:scale-110 transition-transform hover:-rotate-6" />
            </div>
          </div>
          
          <div className="w-full flex justify-center py-2">
            <span className="material-symbols-outlined text-secondary text-5xl rotate-90" data-icon="south_east">south_east</span>
          </div>
          
          {/* Step 4 */}
          <div className="flex gap-6 items-center relative z-10 w-full flex-col sm:flex-row-reverse sm:text-right">
            <div className="flex gap-6 items-start flex-1 w-full sm:flex-row-reverse">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-container text-on-primary-container font-headline font-black text-2xl flex items-center justify-center rounded-xl shadow-[-4px_4px_0_0_#4e6300] rotate-[4deg]">
                4
              </div>
              <div className="bg-white p-6 rounded-xl border-r-4 border-primary-container shadow-sm flex-1">
                <h3 className="font-headline font-bold text-xl mb-2 text-on-surface">Test yourself</h3>
                <p className="text-on-surface-variant text-base font-medium">Gamified quizzes and mock papers designed to make you a genius.</p>
              </div>
            </div>
            <div className="w-40 h-40 sm:w-56 sm:h-56 flex-shrink-0 animate-drift" style={{ animationDelay: '2s' }}>
               <img src="/step4-test.png" alt="Pencil Test" className="w-full h-full object-contain drop-shadow-xl hover:scale-110 transition-transform hover:rotate-12" />
            </div>
          </div>
          
          <div className="mt-20 w-full flex justify-center pb-12">
            <Link to="/auth" className="inline-block bg-primary text-on-primary px-10 py-5 rounded-xl font-headline font-black text-2xl shadow-[8px_8px_0px_0px_#4a5e00] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all">
              GET STARTED
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
