"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchases = exports.products = exports.users = void 0;
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
        category: "fruta"
    },
    {
        id: "2",
        name: "batata",
        price: 5,
        category: "legume"
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
//# sourceMappingURL=database.js.map