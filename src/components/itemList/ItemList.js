import './itemList.css';
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
                                            <Item name={product.name} price={product.price} img={product.img} stock={product.stock}/>
                                        </li>)}
                
            </ul>
        </div>
    )
}
export default ItemList;