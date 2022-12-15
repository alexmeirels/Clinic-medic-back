import {Request, Response} from 'express'
import UserService from '../services/UsersService';
import jwt from 'jsonwebtoken';

class UserController {
    async getUsers(request:Request, response: Response){
        const userService = new UserService();
        const items = await userService.getUsers();
        return response.json(items)
    }

    async createUser(request:Request, response: Response){
        const {address, user, patient} = request.body;
        const userService = new UserService();
        const created = await userService.createUser(user, address, patient);
        return response.json(created);
    }
    async createUserEmployer(request:Request, response: Response){
        const {address, user, employer} = request.body;
        const userService = new UserService();
        const created = await userService.createUserEmployer(user, address, employer);
        return response.json(created);
    }

    async getPatient(request:Request, response: Response){
        const userService = new UserService();
        const items = await userService.getPatient();
        return response.json(items)
    }

    async loginUser(request:Request, response: Response){
        const {email, password} = request.body;
        const userService = new UserService();
        const users = await userService.getLogin(email);
        console.log(users)
        if(email === "luciana.oftalmo@gmail.com") {
            users[0].isEmployer = true;
        }
        const token = jwt.sign({id: users.id}, "1234abcd", {expiresIn: '1h'})

        return response.json({
            user: users[0],
            token: token,
        })
    }
}

export default UserController;