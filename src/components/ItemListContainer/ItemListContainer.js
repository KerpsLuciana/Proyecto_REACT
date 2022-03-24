import ItemList from "../itemList/ItemList"
function ItemlistContainer({greeting}){
    return(
        <div>
            <h5 className="greeting">{greeting}</h5>
            <ItemList/>
        </div>
    )
}

export default ItemlistContainer