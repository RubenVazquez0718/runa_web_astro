const logos = [
    "/assets/logos/caudal.jpeg",
    "/assets/logos/codexart.png",
    "/assets/logos/cointramex.png",
    "/assets/logos/cosmoplan.jpeg",
    "/assets/logos/hl_construccion.jpg",
    "/assets/logos/hl.jpg",
    "/assets/logos/papernad.png",
    "/assets/logos/wolfcar.jpeg",
];

export default function CarrouselComercial() {
    return (
        <section className="py-10 bg-gray-500 overflow-hidden">
            <div className="max-w-9/10 mx-auto">
                <h2 className="text-center text-xl md:text-2xl font-semibold mb-6 text-white"> Grupo comercial CODEX - Aliados comerciales </h2>
                <div className="relative flex overflow-hidden" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
                    <div className={`flex gap-12 min-w-full animate-scroll`}>
                        {/* Duplicamos las imágenes para crear el efecto infinito */}
                        {[...logos, ...logos].map((src, i) => (
                            <div key={i} className="flex-shrink-0 w-32 h-20 flex items-center justify-center">
                                <img src={src} alt={`Logo ${i}`} className="object-contain w-full h-full grayscale hover:grayscale-0 transition duration-300" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
