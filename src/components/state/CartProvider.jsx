import { useReducer, createContext } from 'react'
const CartContext = createContext()

function reducer(state, action) {
    switch(action.type){
        case 'ADD': {
            const found = state.items.find(i => i.id === action.item.id)
            if(found) {
                return {...state, items: state.items.map(i => i.id === action.item.id ? {...i, qty: i.qty + 1} : i)}
            }
            return {...state, items: [...state.items, {...action.item, qty: 1}]}
        }
        case 'REMOVE':
            return {...state, items: state.items.filter(i => i.id !== action.id)}
        case 'CLEAR':
            return {...state, items: []}
        default:
            return state
    }
}

export default function CartProvider({children}) {
    const [state, dispatch] = useReducer(reducer, {items: []})
    const add = item => dispatch({type: 'ADD', item})
    const remove = id => dispatch({type: 'REMOVE', id})
    const clear = () => dispatch({type: 'CLEAR'})
    return (
        <CartContext.Provider value={{items: state.items, add, remove, clear}}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext }