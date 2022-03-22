import './navBar.css'
import CartWidget from '../CartWidget/CartWidget';

function NavBar(){
    return <>
        <nav className ="container" >
            <h2 className ="menu">FLEXRAPPI</h2>
            <p className ="paragraphOne">Alcanzando tus platos favoritos desde 2018</p>
            <div className="containerBtnCart">
                <CartWidget/>
                <div className="containerBtn2">
                    <button className ="buttonOne">Inicio</button>
                    <button className ="buttonTwo">Sobre nosotros</button>
                    <button className ="buttonThree">Registrarme</button>
                </div>
            </div>
                <div className="containerBtn1">
                    <button>Restaurantes</button>
                    <button>Bebidas</button>
                    <button>Supermercados</button>
                    <button>Farmacias</button>
                </div>
            
        </nav>
        
        
    </>
}

export default NavBar;
