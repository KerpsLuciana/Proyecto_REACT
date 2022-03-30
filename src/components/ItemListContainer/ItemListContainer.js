import ItemList from "../itemList/ItemList"
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { getProductByType, getProducts } from "../../asynmock"
function ItemlistContainer(){
    const [products, setProducts] = useState([])
    const [loading, setLoading] =useState(true)
    const {categorytype} = useParams()
    console.log(categorytype)
    useEffect(()=>{
        if(categorytype) {
            setLoading(true)

            getProductByType(categorytype).then(items => {
                setProducts(items)
            }).catch(err =>{
                console.log(err)
            }).finally(()=> {
                setLoading(false)
            })
        }else{
            setLoading(true)

            getProducts().then(item => {
                setProducts(item)
            }).catch(err=> {
                console.log(err)
            }).finally(()=>{
                setLoading(false)
            })
        }

        return(()=>{
            setProducts([])
        })
    }, [categorytype])
    if (loading) {
        return <h2>Cargando...</h2>
    }
    if (products.length === 0) {
        return <h2>Productos no disponibles</h2>
    }
    return(
        <div>
            <h2 className="greeting">NUESTROS COMBOS MÁS PEDIDOS</h2>
            <ItemList />
        </div>
    )
}

export default ItemlistContainer