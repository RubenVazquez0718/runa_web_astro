import { useEffect, useState } from 'react'
import MenuBar from '../MenuBar'

export default function Header(){
    // obtenemos la ruta actual solo en el cliente (useEffect) para marcar active links
    const [path, setPath] = useState('/')

    useEffect(() => {
        if (typeof window === 'undefined') return
        setPath(window.location.pathname || '/')
        const onPop = () => setPath(window.location.pathname || '/')
        window.addEventListener('popstate', onPop)
        return () => window.removeEventListener('popstate', onPop)
    }, [])

    const linkClass = (p) => `xs:flex hidden px-3 py-1 rounded-lg font-semibold ${path === p ? 'bg-yellow-600 hover:bg-yellow-400 hover:text-amber-700' : 'hover:bg-yellow-400 hover:text-amber-700'}`

    return (
        <header className="bg-gray-600 text-white">
            <div className="@container mx-auto flex items-center justify-between px-4 py-1">
                <a href="/" className="flex items-center gap-3">
                    <img src="/assets/runa_logo.svg" alt="RUNA" className="h-12 w-auto" />
                    <div>
                        <div className="text-xl font-bold tracking-wider">RUNA</div>
                        <div className="text-xs tracking-wider">Refacciones</div>
                    </div>
                </a>
                <nav className="flex items-center gap-4">
                    {/* usamos <a> normales para evitar hooks de router en SSR; después el router cliente manejará navegación */}
                    <a href="/" className={linkClass('/')}> Inicio </a>
                    <a href="/about" className={linkClass('/about')}> Nosotros </a>
                    <a href="/contact" className={linkClass('/contact')}> Contacto </a>
                    <MenuBar />
                </nav>
            </div>
        </header>
    )
}