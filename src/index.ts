import { users } from "./database";
import { products } from "./database";
import { purchases } from "./database";
import express, {Request, Response} from 'express';
import cors from 'cors';


const app = express();
app.use (express.json());
app.use(cors());
app.listen(3003,()=>{
    console.log("Servidor rodando na porta 3003");
    
});

app.get('/ping', (req:Request, res:Response)=>{
    res.send('Pong!')
})

app.get('/users',(req:Request, res:Response)=>{
    res.status(200)
    res.send(users)
})

app.get('/products', (req: Request, res: Response) => {
    res.status(200)
    res.send(products)
})

app.get('/product/search', (req: Request, res: Response) => {
    res.status(200)
    const q = req.query.q
    res.send(q)
})

app.post('/users',(req:Request, res:Response)=>{
    const id = req.body.id
    const email = req.body.email
    const password = req.body.password
    res.status(201)
    res.send("Cadastro realizado com sucesso")
    console.log(id);
    console.log(email);
    console.log(password);
})

app.post('/products', (req: Request, res: Response) => {
    const id = req.body.id
    const name = req.body.name
    const price = req.body.price
    const category = req.body.category
    res.status(201)
    res.send("Produto realizado com sucesso")
    console.log(id);
    console.log(name);
    console.log(price);
    console.log(category);
})

app.post('/purchases', (req: Request, res: Response) => {
    const userId = req.body.userId
    const productId = req.body.productId
    const quantity = req.body.quantity
    const totalPrice = req.body.totalPrice
    res.status(201)
    res.send("Compra realizado com sucesso")
    console.log(userId);
    console.log(productId);
    console.log(quantity);
    console.log(totalPrice);
})

app.get('/products/:id', (req: Request, res: Response) => {
    const id = req.params.id
    res.status(200)
    res.send("Object product encontrado")
})

app.get('/users/:id/purchases', (req: Request, res: Response) => {
    const id = req.params.id
    res.status(200)
    res.send("Array de compras do user procurado")
})

app.delete('/users/:id', (req:Request, res:Response)=>{
    const id = req.params.id
    res.status(200)
    res.send("Usuario")
})

app.delete('/products/:id',(req:Request, res: Response)=>{
    const id = req.params.id
    res.status(200)
    res.send("Item deletado com sucesso")
})

app.put('/users/:id',(req:Request, res:Response)=>{
    const id = req.params.id
    const newEmail = req.body.email as string | undefined
    const newPassword = req.body.password as string | undefined

    res.status(200)
    res.send("Cadastro atualizado com sucesso")
})

app.put('/products/:id',(req: Request, res: Response)=>{
    const id = req.params.id
    res.status(200)
    const newName = req.body.name as string | undefined
    const newPrice = req.body.price as string | undefined
    const newCategory = req.body.category as string | undefined

    res.status(200)
    res.send("Produto atualizado com sucesso")
})

console.log(users);
console.log(products);
console.log(purchases);


