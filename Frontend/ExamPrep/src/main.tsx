import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home.tsx'
import AuthPage from './pages/AuthPage.tsx'
import Dashboard from './pages/Dashboard.tsx'
import HowItWorks from './pages/HowItWorks.tsx'
import Pricing from './pages/Pricing.tsx'
import { AuthProvider } from './context/AuthContext'
import { ProtectedRoute } from './components/ProtectedRoute'
import LoadingScreen from './components/LoadingScreen'
import { preloadImages } from './lib/preloader'

const ASSETS_TO_PRELOAD = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC8y5wZCfVSmJiTeqDB8SAMEaHk4W1VhWPxCAIlLYwVjnpHyyls0aJ1GvEczlCtW9oibrXv4p4cWK4RB3aEeUqdHQnLgd5i-Ypr0T7Fw2T3rJPXfBfTwUaF866aCBORAqFp5t4Hz5TlHCm0DRR8ygy33T5SwiAREbKcXKa9zWjDppRXPeISXfq8L3YyqA4E_j5_CkpqgFgsUrezeU56u7f6u_-dCRRSPMnVyucwf_7s-K1vVbUbU4fy0IRpVCaQNPFqzTykbTJJDRUk',
  '/output-onlinegiftools.gif',
  '/step1-upload.png',
  '/step2-vibe.png',
  '/step3-listen.png',
  '/step4-test.png',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCwHGzd2RUT0EfKK93_ng-K09s4vKUEp_oBCVScpffLjIUFvgqbxNUYuiNQd7EAKsjIulsYU_riw2eK6X7WibTHIi1r6HXlflnbrBHpxSm9OkohnuOQZZnECaCz266P8e_Au6Q8aPCjhwjOH5zUHsGQH47j_miLdoLuKXcVFF8Ty6zfvdA7BQrkaaPEHOzORQskIzQHEkeYL8-icLb9dyLGQ_8QdtMqXvV9ckfcLxZnLJJqrMYmc4tluDuWXm-Sf0mMwGHxtfrUUA5w',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAPNgwq9C_J5culqJrsPBfYi6-TaeOCz6i424-sB8bCWHxn6T_O2O3ai1M6V8ac9xHb4qec6xAEXuJwDzx51fmUQwVc_7vXtY6qEsGtHCiDlF-tWoT9uBaTbI3E07EKdFt6Ppds6lECnQrKgsf26fFOYsYYUEwbKPTppvf7e5OHjauH5dsUHbJ4EP1x-kG89qPJ4ichISC5VJ9BF6tE6vF1qNhP1NkAUORVGs5tEGrY_IAG3NMfG7WyiNJvWiqazlmRG2KhFtWl4ph4',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAp7tLW_1m86CtWsMi2a6oJNw4OdkwxmGUIRAE0GuqI5TbrX93kOgxfb8LwbrlekbBkdQXvP8VmpaR2JT1rpz4fbOP5tSQguKd3WGxIO0ZkJ1oTx1CVNVRtOUp-HjjiFeiW7G8IhbK9I2JEL1Uc6Vz93M8s-sqSHZ1PQ6zPqnDQS3XQEdY3HsVnXeGkzg2sYKNabR7Yt1cNjP6xi1NSLrLcoCY757OG73-tTDW6k0YXRb4ZR9VOzwpbHj2Oid-ECrsvFQcrcjeivbCR'
];

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Both timers and asset preloading must finish
    const timer = new Promise(resolve => setTimeout(resolve, 2500));
    const preloading = preloadImages(ASSETS_TO_PRELOAD);

    Promise.all([timer, preloading]).then(() => {
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
