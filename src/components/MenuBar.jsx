import { useState } from "react";
import { IoMdMenu, IoIosCloseCircle } from "react-icons/io";

export default function MenuBar() {
    const [path, setPath] = useState('/')
    const [open, setOpen] = useState(false);

    const linkClass = (p) => `block text-gray-600 px-4 py-2 font-semibold ${path === p ? 'bg-yellow-600 hover:bg-yellow-400 hover:text-amber-700' : 'hover:bg-yellow-400 hover:text-amber-700'}`

    return (
        <div className="relative md:hidden text-white">
            {/* Botón Hamburguesa */}
                <button
                onClick={() => setOpen(!open)}
                className="p-2 rounded-lg hover:bg-gray-100 focus:outline-none transition"
                aria-label="Toggle Menu">
                    {open ? <IoIosCloseCircle className="w-6 h-6" /> : <IoMdMenu className="w-6 h-6" />}
                </button>

                {/* Menú desplegable */}
                {open && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg overflow-hidden z-50 animate-fadeIn">
                    <ul className="flex flex-col">
                        <li> <a href="/" className={linkClass("/")}> Inicio </a> </li>
                        <li> <a href="/about" className={linkClass("/about")}> Nosotros </a> </li>
                        <li> <a href="/contact" className={linkClass("/contact")}> Contacto </a> </li>
                    </ul>
                </div>
            )}
        </div>
    );
}