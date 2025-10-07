import { useEffect, useState } from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { PiWhatsappLogoFill } from "react-icons/pi";

export default function Footer() {
    // obtenemos la ruta actual solo en el cliente (useEffect) para marcar active links
    const [path, setPath] = useState('/')

    useEffect(() => {
        if (typeof window === 'undefined') return
        setPath(window.location.pathname || '/')
        const onPop = () => setPath(window.location.pathname || '/')
        window.addEventListener('popstate', onPop)
        return () => window.removeEventListener('popstate', onPop)
    }, [])

    const linkClassOne = "list-item text-white font-semibold cursor-pointer min-w-28 rounded-lg px-4 hover:underline hover:bg-yellow-400 hover:text-amber-700"
    const linkClassTwo = "flex items-center text-white font-semibold cursor-pointer min-w-36 rounded-lg px-4 hover:underline hover:bg-yellow-400 hover:text-amber-700"
    
    return (
        <section className="grid xs:grid-cols-3 grid-cols-1 bg-gray-700 text-white text-center py-2 xs:py-4">
            <div className="flex flex-col space-y-2 px-4 py-3 xs:p-4 font-semibold items-center">
                <a href="/" className={linkClassOne}> Inicio </a>
                <a href="/about" className={linkClassOne}> Nosotros </a>
                <a href="/contact" className={linkClassOne}> Contacto </a>
            </div>

            <div className="flex flex-col space-y-2 px-4 py-3 xs:p-4 items-center">
                <div className='text-lg font-semibold'> Síguenos en nuestras redes sociales </div>
                
                <div className="flex flex-row px-4">
                    <a href="https://www.facebook.com/" className={linkClassTwo}> <FaFacebook className='mr-4'/> Facebook </a>
                </div>
                <div className="flex flex-row px-4">
                    <a href="/about" className={linkClassTwo}> <FaYoutube className='mr-4'/> Youtube </a>
                </div>
                <div className="flex flex-row px-4">
                    <a href="/contact" className={linkClassTwo}> <AiFillInstagram className='mr-4'/> Instagram </a>
                </div>
            </div>

            <div className="flex flex-col px-4 py-2 xs:p-4 space-y-2 xs:space-y-8">
                <div className='text-lg font-semibold'> ¡Contactanos! </div>
                <div className='flex flex-col text-center'>
                    <div className='text-sm'> Envíanos un correo al siguiente correo: </div>
                    <div className='text-md font-semibold'> contacto@runarefacciones.com </div>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='text-sm'> Puedes contactarnos directamente al Whatsapp: </div>
                    <div className='text-md font-semibold flex items-center'>
                        <PiWhatsappLogoFill className='mr-4'/> (993) 721 2616
                    </div>
                    <div className='text-md font-semibold flex items-center'>
                        <PiWhatsappLogoFill className='mr-4'/> (993) 428 9820
                    </div>
                </div>
            </div>
        </section>
    )
}