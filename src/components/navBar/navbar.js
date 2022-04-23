import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import Context from "../../context/Context"
import { Link} from 'react-router-dom'
import { useContext,useState,useEffect } from "react"
import {getCategories} from '../../services/firebase/firestore'
import {orderCat} from './order'

function NavBar(){
    const {getQuantity} = useContext(Context)

    const [categories, setCategory]= useState([])
    
    useEffect(()=>{
        getCategories().then(categories=>{
            orderCat(categories)
            setCategory(categories)
            // console.log(categories)
        }).catch(error=>{
            console.log(error)
        })
    },[])
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
                    {categories.map(cat=>
                        <Link 
                            key={cat.id}   
                            to= {`/type/${cat.id}`} 
                            className='btnCat'
                            >
                                {cat.description}
                        </Link>
                       
                    )}
                    
                    {/* <Link to='/type/Pizza' className='btnCat'>Pizzas</Link>
                    <Link to='/type/Empanadas' className='btnCat'>Empandas</Link>
                    <Link to='/type/Bebidas' className='btnCat'>Bebidas</Link>
                    <Link to='/type/otro'className='btnCat'>Otros</Link> */}
                </div>
            </div>
            
        </nav>
        
        
    </>
}

export default NavBar;
