import { useState, useEffect } from "react";

const slides = [
    {
        id: 1,
        titulo: "RUNA REFACCIONES",
        mensaje: "En RUNA Refaccionaria, ofrecemos refacciones y soluciones confiables para maquinaria pesada, grúas y equipos industriales, garantizando calidad, seguridad y respaldo a nuestros clientes en todo México.",
        imagen: "/assets/images/carrousel_1.png",
        textoBoton: "CONOCENOS"
    },
    {
        id: 2,
        titulo: " CALIDAD Y SEGURIDAD",
        mensaje: "Nos comprometemos a brindar un servicio eficiente y profesional, apoyando la continuidad de las operaciones de nuestros clientes con productos duraderos y atención personalizada.",
        imagen: "/assets/images/carrousel_2.png",
        textoBoton: "PRODUCTOS"
    },
    {
        id: 3,
        titulo: "COMPROMISO Y RAPIDEZ",
        mensaje: "Para nosotros es importa tu tiempo, por lo que nos comprometemos en mantener entregas rápidas.",
        imagen: "/assets/images/carrousel_3.png",
        textoBoton: "CONTACTANOS"
    },

];

export default function Banner() {
    const [current, setCurrent] = useState(0);
    // ⏱ Cambio automático cada 5 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-114 w-full overflow-hidden flex items-center justify-center text-white">
            {slides.map((slide, index) => (
                <div 
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
                        index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(43,43,43,0.88), rgba(213,121,42,0.6)), url(${slide.imagen})`,
                        backgroundSize: "cover", backgroundPosition: "center",
                    }}>

                    {/* Contenido */}
                    <div className="h-full flex flex-col justify-center items-center px-6 md:px-20">
                        <h2 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight"> {slide.titulo} </h2>
                        <p className="text-lg md:text-xl text-gray-200 max-w-xl mb-6"> {slide.mensaje} </p>
                        <button className="bg-[#d5792a] hover:bg-[#b85f1f] px-6 py-3 rounded-xl font-semibold transition-all shadow-lg">
                            {slide.textoBoton}
                        </button>
                    </div>
                </div>
            ))}
        </section>
    )
}