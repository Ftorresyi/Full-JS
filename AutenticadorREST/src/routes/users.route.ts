import { Router, Request, Response, NextFunction } from "express";

/* get /users
get /users/:uuid
post /users 
put / users/:uuid 
delete /users/:uuid */

//o Router permite a configuração de criaçao de rotas

const usersRoute = Router();

//Quando chegar uma requisiçao get em userRoute, ele responderá com uma lista vazia de usuários
usersRoute.get('/users', (req: Request, res: Response, next: NextFunction)=>{
    const users = [{username: 'Yindi'}];
    res.status(200).send(users);
});

// A app deve ser exportada, pois está fora do arquivo principal. Depois ela deve ser importada na app desejada
export default usersRoute;