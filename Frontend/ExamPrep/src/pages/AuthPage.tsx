import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { signin, signup } from '@/api/auth'
import { useAuth } from '@/context/AuthContext'

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { setUser } = useAuth()

  useEffect(() => {
    document.documentElement.classList.add('light')
    return () => document.documentElement.classList.remove('light')
  }, [])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    try {
      if (isLogin) {
        const res = await signin(email, password)
        if (!res.ok) {
          const bodyStr = typeof res.body === 'string' ? res.body : JSON.stringify(res.body)
          throw new Error(`Login Failed (${res.status}): ${bodyStr}`)
        }
        if (!res.data?.access_token) {
          throw new Error('No access token received from server')
        }
        setUser({ 
          name: 'User', 
          email: email,
          access_token: res.data.access_token,
          refresh_token: res.data.refresh_token
        })
        navigate('/dashboard')
      } else {
        const signupPayload = { 
          id: crypto.randomUUID(),
          name, 
          email, 
          password,
          disabled: false,
          is_verified: true // Try to bypass OTP if backend supports it
        }
        const resR = await signup(signupPayload)
        if (!resR.ok) {
          const bodyStr = typeof resR.body === 'string' ? resR.body : JSON.stringify(resR.body)
          throw new Error(`Signup Failed (${resR.status}): ${bodyStr}`)
        }
        setUser({ 
          name, 
          email,
          access_token: resR.data?.access_token,
          refresh_token: resR.data?.refresh_token
        })
        navigate('/upload')
      }
    } catch (err: unknown) {
      console.error('Auth Error:', err)
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('An unexpected error occurred')
      }
    }
  }

  return (
    <div className="bg-surface font-body text-on-background selection:bg-primary-container selection:text-on-primary-container min-h-screen overflow-x-hidden">
      <main className="relative min-h-screen flex items-center justify-center pt-12 pb-12 px-6">
        {/* Back to Home Arrow */}
        <Link to="/" className="absolute top-8 left-8 z-50 group flex items-center gap-3 text-primary hover:text-primary-dim transition-colors">
          <svg className="w-10 h-10 stroke-current stroke-[3] fill-transparent transform group-hover:-translate-x-2 transition-transform" viewBox="0 0 100 100">
            <path d="M 40 20 L 10 50 L 40 80 M 10 50 L 90 50" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 40 20 L 10 50 L 40 80 M 10 50 L 90 50" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 blur-[2px] translate-x-1" />
          </svg>
          <span className="font-headline font-black uppercase tracking-widest text-sm drop-shadow-[2px_2px_0px_#beee00]">RETURN</span>
        </Link>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"></div>
          <div className="absolute top-1/2 -right-20 w-80 h-80 bg-tertiary/10 rounded-full blur-[100px]"></div>
          <div className="absolute top-40 left-[15%] opacity-20 rotate-12">
            <span className="material-symbols-outlined text-8xl text-primary" data-icon="star">star</span>
          </div>
          <div className="absolute bottom-40 right-[10%] opacity-20 -rotate-12">
            <span className="material-symbols-outlined text-9xl text-tertiary" data-icon="bolt">bolt</span>
          </div>
          
          {/* GenZ Words & Graffiti */}
          <div className="absolute top-20 right-[25%] opacity-15 rotate-[-15deg] font-headline font-black text-5xl text-primary tracking-widest">
            NO CAP.
          </div>
          <div className="absolute bottom-20 left-[15%] opacity-20 rotate-[25deg] font-headline font-black text-6xl text-secondary">
            W PREP
          </div>
          <div className="absolute top-1/2 left-[5%] opacity-10 rotate-[90deg] font-label font-bold text-4xl text-tertiary tracking-widest">
            BASED
          </div>
          <svg className="absolute bottom-[25%] right-[20%] w-32 h-32 opacity-20 stroke-primary stroke-[4px] fill-transparent" viewBox="0 0 100 100">
             <path d="M 10 50 Q 25 10 50 50 T 90 50" />
             <path d="M 80 40 L 90 50 L 80 60" />
          </svg>
        </div>

        <div className="relative z-10 w-full max-w-md">
          <div className="mb-12 text-center relative flex flex-col items-center">
            <div className="flex items-center gap-2 mb-6 justify-center">
              <span className="material-symbols-outlined text-primary text-3xl" data-icon="menu_book">menu_book</span>
              <h1 className="font-headline font-black tracking-tighter uppercase italic -rotate-1 text-3xl text-primary drop-shadow-[0_2px_rgba(164,0,164,0.3)]">ExamPrep</h1>
            </div>
            <h2 className="font-headline font-black text-6xl md:text-7xl tracking-tighter text-on-background mb-2 uppercase italic leading-none">
              {isLogin ? <><span className="block">WELCOME</span><span className="block">BACK</span></> : <><span className="block">JOIN THE</span><span className="block text-primary">RIOT</span></>}
            </h2>
            <div className="graffiti-underline w-48 md:w-64 -mt-2 mx-auto"></div>
            <div className="absolute -top-4 right-4 md:-right-4 animate-pulse">
              <span className="material-symbols-outlined text-tertiary text-4xl" data-icon="kid_star" style={{ fontVariationSettings: "'FILL' 1" }}>kid_star</span>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-8 md:p-10 rounded-xl shadow-[16px_16px_0px_rgba(45,47,47,0.05)] border-2 border-outline-variant/10 relative">
            {error && (
              <div className="bg-error-container text-on-error p-4 mb-6 rounded-lg font-mono text-sm border-2 border-error">
                {error}
              </div>
            )}
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              {!isLogin && (
                <div className="space-y-2">
                  <label className="font-label text-sm font-bold uppercase tracking-wider text-on-surface-variant flex items-center gap-2" htmlFor="name">
                    <span className="material-symbols-outlined text-sm" data-icon="person_outline">person_outline</span>
                    Full Name
                  </label>
                  <div className="relative">
                    <input 
                      className="w-full bg-surface-container-low border-2 border-outline/20 p-4 rounded-lg font-body focus:outline-none focus:border-tertiary focus:ring-4 focus:ring-tertiary/20 transition-all placeholder:text-outline/50 irregular-border disabled:opacity-50" 
                      id="name" 
                      type="text" 
                      value={name} 
                      onChange={e => setName(e.target.value)} 
                      placeholder="Your Name" 
                      required 
                    />
                  </div>
                </div>
              )}
              <div className="space-y-2">
                <label className="font-label text-sm font-bold uppercase tracking-wider text-on-surface-variant flex items-center gap-2" htmlFor="email">
                  <span className="material-symbols-outlined text-sm" data-icon="alternate_email">alternate_email</span>
                  Email Address
                </label>
                <div className="relative">
                  <input 
                    className="w-full bg-surface-container-low border-2 border-outline/20 p-4 rounded-lg font-body focus:outline-none focus:border-tertiary focus:ring-4 focus:ring-tertiary/20 transition-all placeholder:text-outline/50 irregular-border disabled:opacity-50" 
                    id="email" 
                    type="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    placeholder="scholar@urban.com" 
                    required 
                  />
                </div>
              </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="font-label text-sm font-bold uppercase tracking-wider text-on-surface-variant flex items-center gap-2" htmlFor="password">
                      <span className="material-symbols-outlined text-sm" data-icon="lock_open">lock_open</span>
                      Password
                    </label>
                    {isLogin && <a className="font-label text-xs font-bold text-primary hover:text-primary-dim relative drip-effect" href="#">Forgot Password?</a>}
                  </div>
                  <div className="relative">
                    <input 
                      className="w-full bg-surface-container-low border-2 border-outline/20 p-4 rounded-lg font-body focus:outline-none focus:border-tertiary focus:ring-4 focus:ring-tertiary/20 transition-all placeholder:text-outline/50 irregular-border" 
                      id="password" 
                      type="password" 
                      value={password} 
                      onChange={e => setPassword(e.target.value)} 
                      placeholder="••••••••" 
                      required 
                    />
                  </div>
                </div>

              <div className="pt-4 relative">
                <div className="absolute -top-4 -right-4 rotate-12 text-primary/40">
                  <span className="material-symbols-outlined text-3xl" data-icon="crown" style={{ fontVariationSettings: "'FILL' 1" }}>crown</span>
                </div>
                <button className="w-full bg-tertiary-fixed hover:bg-tertiary text-on-tertiary-fixed font-headline font-black text-xl py-5 rounded-xl shadow-[8px_8px_0px_#2d2f2f] active:translate-y-1 active:translate-x-1 active:shadow-none transition-all uppercase tracking-tight flex items-center justify-center gap-3" type="submit">
                  {isLogin ? 'LOG IN' : 'GET STARTED'}
                  <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
                </button>
              </div>
            </form>

            <div className="mt-8 pt-8 border-t border-outline-variant/10">
              <p className="text-center font-label text-xs font-bold text-on-surface-variant uppercase mb-6">Or continue with</p>
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 p-3 bg-surface border-2 border-outline/10 rounded-lg font-label text-sm font-bold hover:bg-surface-container-high transition-colors">
                  <img alt="" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwHGzd2RUT0EfKK93_ng-K09s4vKUEp_oBCVScpffLjIUFvgqbxNUYuiNQd7EAKsjIulsYU_riw2eK6X7WibTHIi1r6HXlflnbrBHpxSm9OkohnuOQZZnECaCz266P8e_Au6Q8aPCjhwjOH5zUHsGQH47j_miLdoLuKXcVFF8Ty6zfvdA7BQrkaaPEHOzORQskIzQHEkeYL8-icLb9dyLGQ_8QdtMqXvV9ckfcLxZnLJJqrMYmc4tluDuWXm-Sf0mMwGHxtfrUUA5w" />
                  GOOGLE
                </button>
                <button className="flex items-center justify-center gap-2 p-3 bg-surface border-2 border-outline/10 rounded-lg font-label text-sm font-bold hover:bg-surface-container-high transition-colors">
                  <img alt="" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPNgwq9C_J5culqJrsPBfYi6-TaeOCz6i424-sB8bCWHxn6T_O2O3ai1M6V8ac9xHb4qec6xAEXuJwDzx51fmUQwVc_7vXtY6qEsGtHCiDlF-tWoT9uBaTbI3E07EKdFt6Ppds6lECnQrKgsf26fFOYsYYUEwbKPTppvf7e5OHjauH5dsUHbJ4EP1x-kG89qPJ4ichISC5VJ9BF6tE6vF1qNhP1NkAUORVGs5tEGrY_IAG3NMfG7WyiNJvWiqazlmRG2KhFtWl4ph4" />
                  APPLE
                </button>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center relative z-20">
            <p className="font-body text-on-surface-variant">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button 
                type="button" 
                className="font-headline font-black text-primary hover:text-primary-dim ml-1 relative group cursor-pointer" 
                onClick={() => { setIsLogin(!isLogin); setError(''); }}
              >
                {isLogin ? 'Sign Up' : 'Log In'}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </button>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AuthPage
