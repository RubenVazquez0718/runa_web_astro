import { useCart } from './state/useCart.jsx'

export default function ProductCard({product}) {
    const { add } = useCart()
    return (
        <article className="border rounded-lg p-4 flex flex-col">
            <div className="h-36 bg-gray-100 rounded flex items-center justify-center mb-4">Imagen</div>
            <h3 className="font-semibold text-lg text-rena-charcoal">{product.title}</h3>
            <div className="mt-auto flex items-center justify-between">
                <div className="text-rena-charcoal font-bold">${product.price}</div>
                <button onClick={() => add(product)} className="px-3 py-2 rounded bg-rena-orange text-white">Agregar</button>
            </div>
        </article>
    )
}