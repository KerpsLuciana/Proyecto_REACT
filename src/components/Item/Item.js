import ItemList from "../itemList/ItemList"

function Item ([name, img]){
    return(
        <div>
            <img {...img}/>
            <h3>{name}</h3>
            <button>Mas Info</button>
        </div>

    )
}
export default Item