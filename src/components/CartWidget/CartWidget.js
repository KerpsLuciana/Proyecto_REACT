import Context from "../../context/Context";
import {useContext} from 'react'

function CartWidget () {
    const {getQuantity} = useContext(Context)
    return (
        <div className="containerImg2">
            <img className="imgCarrito" src="../img/carrito2.png" />
            { getQuantity() }
        </div>
    )
}

export default CartWidget;