import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import { Link} from 'react-router-dom'
function NavBar(){
    return <>
        <nav className ="container" >
            <div className='subContainer'>
                <h2 className ="menu">FLEXRAPPI</h2>
                <p className ="paragraphOne">Tu comida rapida más veloz que nunca</p>
                <div className="containerBtn2">
                    <Link to='/'className ="buttonOne">Inicio</Link>
                    <p className ="buttonTwo">Sobre nosotros</p>
                </div>  
            </div>
            <div className="containerBtnCart">
                <CartWidget/>
                <div className="containerBtn1">
                    <Link to= '/type/restaurantes' className='btnCat'>Hamburguesas</Link>
                    <Link to='/type/bebidas' className='btnCat'>Pizzas/Empanadas</Link>
                    <Link to='/type/supermercado' className='btnCat'>Bebidas</Link>
                    <Link to='/type/farmacia'className='btnCat'>Otros</Link>
                </div>
            </div>
            
        </nav>
        
        
    </>
}

export default NavBar;
