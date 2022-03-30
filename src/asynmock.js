const products = [
    {
        id:1,
        name:"combo previa 1",
        price:2500,
        stock:25,
        type:"bebidas",
        img:"../img/bebidas1.jpg",
        description:"combo ideal para la juntada con amigos"
    },
    {
        id:2,
        name:"combo tu comidita",
        img:"../img/comida2.jpg",
        price: 1500,
        stock:10,
        type:"restaurantes",
        description:"Lo que tu corazon necesita y tu estomago te pide"
    },
    {
        id:3,
        name:"combo farmacia en casa",
        img:"../img/farmacia1.jpg",
        price: 1800,
        stock: 30,
        type:"farmacia",
        description:"Necesitas algo de tu farmacia somos tu mejor opcion"
    }
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(products)
        }, 2000)
    })
}

export const getProductByType = (categorytype) => {
    return new Promise((resolve)=> {
        setTimeout(()=> {
            resolve(products.filter(prod => prod.type === categorytype))
        },1500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(products.find(prod => prod.id === Number(id) ))
        })
    })
}