import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/context/AuthContext'

interface NavbarProps {
  activePage?: 'home' | 'features' | 'how-it-works' | 'pricing' | 'none'
}

export default function Navbar({ activePage }: NavbarProps) {
  const { isAuthenticated, logout } = useAuth()

  const linkClass = (page: string) =>
    `font-headline font-black tracking-tight uppercase transition-transform ${
      activePage === page
        ? 'text-fuchsia-700 underline decoration-4 decoration-lime-400'
        : 'text-zinc-600 dark:text-zinc-400 hover:scale-105 hover:text-fuchsia-600'
    }`

  return (
    <nav className="bg-white/60 dark:bg-zinc-950/60 backdrop-blur-xl shadow-[4px_4px_0px_0px_rgba(164,0,164,0.1)] sticky top-0 z-[60] flex justify-between items-center w-full px-6 py-4 max-w-full">
      <Link 
        to={isAuthenticated ? "/dashboard" : "/"} 
        className="text-2xl font-black italic tracking-tighter text-fuchsia-700 dark:text-fuchsia-400 rotate-[-2deg] font-headline"
      >
        ExamPrep
      </Link>
      
      <div className="hidden md:flex items-center gap-8">
        {!isAuthenticated ? (
          <>
            <Link className={linkClass('home')} to="/">Home</Link>
            <a className={linkClass('features')} href={activePage === 'home' ? '#toolkit' : '/#toolkit'}>Features</a>
            <Link className={linkClass('how-it-works')} to="/how-it-works">How It Works</Link>
            <Link className={linkClass('pricing')} to="/pricing">Pricing</Link>
          </>
        ) : (
          <>
            <Link className={linkClass('dashboard')} to="/dashboard">Dashboard</Link>
            <Link className={linkClass('pricing')} to="/pricing">Pricing</Link>
          </>
        )}
      </div>

      <div className="flex items-center gap-4">
        {isAuthenticated ? (
          <Button 
            variant="outline" 
            size="sm" 
            onClick={logout}
            className="border-2 border-primary text-primary font-headline font-black hover:bg-primary hover:text-white transition-all uppercase tracking-tight"
          >
            LOGOUT
          </Button>
        ) : (
          <Button asChild size="default">
            <Link to="/auth">Get Started Free</Link>
          </Button>
        )}
      </div>
    </nav>
  )
}
