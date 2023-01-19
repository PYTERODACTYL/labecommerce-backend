import { CATEGORIAS, Product, Purchase, User } from "./types";

export const users: User[] = [
    {
        id: "1",
        email: "fulano1@teste.com",
        password: "testezinho"
    },
    {
        id: "2",
        email: "fulano2@teste.com",
        password: "testezinhozinho"
    }
]

export const products: Product[]=[{
    id: "1",
    name: "banana",
    price: 10,
    category: CATEGORIAS.FRUITS
},
{
    id: "2",
    name: "batata",
    price: 5,
    category: CATEGORIAS.FRUITS
}
]

export const purchases: Purchase[]=[{
    userId: "1",
    productId: "2",
    quantity: 2,
    totalPrice: 10
},{
    userId: "2",
    productId: "1",
    quantity: 5,
    totalPrice: 50
}]

export function createUser(id:string,email:string,password:string){
    return console.log("Cadastro realizado com sucesso");
    
}

export function getAllUsers(){
    return console.log(users);
    
}

export function createProduct(id:string,name:string,price:number,category:CATEGORIAS){
    return console.log("Produto criado com sucesso");
    
}

export function getAllProducts(){
    return console.log(products);
    
}

export function getProductById(idToSearch:string){
    for(let i=0;i<products.length;i++){
        if(idToSearch==products[i].id){
            return products[i]
        }
        return console.log("undefined");
        
    }
}

export function queryProductsByName(q:any){
    return console.log(products);
    
}

export function createPurchase(userId:string,productId:string,quantity:number,totalPrice:number){
    console.log("Compra realizada com sucesso");
    
}

export function getAllPurchasesFromUserId(userIdToSearch:string){
    console.log("sucessoo");
    
}