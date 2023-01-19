export enum CATEGORIAS{
    ACESSORIES="Acessorios",
    CLOTHES_AND_SHOES="Roupas e Calçados",
    FRUITS="Frutas"
}

export type User = {
    id:string,
    email:string,
    password:string
}

export type Product = {
    id:string,
    name:string,
    price:number,
    category:CATEGORIAS
}

export type Purchase = {
    userId:string,
    productId:string,
    quantity:number,
    totalPrice:number
}