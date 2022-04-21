import {getDocs, collection, query, where, getDoc,doc} from 'firebase/firestore'
import { firestoreDb } from './index'
//trae todos los productos
export const getProducts  = (categoryType) => {
    return new Promise ((resolve,reject) => {
        const collectionRef = categoryType
        ? query(collection(firestoreDb, 'products'), where('category', '==', categoryType))
        : collection(firestoreDb, 'products')

        getDocs(collectionRef).then(querySnapshot =>{
            const products = querySnapshot.docs.map(doc => {
            return { id: doc.id, ...doc.data() }
            
        })
             resolve(products)
             console.log(products)
    }).catch(error => {
        reject(error)
    })
})
}




// va al detalle del producto
export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        const docRef = doc(firestoreDb, 'products', id)
    
        getDoc(docRef).then(querySnapshot => {
            const product = { id: querySnapshot.id, ...querySnapshot.data() }
            resolve(product)
        }).catch(error => {
            reject(error)
        })
    })
}