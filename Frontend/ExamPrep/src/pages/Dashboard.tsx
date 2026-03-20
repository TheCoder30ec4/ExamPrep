import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'

type NavItem = { label: string; icon: string; active?: boolean }

const navItems: NavItem[] = [
  { label: 'OVERVIEW', icon: 'grid', active: true },
  { label: 'MATERIALS', icon: 'file' },
  { label: 'AI ASSISTANT', icon: 'bot' },
  { label: 'FLASHCARDS', icon: 'cards' },
]

const recentUploads = [
  { fileName: 'Calculus_Final_Notes.pdf', type: 'PDF', date: 'Oct 24, 2023', status: 'PROCESSED', progress: 100, action: 'VIEW INSIGHTS' },
  { fileName: 'Modern_History_Timeline.docx', type: 'DOCX', date: 'Oct 23, 2023', status: 'PROCESSING', progress: 68, action: 'STANDBY' },
  { fileName: 'Organic_Chemistry_Lab_Report.pdf', type: 'PDF', date: 'Oct 20, 2023', status: 'PROCESSED', progress: 100, action: 'VIEW INSIGHTS' },
]

// Urban Component: Sticker Tooltip
function StickerTooltip({ text, children }: { text: string; children: React.ReactNode }) {
  return (
    <div className="relative group/tooltip inline-block">
      {children}
      <div className="absolute left-1/2 -top-10 -translate-x-1/2 opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none z-50">
        <div className="bg-primary text-primary-foreground font-mono text-xs font-bold uppercase tracking-widest px-3 py-1.5 shadow-neon relative -rotate-2 origin-bottom-left" style={{ borderRadius: '0.5rem 0.5rem 0.5rem 0' }}>
          {text}
        </div>
      </div>
    </div>
  )
}

// Urban Component: Drip Progress Bar
function DripProgressBar({ progress }: { progress: number }) {
  return (
    <div className="w-full bg-muted h-3 relative overflow-hidden group">
      {/* Background Track */}
      <div className="absolute inset-0 border border-border/20 mix-blend-overlay"></div>
      
      {/* Fill */}
      <div 
        className="h-full bg-primary relative transition-all duration-1000 ease-out" 
        style={{ width: `${progress}%` }}
      >
        {/* Animated Drip at the trailing edge */}
        <div className="absolute top-0 right-0 h-full w-4 bg-primary_container translate-x-1/2 -skew-x-12 opacity-80 animate-pulse">
           <div className="absolute -bottom-2 -left-1 w-1.5 h-3 bg-primary rounded-full origin-top transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 delay-100"></div>
           <div className="absolute -bottom-1 right-0 w-1 h-2 bg-primary_container rounded-full origin-top transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 delay-300"></div>
        </div>
      </div>
    </div>
  )
}

function IconGrid() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
  )
}
function IconFile() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  )
}
function IconBot() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}
function IconCards() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  )
}
function IconCloud() {
  return (
    <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
    </svg>
  )
}

