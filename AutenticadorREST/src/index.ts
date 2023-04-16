import express, {Request, Response, NextFunction } from "express";
import usersRoute from "./routes/users.route";
import {StatusCodes} from 'http-status-codes';

const app = express(); // cria uma instancia da lib express

//Configuração da Aplicação:
app.use(express.json()); //middware que lê e converte as requisiçoes json
app.use(express.urlencoded({extended:true}));

//CONFIGURAÇÃ0 DAS ROTAS:
app.use(usersRoute);
//cria um endpoint com um callback para descobrir o estatus da aplicação
app.get('/status', (req: Request, res: Response, next: NextFunction)=>{
     res.status(StatusCodes.OK).send({foo: 'Sucesso Total! Você é incrível!'});
});

//INICIALIZAÇÃO DO SERVIDOR
//Fica escutando uma porta HTTP para comunicaçao. O get trabalha junto com o listen
app.listen(3000, ()=>{
    console.log('Aplicaçao executando na porta 3000');
});





