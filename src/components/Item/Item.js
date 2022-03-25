import './Item.css';
import ItemCount from '../ItemCount/ItemCount';

function Item ({name,price,img,stock}){
    const onAdd = (quantity) => {
        console.log(quantity)
      }
    return(
        <div className="card">
            <div className='containerImg'>
                <img src={img}  className='img'/>
            </div>
            
                <h3 className='cardTitle'>{name}</h3>
                <p className='cardPrice'>{price}</p>
            <div>
            <ItemCount initial={1} stock={stock} onAdd={onAdd}/>
            </div>
            <button className='cardBtn'>Mas Info</button>
        </div>

    )
}
export default Item