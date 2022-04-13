import { useContext } from "react"
import Context from "../../context/Context"
const Cart = () => {
    const {cart, clearCart, removeItem} = useContext(Context)
    
    return (
        <div>
            <h2>Mi carritoo</h2>
            <ul>
                {cart.map(prod=> <li key={prod.id}>{prod.name} {prod.quantity} <button onClick={()=>removeItem(prod.id)}> Quitar Producto </button></li>)}
            </ul>
            <button onClick={clearCart}> vaciar carrito </button>
        </div>
    )
} 

export default Cart