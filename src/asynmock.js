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
    },
    {                   //MODIFICAR
        id:4,
        name:"Big bear restaurant",
        img:"../img/logopaty1.jpg",
        price: 800,
        stock: 20,
        type:"Hamburguesa",
        description:"Hamburguesa con doble carne, cheddar, lechuga, tomate y huevo. Podés modificar alguno de los ingredientes por otros, opciones disponibles: Provoleta, morrones, salsa picante, cebolla caramelizada, pepino, panceta y jamon"        
    },
    {                   //MODIFICAR
        id:5,
        name:"combo farmacia en casa",
        img:"../img/farmacia1.jpg",
        price: 1800,
        stock: 30,
        type:"farmacia",
        description:"Necesitas algo de tu farmacia somos tu mejor opcion"        
    },
    {                   //MODIFICAR
        id:6,
        name:"combo farmacia en casa",
        img:"../img/farmacia1.jpg",
        price: 1800,
        stock: 30,
        type:"farmacia",
        description:"Necesitas algo de tu farmacia somos tu mejor opcion"        
    },
    {                   //MODIFICAR
        id:7,
        name:"combo farmacia en casa",
        img:"../img/farmacia1.jpg",
        price: 1800,
        stock: 30,
        type:"farmacia",
        description:"Necesitas algo de tu farmacia somos tu mejor opcion"        
    },
    {                   //MODIFICAR
        id:8,
        name:"combo farmacia en casa",
        img:"../img/farmacia1.jpg",
        price: 1800,
        stock: 30,
        type:"farmacia",
        description:"Necesitas algo de tu farmacia somos tu mejor opcion"        
    },
    {                   //MODIFICAR
        id:9,
        name:"combo farmacia en casa",
        img:"../img/farmacia1.jpg",
        price: 1800,
        stock: 30,
        type:"farmacia",
        description:"Necesitas algo de tu farmacia somos tu mejor opcion"        
    },
    {                   //MODIFICAR
        id:10,
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
        }, 1000)
    })
}

export const getProductByType = (categorytype) => {
    return new Promise((resolve)=> {
        setTimeout(()=> {
            resolve(products.filter(prod => prod.type === categorytype))
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(products.find(prod => prod.id === Number(id) ))
        })
    })
}