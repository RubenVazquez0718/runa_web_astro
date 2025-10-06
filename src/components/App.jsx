import React, { useEffect, useState } from 'react'
import Header from './sections/Header.jsx'
import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import Contact from '../pages/Contact.jsx'
import Footer from './sections/Footer.jsx'
import CartProvider from './state/CartProvider.jsx'

export default function App() {
    // guardamos los módulos de react-router-dom sólo después de importarlos en el cliente
    const [routerModules, setRouterModules] = useState(null)

    useEffect(() => {
        let mounted = true
        // import dinámico: solo corre en cliente, evita errores en SSR
        import('react-router-dom').then(mod => {
            if (!mounted) return
            setRouterModules({
                BrowserRouter: mod.BrowserRouter,
                Routes: mod.Routes,
                Route: mod.Route,
            })
        }).catch(err => {
            console.error('No se pudo cargar react-router-dom (cliente):', err)
        })
        return () => { mounted = false }
    }, [])

    // si routerModules está listo, usamos BrowserRouter; si no, mostramos Home (fallback)
    let BrowserRouter, Routes, Route
    if (routerModules) {
        BrowserRouter = routerModules.BrowserRouter
        Routes = routerModules.Routes
        Route = routerModules.Route
    }

    return (
        <CartProvider>
            <div className="min-h-screen bg-white">
                {/* Header no usa useLocation() para evitar dependencias del router en SSR */}
                <Header />
                <main className="h-full">
                    {routerModules ? (
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/contact" element={<Contact />} />
                            </Routes>
                        </BrowserRouter>
                    ) : (
                        // Fallback: mostramos home en SSR / antes de que cargue el router en cliente
                        <Home />
                    )}
                </main>
                <Footer />
            </div>
        </CartProvider>
    )
}
