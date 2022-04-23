export const createAdapCat = (doc)=> {
    const data = doc.data()
    const formatCategory ={
        id: doc.id,
        description: data.description,
        order: data.order
    }
    return formatCategory
}