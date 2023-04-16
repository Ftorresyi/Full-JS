import express, {Request, Response, NextFunction } from "express";
import usersRoute from "./routes/users.route";

const app = express(); // cria uma instancia da lib express

app.use(usersRoute);


//CONFIGURAR TODAS AS ROTAS DO PROJETO:
//cria um endpoint com um callback para descobrir o estatus da aplicação
app.get('/status', (req: Request, res: Response, next: NextFunction)=>{
     res.status(200).send({foo: 'Sucesso Total! Você é incrível!'});
});

//Fica escutando uma porta HTTP para comunicaçao. O get trabalha junto com o listen
app.listen(3000, ()=>{
    console.log('Aplicaçao executando na porta 3000');
});