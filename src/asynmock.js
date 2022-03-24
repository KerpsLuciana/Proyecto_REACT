const products = [
    {
        id:1,
        name:"combo previa 1",
        price:2500,
        img:"../img/bebidas1.jpg",
        description:"combo ideal para la juntada con amigos"
    },
    {
        id:2,
        name:"combo tu comidita favorita",
        img:"../img/comida2.jpg",
        price: 1500,
        description:"Lo que tu corazon necesita y tu estomago te pide"
    },
    {
        id:3,
        name:"combo tu farmacia en tu casa",
        img:"../img/farmacia1.jpg",
        price: 1800,
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