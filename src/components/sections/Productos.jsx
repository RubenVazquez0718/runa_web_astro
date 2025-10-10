
export default function Productos() {
    const maquinarias = [
        { name: "Excavadoras", img: "/assets/productos/excavadora.png" },
        { name: "Retroexcavadoras", img: "/assets/productos/retro.png" },
        { name: "Cargadores frontales", img: "/assets/productos/cargador_frontal.png" },
        { name: "Motoniveladoras", img: "/assets/productos/motoniveladora.png" },
        { name: "Grúas", img: "/assets/productos/gruas.png" },
        { name: "Bulldozers", img: "/assets/productos/bulldozer.png" },
    ];

    return (
        <section id="productos" className="py-10 bg-white">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-3"> Refacciones para maquinaria pesada </h2>
                <p className="text-gray-600 mb-6">
                    Trabajamos con piezas compatibles con marcas como <b>Caterpillar</b>, <b> Perkins</b>, <b>Kubota</b>, <b>Deux</b> y más.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                    {maquinarias.map((c) => (
                        <div key={c.name} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
                            <img src={c.img} alt={c.name} className="w-full h-56 object-cover" />
                            <div className="p-2">
                                <h3 className="font-semibold text-gray-800 text-lg"> {c.name} </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}