import { Product, Purchase, User } from "./types";

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
    category: "fruta"
},
{
    id: "2",
    name: "batata",
    price: 5,
    category: "legume"
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