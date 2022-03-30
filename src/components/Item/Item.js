import './Item.css';
import {Link} from 'react-router-dom';

function Item ({name,price,img, id}){

    return(
        <div className="card">
            <div className='containerImg'>
                <img src={img}  className='img'/>
            </div>
                <h3 className='cardTitle'>{name}</h3>
                <p className='cardPrice'>{price}</p>
            <Link to={`/Item/${id}`} className='cardBtn'>Mas info</Link>
        </div>

    )
}
export default Item