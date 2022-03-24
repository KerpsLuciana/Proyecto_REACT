import { getProducts } from "../../asynmock"
import { useState, useEffect } from "react"
import Item from "../Item/Item"
const ItemList = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        })
    },[])

    console.log(products)
    return(
        <div>
            <ul>
                {products.map(product => <li key={product.id}>
                                            <div>
                                                <h2>{product.name}</h2>
                                                <img src={product.img}/>
                                            </div>
                                        </li>)}
                
            </ul>
        </div>
    )
}
export default ItemList;