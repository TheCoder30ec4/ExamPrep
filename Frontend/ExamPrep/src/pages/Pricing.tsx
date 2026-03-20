import { Link } from 'react-router-dom'
import Navbar from '@/components/Navbar'

export default function Pricing() {
  return (
    <div className="bg-background font-body text-on-background selection:bg-tertiary-container selection:text-on-tertiary-container overflow-x-hidden min-h-screen scroll-smooth relative z-0">
      {/* Animated gradient background */}
      <div className="fixed inset-0 z-[-1] bg-gradient-to-br from-primary/10 via-tertiary-fixed-dim/5 to-secondary/10 animate-gradient-xy pointer-events-none"></div>

      <Navbar activePage="pricing" />

      <main className="relative min-h-screen overflow-hidden pt-12 pb-32">
        {/* Background Doodles */}
        <div className="absolute top-20 left-10 opacity-20 pointer-events-none rotate-12">
          <span className="material-symbols-outlined text-7xl text-primary" data-icon="bolt">bolt</span>
        </div>
        <div className="absolute top-60 right-20 opacity-20 pointer-events-none -rotate-12">
          <span className="material-symbols-outlined text-8xl text-tertiary" data-icon="star">star</span>
        </div>
        <div className="absolute bottom-40 left-20 opacity-20 pointer-events-none rotate-45">
          <span className="material-symbols-outlined text-6xl text-secondary" data-icon="crown">crown</span>
        </div>
        <div className="absolute top-[35%] right-[5%] opacity-10 pointer-events-none rotate-[-90deg]">
          <span className="font-headline font-black text-7xl tracking-tighter uppercase whitespace-nowrap text-primary">NO CAP</span>
        </div>
        <div className="absolute bottom-[30%] left-[3%] opacity-10 pointer-events-none rotate-[90deg]">
          <span className="font-headline font-black text-6xl tracking-tighter uppercase whitespace-nowrap text-secondary">HUSTLE</span>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 text-center mb-20 relative">
          <div className="relative inline-block mb-4">
            <div className="absolute inset-0 bg-tertiary-fixed blur-2xl opacity-40 rounded-full scale-110 -rotate-3"></div>
            <h1 className="relative font-headline font-black text-6xl md:text-8xl tracking-tight rotate-[-2deg] text-on-surface graffiti-text">
              CHOOSE YOUR <span className="text-primary">PASS</span>
            </h1>
          </div>
          <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl mx-auto">
            Scholar-ready prices for the Gen Z hustle.
          </p>
        </section>

        {/* Pricing Bento Grid */}
        <section className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: FREE SCHOLAR */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10 flex flex-col justify-between hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-75">
              <div>
                <h3 className="font-headline text-2xl font-black mb-1">FREE SCHOLAR</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-black font-headline">$0</span>
                  <span className="text-on-surface-variant font-label">/MO</span>
                </div>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-tertiary" data-icon="check_circle">check_circle</span>
                    <span className="font-body text-sm">1 PDF upload/day</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-tertiary" data-icon="check_circle">check_circle</span>
                    <span className="font-body text-sm">Standard AI explanations</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-tertiary" data-icon="check_circle">check_circle</span>
                    <span className="font-body text-sm">Snap quizzes</span>
                  </li>
                </ul>
              </div>
              <Link to="/auth" className="w-full py-4 rounded-xl border-2 border-primary text-primary font-headline font-bold uppercase tracking-wider hover:bg-primary/5 transition-colors text-center block">
                STAY FREE
              </Link>
            </div>

            {/* Card 2: PRO SCHOLAR (Featured) */}
            <div className="bg-surface-container-lowest p-8 rounded-xl ring-4 ring-tertiary-fixed shadow-2xl flex flex-col justify-between relative md:-mt-4 md:mb-4 overflow-hidden">
              {/* Most Hyped Tag */}
              <div className="absolute top-4 right-[-35px] bg-tertiary-fixed text-on-tertiary-fixed px-12 py-1 rotate-45 font-label font-bold text-[10px] tracking-widest shadow-sm">
                MOST HYPED
              </div>
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-headline text-2xl font-black text-primary">PRO SCHOLAR</h3>
                </div>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-black font-headline">$9.99</span>
                  <span className="text-on-surface-variant font-label">/MO</span>
                </div>
                {/* Illustration Mockup */}
                <div className="mb-6 rounded-lg bg-surface-container-low p-4 relative overflow-hidden">
                  <img
                    alt="Urban scholar avatar"
                    className="w-16 h-16 rounded-full border-2 border-tertiary-fixed shadow-md mb-2"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp7tLW_1m86CtWsMi2a6oJNw4OdkwxmGUIRAE0GuqI5TbrX93kOgxfb8LwbrlekbBkdQXvP8VmpaR2JT1rpz4fbOP5tSQguKd3WGxIO0ZkJ1oTx1CVNVRtOUp-HjjiFeiW7G8IhbK9I2JEL1Uc6Vz93M8s-sqSHZ1PQ6zPqnDQS3XQEdY3HsVnXeGkzg2sYKNabR7Yt1cNjP6xi1NSLrLcoCY757OG73-tTDW6k0YXRb4ZR9VOzwpbHj2Oid-ECrsvFQcrcjeivbCR"
                  />
                  <p className="text-[10px] font-label text-on-surface-variant leading-tight">"This pass literally saved my GPA." - @scholar_vibe</p>
                </div>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary" data-icon="verified">verified</span>
                    <span className="font-body text-sm font-semibold">Unlimited PDF uploads</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary" data-icon="podcasts">podcasts</span>
                    <span className="font-body text-sm">Custom Podcasts</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary" data-icon="video_library">video_library</span>
                    <span className="font-body text-sm">YouTube Summaries</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary" data-icon="description">description</span>
                    <span className="font-body text-sm">Mock Papers</span>
                  </li>
                </ul>
              </div>
              <Link to="/auth" className="w-full py-4 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed font-headline font-black uppercase tracking-wider hover:scale-95 transition-transform shadow-[0_4px_0_0_#beee00] active:translate-y-1 active:shadow-none text-center block">
                GET PRO
              </Link>
            </div>

            {/* Card 3: LEGENDARY SCHOLAR */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10 flex flex-col justify-between hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-75">
              <div>
                <h3 className="font-headline text-2xl font-black mb-1">LEGENDARY SCHOLAR</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-black font-headline">$19.99</span>
                  <span className="text-on-surface-variant font-label">/MO</span>
                </div>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary" data-icon="star">star</span>
                    <span className="font-body text-sm font-medium italic">All Pro features +</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary" data-icon="psychology">psychology</span>
                    <span className="font-body text-sm">Personalized Exam Coach</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary" data-icon="robot_2">robot_2</span>
                    <span className="font-body text-sm">1-on-1 AI Tutoring</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary" data-icon="support_agent">support_agent</span>
                    <span className="font-body text-sm">Priority Support</span>
                  </li>
                </ul>
              </div>
              <Link to="/auth" className="w-full py-4 rounded-xl bg-primary text-on-primary font-headline font-bold uppercase tracking-wider hover:bg-primary-dim transition-colors shadow-lg shadow-primary/20 text-center block">
                GO LEGENDARY
              </Link>
            </div>
          </div>
        </section>

        {/* Decorative Splatter Section Break */}
        <div className="w-full h-24 my-20 bg-primary-container relative drip-effect">
          <div className="absolute inset-0 flex items-center justify-center opacity-10 mix-blend-overlay overflow-hidden whitespace-nowrap font-headline font-black text-6xl">
            GRIND FOCUS GRIND FOCUS GRIND FOCUS GRIND FOCUS
          </div>
        </div>

        {/* FAQs / Trust Indicators */}
        <section className="max-w-4xl mx-auto px-6 mb-20">
          <h2 className="font-headline text-3xl font-black text-center mb-12 rotate-[1deg]">NO CAP, JUST VALUE</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-surface-container p-6 rounded-xl border-l-4 border-primary">
              <p className="font-headline text-sm mb-2">Can I cancel?</p>
              <p className="font-body text-sm text-on-surface-variant">Cancel anytime with one click. We aren't about that toxic ex energy.</p>
            </div>
            <div className="bg-surface-container p-6 rounded-xl border-l-4 border-tertiary">
              <p className="font-headline text-sm mb-2">Student discount?</p>
              <p className="font-body text-sm text-on-surface-variant">Our prices are already optimized for the ramen-budget life.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