function Dashboard() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isDragging, setIsDragging] = useState(false)

  useEffect(() => {
    document.documentElement.classList.add('dark')
    return () => document.documentElement.classList.remove('dark')
  }, [])

  const initials = user?.name
    .split(/\s+/)
    .map((s) => s[0])
    .join('')
    .toUpperCase()
    .slice(0, 2) || 'XX'

  const handleLogout = () => {
    logout()
    navigate('/auth')
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }
  const handleDragLeave = () => setIsDragging(false)
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const files = e.dataTransfer.files
    if (files.length) {
      // TODO: upload files
    }
  }
  const handleBrowse = () => fileInputRef.current?.click()

  return (
    <div className="min-h-screen bg-background text-foreground flex font-sans selection:bg-primary/30">
      {/* Sidebar - No Borders, Muted Background */}
      <aside className="w-72 min-h-screen bg-muted flex flex-col pt-8 pb-6 px-4">
        <div className="mb-12 px-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-primary flex items-center justify-center -rotate-6 shadow-neon">
            <span className="font-display font-black text-primary-foreground rotate-6 text-xl">EP</span>
          </div>
          <span className="text-2xl font-display font-black tracking-tight uppercase italic mt-1">
            ExamPrep
          </span>
        </div>
        
        <nav className="flex-1 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-xs font-mono font-bold uppercase tracking-widest transition-all ${
                item.active 
                  ? 'bg-primary text-primary-foreground shadow-neon translate-x-2' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-card hover:translate-x-1'
              }`}
            >
              {item.icon === 'grid' && <IconGrid />}
              {item.icon === 'file' && <IconFile />}
              {item.icon === 'bot' && <IconBot />}
              {item.icon === 'cards' && <IconCards />}
              {item.label}
            </button>
          ))}
        </nav>
        
        <div className="px-4 mt-8 pt-8 border-t border-border/20">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-card border-none flex items-center justify-center text-foreground font-display font-black text-xl shadow-sm -rotate-3 hover:rotate-0 transition-transform cursor-pointer">
              {initials}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-mono font-bold text-sm truncate uppercase tracking-widest">{user?.name ?? 'Anonymous'}</p>
              <p className="text-xs font-mono text-primary uppercase tracking-widest mt-1 opacity-80">Access LVL 3</p>
            </div>
          </div>
          <StickerTooltip text="Terminate Session">
            <button
              type="button"
              onClick={handleLogout}
              className="mt-6 w-full text-left text-xs font-mono font-bold text-muted-foreground hover:text-destructive uppercase tracking-widest transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
              Sign out
            </button>
          </StickerTooltip>
        </div>
      </aside>

      {/* Main Content Areas */}
      <div className="flex-1 flex flex-col min-w-0 bg-background">
        <header className="px-10 py-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <h1 className="text-5xl md:text-6xl font-display font-black uppercase tracking-tighter italic leading-none">
              Command <span className="text-primary tracking-tighter opacity-80 mix-blend-screen">Center</span>
            </h1>
          </div>
          
          <StickerTooltip text="Initialize AI sequence">
             <button
               type="button"
               className="bg-foreground text-background font-display font-bold py-4 px-8 rounded-xl uppercase tracking-widest transition-all shrink-0 hover:bg-foreground/90 active:translate-y-[2px] active:translate-x-[2px] shadow-sm transform -rotate-1 origin-bottom"
             >
               + New Extraction
             </button>
          </StickerTooltip>
        </header>

        <main className="flex-1 px-10 pb-16 space-y-16 overflow-y-auto">
          {/* Upload Section */}
          <section className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none text-9xl font-display font-black uppercase">
               DATA
            </div>
            
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-primary mb-6 flex items-center gap-3">
              <span className="w-1 h-3 bg-primary skew-x-12" aria-hidden />
              Ingest Materials
            </h2>
            
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-3xl p-16 flex flex-col items-center justify-center gap-6 transition-all relative overflow-hidden z-10 ${
                isDragging ? 'border-primary bg-primary/10' : 'border-border/40 bg-card hover:border-primary/50'
              }`}
            >
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-2 shadow-inner">
                <IconCloud />
              </div>
              <p className="text-sm font-mono font-bold uppercase tracking-widest text-foreground text-center">
                Drag & Drop Intelligence
              </p>
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                Payload Limit: 50MB (PDF, DOCX, TXT)
              </p>
              
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.docx,.txt"
                multiple
                className="hidden"
              />
              <button
                type="button"
                onClick={handleBrowse}
                className="mt-4 bg-transparent border-2 border-primary text-primary font-display font-bold py-3 px-8 rounded-xl uppercase tracking-widest hover:bg-primary hover:text-primary-foreground hover:shadow-neon transition-all active:translate-y-[2px]"
              >
                Scan Local Systems
              </button>
            </div>
          </section>

          {/* Recent Uploads */}
          <section>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-primary mb-6 flex items-center gap-3">
              <span className="w-1 h-3 bg-secondary skew-x-12" aria-hidden />
              Active Payloads
            </h2>
            
            <div className="grid grid-cols-1 gap-6">
               {recentUploads.map((row, i) => (
                  <div key={i} className="bg-card p-6 md:p-8 rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm border border-border/10">
                     <div className="flex items-center gap-6 md:w-5/12">
                        {/* Chip for Type */}
                        <div className="bg-secondary/10 text-secondary font-mono text-xs font-bold px-3 py-1.5 rounded-full tracking-widest uppercase">
                           {row.type}
                        </div>
                        <div className="min-w-0">
                           <p className="font-sans font-semibold text-foreground truncate">{row.fileName}</p>
                           <p className="font-mono text-xs text-muted-foreground mt-1 tracking-wider uppercase">{row.date}</p>
                        </div>
                     </div>
                     
                     <div className="md:w-3/12 w-full flex flex-col gap-2">
                         <div className="flex justify-between items-center px-1">
                            <span className={`font-mono text-xs font-bold uppercase tracking-widest ${row.status === 'PROCESSED' ? 'text-accent' : 'text-primary'}`}>
                               {row.status}
                            </span>
                            <span className="font-mono text-xs text-muted-foreground">{row.progress}%</span>
                         </div>
                         <DripProgressBar progress={row.progress} />
                     </div>
                     
                     <div className="md:w-2/12 flex justify-end w-full md:w-auto">
                        <button
                           type="button"
                           disabled={row.action === 'STANDBY'}
                           className={`font-mono text-xs font-bold uppercase tracking-widest transition-all ${
                              row.action === 'STANDBY' 
                                 ? 'text-muted-foreground cursor-not-allowed opacity-50' 
                                 : 'text-foreground hover:text-primary active:translate-y-[1px]'
                           }`}
                        >
                           {row.action}
                        </button>
                     </div>
                  </div>
               ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Dashboard
