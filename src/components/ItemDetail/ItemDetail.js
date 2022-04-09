import {useState} from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({name, price, img, stock, description}) => {

    const [quantity, setQuantity] = useState (0)

    const handleOnAdd = (count) => {
        alert('se agrego el producto al carrito '+ count)
        setQuantity(count)
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
                </div>
                <div>
                    { quantity === 0 ? <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/> : <button>Ir al carrito</button>}
                </div>
            </div>
    )
}



export default ItemDetail