export default function Contacto() {
    return (
        <section id="contacto" className="py-20 bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-6">Contáctanos</h2>
                <p className="text-gray-300 mb-8"> ¿Necesitas una cotización o tienes dudas sobre una refacción? Nuestro equipo está listo para ayudarte. </p>

                <div className="space-y-3">
                    <p>📍 Ubicación: Estado de México (operación nacional)</p>
                    <p>📧 contacto@runarefacciones.mx</p>
                    <p> +52 55 1234 5678</p>
                    <p>📞 +52 55 1234 5678</p>
                </div>

                <div className="mt-8">
                    <a href="https://wa.me/525512345678" target="_blank" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold" >
                        Enviar mensaje por WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}