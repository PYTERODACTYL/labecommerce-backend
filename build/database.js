"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPurchasesFromUserId = exports.createPurchase = exports.queryProductsByName = exports.getProductById = exports.getAllProducts = exports.createProduct = exports.getAllUsers = exports.createUser = exports.purchases = exports.products = exports.users = void 0;
const types_1 = require("./types");
exports.users = [
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
];
exports.products = [{
        id: "1",
        name: "banana",
        price: 10,
        category: types_1.CATEGORIAS.FRUITS
    },
    {
        id: "2",
        name: "batata",
        price: 5,
        category: types_1.CATEGORIAS.FRUITS
    }
];
exports.purchases = [{
        userId: "1",
        productId: "2",
        quantity: 2,
        totalPrice: 10
    }, {
        userId: "2",
        productId: "1",
        quantity: 5,
        totalPrice: 50
    }];
function createUser(id, email, password) {
    return console.log("Cadastro realizado com sucesso");
}
exports.createUser = createUser;
function getAllUsers() {
    return console.log(exports.users);
}
exports.getAllUsers = getAllUsers;
function createProduct(id, name, price, category) {
    return console.log("Produto criado com sucesso");
}
exports.createProduct = createProduct;
function getAllProducts() {
    return console.log(exports.products);
}
exports.getAllProducts = getAllProducts;
function getProductById(idToSearch) {
    for (let i = 0; i < exports.products.length; i++) {
        if (idToSearch == exports.products[i].id) {
            return exports.products[i];
        }
        return console.log("undefined");
    }
}
exports.getProductById = getProductById;
function queryProductsByName(q) {
    return console.log(exports.products);
}
exports.queryProductsByName = queryProductsByName;
function createPurchase(userId, productId, quantity, totalPrice) {
    console.log("Compra realizada com sucesso");
}
exports.createPurchase = createPurchase;
function getAllPurchasesFromUserId(userIdToSearch) {
    console.log("sucessoo");
}
exports.getAllPurchasesFromUserId = getAllPurchasesFromUserId;
//# sourceMappingURL=database.js.map