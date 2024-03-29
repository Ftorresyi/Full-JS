"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
console.log("Executei!");
app.get('/status', (req, res, next) => {
    res.status(200).send({ foo: 'Sucesso Total' });
});
app.listen(3000, () => {
    console.log('Aplicaçao executando na porta 3000');
});
