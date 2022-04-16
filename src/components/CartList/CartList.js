import { useContext } from "react"
import Context from "../../context/Context"
import {Link} from 'react-router-dom'

const Cart = () => {
    const {cart, clearCart, removeItem, priceGlobal} = useContext(Context)
    
    return (
        <div>
            <h2>Mi carritoo</h2>
            <ul>
                {cart.map(prod=> <li key={prod.id}>
                                    <h2> {prod.name} </h2>
                                    <p>Precio unitario: {prod.price}, Cantidad: {prod.quantity} </p>
                                    <button onClick={()=>removeItem(prod.id)}> Quitar Producto </button>
                                </li>)}
                                
            </ul>
            {cart != 0 ?<div>
                <h2>Su compra total serie de: ${priceGlobal()}</h2>
                <button onClick={clearCart}>Finalizar Compra</button>
            </div> :    
            <div> 
                <p >El carrito se encuentra vacio</p>
                <Link  to='/'>Ir a la tienda</Link>
            </div>}
            <button onClick={clearCart}> vaciar carrito </button>
        </div>
    )
} 

export default Cart