"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
const database_2 = require("./database");
const database_3 = require("./database");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});
app.get('/ping', (req, res) => {
    res.send('Pong!');
});
app.get('/users', (req, res) => {
    res.status(200);
    res.send(database_1.users);
});
app.get('/products', (req, res) => {
    res.status(200);
    res.send(database_2.products);
});
app.get('/product/search', (req, res) => {
    res.status(200);
    const q = req.query.q;
    res.send(q);
});
app.post('/users', (req, res) => {
    const id = req.body.id;
    const email = req.body.email;
    const password = req.body.password;
    res.status(201);
    res.send("Cadastro realizado com sucesso");
    console.log(id);
    console.log(email);
    console.log(password);
});
app.post('/products', (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const price = req.body.price;
    const category = req.body.category;
    res.status(201);
    res.send("Produto realizado com sucesso");
    console.log(id);
    console.log(name);
    console.log(price);
    console.log(category);
});
app.post('/purchases', (req, res) => {
    const userId = req.body.userId;
    const productId = req.body.productId;
    const quantity = req.body.quantity;
    const totalPrice = req.body.totalPrice;
    res.status(201);
    res.send("Compra realizado com sucesso");
    console.log(userId);
    console.log(productId);
    console.log(quantity);
    console.log(totalPrice);
});
app.get('/products/:id', (req, res) => {
    const id = req.params.id;
    const result = database_2.products.find((product) => product.id === id);
    res.status(200);
    res.send("Object product encontrado");
});
console.log(database_1.users);
console.log(database_2.products);
console.log(database_3.purchases);
//# sourceMappingURL=index.js.map