import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import { Link} from 'react-router-dom'
function NavBar(){
    return <>
        <nav className ="container" >
            <div className='subContainer'>
                <h2 className ="menu">FLEXRAPPI</h2>
                <p className ="paragraphOne">Alcanzando tus platos favoritos desde 2018</p>
                <div className="containerBtn2">
                    <Link to='/'className ="buttonOne">Inicio</Link>
                    <button className ="buttonTwo">Sobre nosotros</button>
                </div>  
            </div>
            <div className="containerBtnCart">
                <CartWidget/>
                <div className="containerBtn1">
                    <Link to= '/type/restaurantes' className='btnCat'>Restaurantes</Link>
                    <Link to='/type/bebidas' className='btnCat'>Bebidas</Link>
                    <Link to='/type/supermercado' className='btnCat'>Supermercados</Link>
                    <Link to='/type/farmacia'className='btnCat'>Farmacias</Link>
                </div>
            </div>
            
        </nav>
        
        
    </>
}

export default NavBar;
