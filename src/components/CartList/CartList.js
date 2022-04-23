import { useContext, useState } from "react"
import Context from "../../context/Context"
import {Link} from 'react-router-dom'
import { createOrdAndModStock } from "../../services/firebase/firestore"

const Cart = () => {
    const {cart, clearCart, removeItem, priceGlobal} = useContext(Context)
    const [loading, setLoading] =useState(false)

    const createOrd = () => {
        setLoading(true)

        const objOrd = {
            buyer:{
                name: 'Luciana',
                phone: '1122334455',
                email: 'luKerps@gmail.com'
            },
            items: cart,
            total: priceGlobal()
        }

        createOrdAndModStock(cart, objOrd).then(id=>{
            clearCart()
            console.log(`su orden se genero de manera exitosa ${id}`)
        }).catch((error)=>{
            console.log(error)
        }).finally(()=>{
            setLoading(false)
        })
    }
    if(loading){
        return <h2>Se esta procesando su Orden</h2>
    }
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
                <button onClick={createOrd}>Finalizar Compra</button>
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