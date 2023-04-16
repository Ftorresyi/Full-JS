import { Router, Request, Response, NextFunction } from "express";
import {StatusCodes} from 'http-status-codes';

/* get /users
get /users/:uuid
post /users 
put / users/:uuid 
delete /users/:uuid 
CRUD - Create - Read - update - delete
Create - POST
Read - GET

*/

//o Router permite a configuração de criaçao de rotas

const usersRoute = Router();

//Quando chegar uma requisiçao get em userRoute, ele responderá com uma lista vazia de usuários
usersRoute.get('/users', (req: Request, res: Response, next: NextFunction)=>{
    const users = [{username: 'Yindi'}];
    res.status(200).send(users);
});
// os dois pontos antes da variavel uuid indica que valor do parâmetro capturado dentro da url pode ser dinâmico
//req - captura informacao da requisicao,
//res - responde as informaçoes da requisiçao
//req e res trabalham em conjunto 
usersRoute.get('/users/:uuid', (req: Request<{uuid:string}>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid//captura paramentro da url
    //req.query //captura caracteres string na url no get
    //req.header //captura o cabeçalho
    //bancoDeDados.getUserByUUid(uuid);
    //200, 400, 404, etc são status code (o que aconteceu) da aplicacao que está dentro da padronizaçao REST
    res.status(200).send({uuid}); //envia uma responta com o status 200 (OK), e envia na tela o mesmo uuid capturado na url
});


usersRoute.post('/users', (req: Request, res: Response, next: NextFunction)=>{
    const newUser = req.body;
    console.log(newUser);
    res.status(StatusCodes.CREATED).send(newUser);
});

//ALTERAR UM USUÁRIO:
usersRoute.put('/users/:uuid', (req: Request<{uuid:string}>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    const modifiedUser = req.body;

    modifiedUser.uuid = uuid
    res.status(StatusCodes.OK).send({modifiedUser});
});

//REMOVER UM USUARIO:
usersRoute.delete('/users/:uuid', (req: Request, res: Response, next: NextFunction)=>{
    res.status(StatusCodes.OK);
});

// A app deve ser exportada, pois está fora do arquivo principal. Depois ela deve ser importada na app desejada
export default usersRoute;