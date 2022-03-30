import './ItemList.css';
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

    console.table(products)
    return(
        <div>
            <ul className="ulProducts">
                {products.map(product => <li key={product.id}>
                                            <Item {...product}/>
                                        </li>)}
                
            </ul>
        </div>
    )
}
export default ItemList;