import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Profile() {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.classList.add('light');
    return () => document.documentElement.classList.remove('light');
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="bg-surface font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen pb-24 h-full relative">
      <style dangerouslySetInnerHTML={{ __html: `
        .doodle-float {
            position: absolute;
            pointer-events: none;
            z-index: 10;
        }
      `}} />

      {/* TopAppBar */}
      <header className="bg-white/60 backdrop-blur-xl shadow-[0_16px_32px_rgba(164,0,164,0.08)] sticky top-0 w-full z-50 flex justify-between items-center px-6 py-4 border-b border-surface-container">
        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="text-zinc-600 hover:scale-110 transition-transform active:translate-y-0.5 active:translate-x-0.5">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h1 className="font-headline font-black tracking-tighter uppercase italic text-2xl text-[#a400a4] -rotate-2">PROFILE</h1>
        </div>
        <button 
          onClick={handleLogout}
          className="bg-error text-white font-label px-4 py-2 rounded-xl text-xs uppercase tracking-widest font-bold hover:-translate-y-1 hover:shadow-lg transition-all active:translate-y-0"
        >
          Logout
        </button>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-12">
        {/* Scholar Identity Card */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-tertiary to-secondary rounded-[3rem] blur-xl opacity-20 -z-10 animate-pulse"></div>
          <div className="bg-surface-container-lowest p-8 rounded-[3rem] border-4 border-on-surface shadow-[16px_16px_0_0_#2d2f2f] flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
            {/* Spray Paint Decal */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary opacity-20 blur-3xl rounded-full mix-blend-multiply"></div>
            
            <div className="relative">
              <div className="w-32 h-32 rounded-full border-4 border-primary p-1 relative z-10 bg-surface">
                <img alt="User profile avatar" className="w-full h-full object-cover rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLR2h_SJ96_w_A4E4KbORB8O2CblJNHECXVRlZtqLaMyxjMAGTWHmPjeOdVizpCbQwZm0nS-3v4SHDkTTfVU4p_iumjhDkPF1Ki-1YTd8PLuMXCxYN_rMMAEBFZjChBT5RL_WCIGmc9l_WdlXUJ0nhdDA7L28EQkMMvzATSqewr8c0MuimNuplEJOeqxQhWdFyq77zmwk1kA0onyN2_XF3vop3595alQ574sMQhPDZpgbOBMeNfLtzh-wp0ntQ4cePD-ZJRybdQLk_" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-tertiary text-on-tertiary font-label font-black text-sm px-4 py-1 rounded-full border-2 border-on-surface transform rotate-12 z-20 shadow-[4px_4px_0_0_#2d2f2f]">
                LVL 42
              </div>
            </div>
            
            <div className="text-center md:text-left flex-grow space-y-4">
              <div>
                <h2 className="text-4xl md:text-5xl font-headline font-black tracking-tighter uppercase">{user?.name || 'Urban Scholar'}</h2>
                <p className="font-label text-secondary font-bold tracking-widest uppercase mt-1">{user?.email || 'student@domain.com'}</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between font-label text-xs font-bold uppercase tracking-wider">
                  <span>EXP to Level 43</span>
                  <span className="text-primary">8,402 / 10,000</span>
                </div>
                <div className="h-4 bg-surface-container rounded-full overflow-hidden border-2 border-on-surface">
                  <div className="h-full bg-gradient-to-r from-primary via-tertiary to-secondary w-[84%]"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enrolled Subjects */}
        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-4xl font-headline font-black italic tracking-tighter uppercase">Active <span className="text-secondary">Missions</span></h3>
            <span className="material-symbols-outlined text-primary scale-150" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="group bg-surface-container-lowest p-6 rounded-[2rem] border-4 border-on-background shadow-[8px_8px_0_0_#2d2f2f] flex gap-6 items-center transition-all hover:-translate-y-1 hover:shadow-[12px_12px_0_0_#2d2f2f]">
              <div className="w-24 h-24 rounded-2xl bg-secondary-dim flex items-center justify-center text-secondary-container shrink-0 rotate-[-4deg]">
                <span className="material-symbols-outlined text-5xl">science</span>
              </div>
              <div className="flex-grow space-y-1">
                <h4 className="text-2xl font-headline font-bold uppercase tracking-tight">Quantum Physics</h4>
                <div className="h-4 bg-surface-container rounded-full overflow-hidden relative">
                  <div className="absolute top-0 left-0 h-full w-[65%] bg-secondary transition-all"></div>
                </div>
                <div className="flex justify-between font-label font-bold text-[10px] uppercase tracking-wider text-secondary">
                  <span>Unit 04: Wave Mechanics</span>
                  <span>65% Complete</span>
                </div>
              </div>
            </div>
            
            <div className="group bg-surface-container-lowest p-6 rounded-[2rem] border-4 border-on-background shadow-[8px_8px_0_0_#2d2f2f] flex gap-6 items-center transition-all hover:-translate-y-1 hover:shadow-[12px_12px_0_0_#2d2f2f]">
              <div className="w-24 h-24 rounded-2xl bg-primary-dim flex items-center justify-center text-primary-container shrink-0 rotate-[4deg]">
                <span className="material-symbols-outlined text-5xl">experiment</span>
              </div>
              <div className="flex-grow space-y-1">
                <h4 className="text-2xl font-headline font-bold uppercase tracking-tight">Organic Chemistry</h4>
                <div className="h-4 bg-surface-container rounded-full overflow-hidden relative">
                  <div className="absolute top-0 left-0 h-full w-[88%] bg-primary transition-all"></div>
                </div>
                <div className="flex justify-between font-label font-bold text-[10px] uppercase tracking-wider text-primary">
                  <span>Unit 07: Carbon Chains</span>
                  <span>88% Complete</span>
                </div>
              </div>
            </div>
            
            <div className="group bg-surface-container-lowest p-6 rounded-[2rem] border-4 border-on-background shadow-[8px_8px_0_0_#2d2f2f] flex gap-6 items-center transition-all hover:-translate-y-1 hover:shadow-[12px_12px_0_0_#2d2f2f]">
              <div className="w-24 h-24 rounded-2xl bg-tertiary-dim flex items-center justify-center text-tertiary-container shrink-0 rotate-[-2deg]">
                <span className="material-symbols-outlined text-5xl">account_balance</span>
              </div>
              <div className="flex-grow space-y-1">
                <h4 className="text-2xl font-headline font-bold uppercase tracking-tight">World History</h4>
                <div className="h-4 bg-surface-container rounded-full overflow-hidden relative">
                  <div className="absolute top-0 left-0 h-full w-[42%] bg-tertiary transition-all"></div>
                </div>
                <div className="flex justify-between font-label font-bold text-[10px] uppercase tracking-wider text-tertiary">
                  <span>Unit 03: Industrial Age</span>
                  <span>42% Complete</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center border-4 border-dashed border-outline-variant rounded-[2rem] min-h-[120px] group hover:bg-surface-container-low cursor-pointer transition-colors">
              <div className="flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-4xl text-outline">add_circle</span>
                <p className="font-label font-bold uppercase text-xs text-outline">Unlock New Module</p>
              </div>
            </div>
          </div>
        </section>

        {/* Achievement Vault */}
        <section className="space-y-8 pb-10">
          <h3 className="text-4xl font-headline font-black italic tracking-tighter uppercase">The <span className="text-tertiary">Achievement</span> Vault</h3>
          
          <div className="bg-surface-container-lowest p-8 rounded-[3rem] border-4 border-tertiary shadow-[0_32px_64px_rgba(78,99,0,0.1)] relative overflow-hidden">
            <span className="material-symbols-outlined absolute top-4 right-10 text-6xl text-tertiary/10 rotate-12" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined absolute bottom-4 left-10 text-8xl text-primary/10 -rotate-12" style={{ fontVariationSettings: "'FILL' 1" }}>draw</span>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-24 h-24 rounded-full bg-tertiary-container flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                  <span className="material-symbols-outlined text-5xl text-on-tertiary-container" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                </div>
                <p className="font-label font-bold uppercase text-[10px] tracking-widest leading-tight">Quest Crown:<br/>Atomic Theory</p>
              </div>
              
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-24 h-24 rounded-full bg-primary-container flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                  <span className="material-symbols-outlined text-5xl text-on-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                </div>
                <p className="font-label font-bold uppercase text-[10px] tracking-widest leading-tight">Lightning Star:<br/>100% Quiz</p>
              </div>
              
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-24 h-24 rounded-full bg-secondary-container flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                  <span className="material-symbols-outlined text-5xl text-on-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>military_tech</span>
                </div>
                <p className="font-label font-bold uppercase text-[10px] tracking-widest leading-tight">Quest Crown:<br/>Bio Genius</p>
              </div>
              
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-24 h-24 rounded-full bg-zinc-200 flex items-center justify-center border-4 border-dashed border-zinc-300 opacity-60">
                  <span className="material-symbols-outlined text-5xl text-zinc-400">lock</span>
                </div>
                <p className="font-label font-bold uppercase text-[10px] tracking-widest leading-tight">Locked Item</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-2 bg-white dark:bg-zinc-950 z-50 rounded-t-[2rem] shadow-[0_-8px_24px_rgba(0,0,0,0.05)] border-t-0 bg-zinc-50 dark:bg-zinc-900">
        <Link to="/dashboard" className="flex flex-col items-center justify-center text-zinc-400 dark:text-zinc-600 px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
          <span className="material-symbols-outlined">grid_view</span>
          <span className="font-label text-[10px] uppercase tracking-widest mt-1">Feed</span>
        </Link>
        <Link to="/how-it-works" className="flex flex-col items-center justify-center text-zinc-400 dark:text-zinc-600 px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
          <span className="material-symbols-outlined">auto_stories</span>
          <span className="font-label text-[10px] uppercase tracking-widest mt-1">Learn</span>
        </Link>
        <Link to="/dashboard" className="flex flex-col items-center justify-center text-zinc-400 dark:text-zinc-600 px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
          <span className="material-symbols-outlined">workspace_premium</span>
          <span className="font-label text-[10px] uppercase tracking-widest mt-1">Vault</span>
        </Link>
        <div className="flex flex-col items-center justify-center bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-700 dark:text-fuchsia-300 rounded-xl px-4 py-2 scale-95 duration-150">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
          <span className="font-label text-[10px] uppercase tracking-widest mt-1">Profile</span>
        </div>
      </nav>
    </div>
  );
}
