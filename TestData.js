// TEST DATA

let mexican = [{id:1, name:'carnitas', price:18},{id:2, name:'asada',price:22}]

let american = [{id:1, name:'burgers', price:21},{id:2, name:'pizza rolls',price:22}]



//MAP

// foods:[{id:number,name:string, price:number},...]

/// returns array of formatted strings[] (you choose what these look like)

const about = (foods)=>{
   foodsPrice = foods.map((x)=>{
        return `${x.name} are $ ${x.price}`
    })
return foodsPrice
}
console.log('original foods', about(american))
console.log('original foods', about(mexican))



// [...]

// foods:[{id:number,name:string, price:number},...]

// food: {id:number,name:string, price:number}

/// returns new array with food add
let newFood = {id: 4, name:'Hotdog', price:6}

const addFood1=(foods, food)=>{
return [...american, newFood]
}
console.log('New Food:', addFood1())

// [...]

// foods:[{id:number,name:string, price:number},...]

// id:number,

// name:string, 

// price:number}

/// returns new array with food add

const addFood2 = (foods, id,name,price)=>{
return foods = [...american, american.id = id, american.name = name, american.price = price]
}
// return addFood2()
// return foods

console.log('New Food 2:' , addFood2(american, 5, 'fries', 4))




//MAP

// foods:[{id:number,name:string, price:number},...]

// id:number,

// price:number}

/// returns new array with the price updated with the id given

const updateFood1=(foods, id, price)=>{
   let newPrice = foods.filter((x)=>{
        if(x.id===id){
        return [...foods, x.price = price]
        }
    return x
    })
    return newPrice
}

    console.log('Updated Food:', updateFood1(american, 2, 8))
 
    // Update - Map






// FILTER

// foods:[{id:number,name:string, price:number},...]

// id:number,

// removes the food with the given the id

const deleteFood1 = (foods,id)=>{
let filterById = foods.filter((food)=> food.id !== id
)
return filterById
}
console.log('Delete food by Id', deleteFood1(american, 1))


// FILTER

// foods:[{id:number,name:string, price:number},...]

// price:number,

// removes the food with price over price given

const deleteFood2 = (foods, price)=>{
    let filterPrice = foods.filter(x=> {
      if (x.price < price ){
      return (x.price !== price)
    }
      
        // return x.price !== price
    
 })

return filterPrice
}

console.log('Delete food by price:', deleteFood2(mexican, 21))