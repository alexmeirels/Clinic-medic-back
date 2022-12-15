import {Request, Response} from 'express'
import EmployerService from '../services/EmployerService';

class EmployerController {
    async getEmployer(request:Request, response: Response){
        const employerService = new EmployerService();
        const items = await employerService.getEmployer();
        return response.json(items)
    }
}

export default EmployerController;