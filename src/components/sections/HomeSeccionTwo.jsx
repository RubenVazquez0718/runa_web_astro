export default function HomeSeccionTwo() {
    return (
        <section className="bg-gray-50 py-10">
            <div className="max-w-6xl mx-auto px-6 space-y-20">
                {/* 1️⃣ QUIÉNES SOMOS */}
                <div className="flex flex-col md:flex-row items-center gap-10">
                    {/* Texto */}
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 border-l-4 border-red-500 pl-3 inline-block"> Conócenos </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Somos una empresa mexicana fundada por un emprendedor con una visión clara: ofrecer refacciones de alta calidad, garantía y confianza para maquinaria pesada en todo el país.
                            Nacimos con el propósito de brindar soluciones eficientes y seguras, respaldadas por un servicio comprometido con el crecimiento de nuestros clientes. <br />

                            Comenzamos nuestras operaciones en Villahermosa, Centro, Tabasco, con la meta de expandirnos a cada rincón de México y, con el tiempo, llevar la fuerza y calidad de nuestras refacciones al mundo entero.
                            En RENA creemos que el trabajo bien hecho, la atención personalizada y la confianza son la base para construir relaciones duraderas con cada cliente.
                        </p>
                    </div>

                    {/* Imagen */}
                    <div className="flex-1">
                        <img src="/assets/images/section_2_one.png" alt="Almacen" className="rounded-2xl shadow-lg object-cover w-full h-80" />
                    </div>
                </div>

                {/* 2️⃣ MISIÓN */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-10">
                    {/* Texto */}
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-3xl font-bold text-gray-800 mb-4 border-l-4 border-orange-500 pl-3 inline-block"> Nuestra Misión </h3>
                        <p className="text-gray-600 leading-relaxed">
                            En <span className="font-semibold text-blue-700">RENA Refaccionaria</span>, 
                            ofrecemos refacciones y soluciones confiables para maquinaria pesada, grúas y equipos industriales, 
                            garantizando calidad, seguridad y respaldo a nuestros clientes en todo México.
                            Nos comprometemos a brindar un servicio eficiente y profesional, 
                            apoyando la continuidad de las operaciones con productos duraderos y atención personalizada.
                        </p>
                    </div>

                    {/* Imagen */}
                    <div className="flex-1">
                        <img src="/assets/images/section_2_two.png" alt="Misión RENA" className="rounded-2xl shadow-lg object-cover w-full h-80" />
                    </div>
                </div>

                {/* 3️⃣ VISIÓN */}
                <div className="flex flex-col md:flex-row items-center gap-10">
                    {/* Texto */}
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-3xl font-bold text-gray-800 mb-4 border-l-4 border-blue-600 pl-3 inline-block"> Nuestra Visión </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Ser la refaccionaria líder en México y Latinoamérica, 
                            reconocida por su excelencia en servicio, calidad en refacciones y compromiso con la confianza del cliente.
                            Buscamos posicionarnos como una marca mexicana fuerte, 
                            capaz de competir globalmente y proveer refacciones a nivel internacional.
                        </p>
                    </div>

                    {/* Imagen */}
                    <div className="flex-1">
                        <img src="/assets/images/section_2_three.png" alt="Visión RENA" className="rounded-2xl shadow-lg object-cover w-full h-80" />
                    </div>
                </div>
            </div>
        </section>
    )
}
