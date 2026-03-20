import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

interface NavbarProps {
  activePage?: 'home' | 'features' | 'how-it-works' | 'pricing' | 'none'
}

export default function Navbar({ activePage }: NavbarProps) {
  const linkClass = (page: string) =>
    `font-headline font-black tracking-tight uppercase transition-transform ${
      activePage === page
        ? 'text-fuchsia-700 underline decoration-4 decoration-lime-400'
        : 'text-zinc-600 dark:text-zinc-400 hover:scale-105 hover:text-fuchsia-600'
    }`

  return (
    <nav className="bg-white/60 dark:bg-zinc-950/60 backdrop-blur-xl shadow-[4px_4px_0px_0px_rgba(164,0,164,0.1)] sticky top-0 z-[60] flex justify-between items-center w-full px-6 py-4 max-w-full">
      <Link to="/" className="text-2xl font-black italic tracking-tighter text-fuchsia-700 dark:text-fuchsia-400 rotate-[-2deg] font-headline">
        ExamPrep
      </Link>
      <div className="hidden md:flex items-center gap-8">
        <Link className={linkClass('home')} to="/">Home</Link>
        <a className={linkClass('features')} href={activePage === 'home' ? '#toolkit' : '/#toolkit'}>Features</a>
        <Link className={linkClass('how-it-works')} to="/how-it-works">How It Works</Link>
        <Link className={linkClass('pricing')} to="/pricing">Pricing</Link>
      </div>
      <Button asChild size="default">
        <Link to="/auth">Get Started Free</Link>
      </Button>
    </nav>
  )
}
