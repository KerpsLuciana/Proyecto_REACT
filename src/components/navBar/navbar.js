import './navBar.css'
import CartWidget from '../CartWidget/CartWidget';

function NavBar(){
    return <>
        <nav className ="container" >
            <div className='subContainer'>
                <h2 className ="menu">FLEXRAPPI</h2>
                <p className ="paragraphOne">Alcanzando tus platos favoritos desde 2018</p>
                <div className="containerBtn2">
                    <button className ="buttonOne">Inicio</button>
                    <button className ="buttonTwo">Sobre nosotros</button>
                    <button className ="buttonThree">Registrarme</button>
                </div>  
            </div>
            <div className="containerBtnCart">
                <CartWidget/>
                <div className="containerBtn1">
                    <button className='btnCat'>Restaurantes</button>
                    <button className='btnCat'>Bebidas</button>
                    <button className='btnCat'>Supermercados</button>
                    <button className='btnCat'>Farmacias</button>
                </div>
            </div>
            
        </nav>
        
        
    </>
}

export default NavBar;
