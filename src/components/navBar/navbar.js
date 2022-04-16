import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import { Link} from 'react-router-dom'
import { useContext } from "react"
import Context from "../../context/Context"

function NavBar(){
    const {getQuantity} = useContext(Context)
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
                {getQuantity()>0 && <CartWidget/>}
                <div className="containerBtn1">
                    <Link to= '/type/Hamburguesa' className='btnCat'>Hamburguesas</Link>
                    <Link to='/type/Pizza' className='btnCat'>Pizzas</Link>
                    <Link to='/type/Empanadas' className='btnCat'>Empandas</Link>
                    <Link to='/type/Bebidas' className='btnCat'>Bebidas</Link>
                    <Link to='/type/otro'className='btnCat'>Otros</Link>
                </div>
            </div>
            
        </nav>
        
        
    </>
}

export default NavBar;
