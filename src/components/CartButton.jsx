import { useCart } from './state/useCart.jsx'


export default function CartButton() {
    const { items } = useCart()
    const count = items.reduce((s, i) => s + i.qty, 0)
    return (
        <button className="relative inline-flex items-center px-3 py-2 border rounded-md" aria-label="Carrito">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
            </svg>
            {count > 0 && (
                <span className="absolute -top-1 -right-1 bg-rena-orange text-white rounded-full text-xs px-1">{count}</span>
            )}
        </button>
    )
}