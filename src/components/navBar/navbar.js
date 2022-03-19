import './navBar.css'


function NavBar(){
    return <>
        <nav className ="container" >
            <h2 className ="menu">FLEXRAPPI</h2>
            <p className ="paragraphOne">Alcanzando tus platos favoritos desde 2018</p>
            <button className ="buttonOne">Nosotros</button>
            <button className ="buttonTwo">Tienda</button>
            <button className ="buttonThree">Registrarme</button>
            <br/>
            <p className ="paragraphTwo">Gracias por visitarnos</p>
        </nav>
    </>
}

export default NavBar;