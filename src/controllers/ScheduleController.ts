import {Request, Response} from 'express'
import ScheduleService from '../services/ScheduleService';

class ScheduleController {
    async getSchedule(request:Request, response: Response){
        const scheduleService = new ScheduleService();
        const items = await scheduleService.getSchedule();
        return response.json(items)
    }

    async getScheduleByEmployer(request:Request, response: Response){
        const {id} = request.params;
        const scheduleService = new ScheduleService();
        const items = await scheduleService.getScheduleByEmployer(id);
        return response.json(items)
    }

    async createSchedule(request:Request, response: Response){
        const data = request.body;
        const scheduleService = new ScheduleService();
        const created = await scheduleService.createSchedule(data);
        return response.json(created);
    }
}

export default ScheduleController;