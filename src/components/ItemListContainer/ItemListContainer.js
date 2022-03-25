import ItemList from "../itemList/ItemList"
function ItemlistContainer({greeting}){
    return(
        <div>
            <ItemList/>
            <h5 className="greeting">{greeting}</h5>
        </div>
    )
}

export default ItemlistContainer