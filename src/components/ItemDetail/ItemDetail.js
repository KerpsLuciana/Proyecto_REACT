import {useState, useContext} from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import Context from "../../context/Context"
import { Link } from "react-router-dom"

const ItemDetail = ({id,name, price, img, stock, description}) => {

    const [quantity, setQuantity] = useState (0)

    const {addItem} = useContext(Context)

    const handleOnAdd = (count) => {
        setQuantity(count)
        addItem({id,name,price}, count)
    }
    return (
            <div className="cardpromociones">
                <div className="cardpromociones__img">
                    <img src={img} alt="Producto" className="card__image2" /> 
                </div>
                <div className="cardpromociones__text">
                    <h2 className="card__text2">{name}</h2>
                    <p className="card__text2">
                        {description}
                    </p>
                </div>
                <div >
                    <p>{price}</p>
                    <p>Stock disponible: {stock}</p>
                    { quantity === 0 ? <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/> : <Link to='/Cart' className='btnAdd'>Ir al carrito</Link>}
                </div>
                
            </div>
    )
}



export default ItemDetail