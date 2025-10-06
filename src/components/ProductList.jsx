import ProductCard from './ProductCard.jsx'

const PRODUCTS = [
    {id: 'p1', title: 'Filtro de aceite', price: 250, img: ''},
    {id: 'p2', title: 'Pastillas de freno', price: 780, img: ''},
    {id: 'p3', title: 'Amortiguador', price: 1200, img: ''},
]

export default function ProductList() {
    return (
        <section id="productos">
            <h2 className="text-2xl font-bold mb-4">Productos destacados</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {PRODUCTS.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
        </section>
    )
}