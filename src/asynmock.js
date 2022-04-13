const products = [
    {
        id:1,
        name:"combo previa 1",
        price:2500,
        stock:25,
        type:"Bebidas",
        img:"../img/bebidas1.jpg",
        description:"combo ideal para la juntada con amigos"
    },
    {
        id:2,
        name:"combo tu comidita",
        img:"../img/comida2.jpg",
        price: 1500,
        stock:10,
        type:"Hamburguesa",
        description:"Lo que tu corazon necesita y tu estomago te pide"
    },
    {
        id:3,
        name:"Pizzeria kerps",
        img:"../img/pizza1.png",
        price: 700,
        stock: 30,
        type:"Pizza",
        description:"Pizzas a leña elaboradas con la mejor calidad."        
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
        name:"Ringo comidas rapidas",
        img:"../img/logopaty2.jpg",
        price: 1200,
        stock: 15,
        type:"Hamburguesa",
        description:"Hamburguesas dobles y triples, acompañalas con papas o aros de cebolla por $70 más. "        
    },
    {                   //MODIFICAR
        id:6,
        name:"Pizza brow",
        img:"../img/logopizza2.jpg",
        price: 900,
        stock: 30,
        type:"Pizza",
        description:"Pizzas sin bordes con 200gr de muzzarella para hacer de tu cena la mejor, elegi con o sin aceitunas."        
    },
    {                   //MODIFICAR
        id:7,
        name:"Delivery de bebidas",
        img:"../img/bebidas4.jpg",
        price: 2000,
        stock: 50,
        type:"Bebidas",
        description:"Para previas, cumpleaños o una simple cena, somos tu mejor opción de bebidas veloces a tu hogar"        
    },
    {                   //MODIFICAR
        id:8,
        name:"Monster crave",
        img:"../img/logopaty3.jpg",
        price: 1500,
        stock: 40,
        type:"Hamburguesa",
        description:"Hamburguesas simples y dobles, acompañadas de aderezos a tu gusto, agregale huevo frito o provoletta por $50."        
    },
    {                   //MODIFICAR
        id:9,
        name:"Empanadas sabrosos",
        img:"../img/empanadas2.jpg",
        price: 260,
        stock: 100,
        type:"Empanadas",
        description:"Empanadas norteñas con 12 variedades para que elijas lo que más te apetece."        
    },
    {                   //MODIFICAR
        id:10,
        name:"combo farmacia en casa",
        img:"../img/farmacia1.jpg",
        price: 1800,
        stock: 30,
        type:"otro",
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