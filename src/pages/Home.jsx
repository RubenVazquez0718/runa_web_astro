import Banner from '../components/sections/Banner.jsx'
import InfoEmpresa from '../components/sections/InfoEmpresa.jsx'
import CarrouselComercial from '../components/sections/CarrouselComercial.jsx'
import Productos from '../components/sections/Productos.jsx'
import Cobertura from '../components/sections/Cobertura.jsx'
import Garantia from '../components/sections/Garantia.jsx'

export default function Home() {
    return (
        <section>
            <Banner />
            <InfoEmpresa />
            <CarrouselComercial />
            <Productos />
            <Garantia />
            <Cobertura />
        </section>
    )
}