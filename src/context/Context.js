import {createContext, useState } from "react";

const Context = createContext()

export const CartContextProvider = ({children}) => {
    
    const [cart, setCart] = useState([])
    
    console.log(cart)
    
    const addItem = (product, quantity) => {
        
        let bandera=true

        cart.filter(prod=>{
            if(prod.id===product.id){
                prod.quantity += quantity;
                bandera= false;
                setCart([...cart])
            }
            
        })
        if(bandera===true){
            const objItem ={...product,quantity}
            setCart([...cart, objItem])
        }

    }

    const removeItem = (id) => {
            cart.filter(
                (prod)=> {
                    if(prod.id === id){
                        let newCart = cart.filter((item) => item.id != id)
                            setCart([...newCart])
                    }
            })
    }

    const clearCart = () => {
        setCart([])
    }

    const getQuantity = () => {
        let countCart= 0
        cart.forEach(prod=> {
            countCart+= prod.quantity
        })

        return countCart
    }

    return (
        <Context.Provider value= {{cart, addItem, clearCart, getQuantity, removeItem}}>
            {children}
        </Context.Provider>
    )
}

export default Context