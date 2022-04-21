import ItemList from "../itemList/ItemList"
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {getProducts} from '../../services/firebase/firestore'
// import { getProductByType, getProducts } from "../../asynmock"
function ItemlistContainer(){
    const [products, setProducts] = useState([])

    const [loading, setLoading] =useState(true)

    const {categoryType} = useParams()
    console.log(categoryType)

    useEffect(()=>{
        // if(categorytype) {
        //     setLoading(true)

        //     getProductByType(categorytype).then(items => {
        //         setProducts(items)
        //     }).catch(err =>{
        //         console.log(err)
        //     }).finally(()=> {
        //         setLoading(false)
        //     })
        // }else{
            
        // }
        setLoading(true)

            getProducts(categoryType).then(items => {
                setProducts(items)
            }).catch(err=> {
                console.log(err)
            }).finally(()=>{
                setLoading(false)
            })

        return(()=>{
            setProducts([])
        })
    }, [categoryType])
    
    if (loading) {
        return <h2>Cargando...</h2>
    }
    if (products.length === 0) {
        return <h2>Productos no disponibles</h2>
    }
    return(
        <div>
            <h2 className="greeting">NUESTROS COMBOS MÁS PEDIDOS</h2>
            <ItemList products={products} />
        </div>
    )
}

export default ItemlistContainer