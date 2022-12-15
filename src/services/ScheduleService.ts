import knex from '../database/connection';

class ScheduleService {
    async getSchedule(){
        const items = await knex.raw('select date, hour, schedule.name as PatientName, schedule.email as PatientEmail, schedule.phone as PatientPhone, users.name as doctorName, specialty from schedule inner join employer on employer_id = employer.id inner join users on user_id = users.id');
        return [...items];
    }

    async getScheduleByEmployer(id: any){
        const items = await knex.raw(`select date, hour, schedule.name as PatientName, schedule.email as PatientEmail, schedule.phone as PatientPhone, users.name as doctorName, specialty from schedule inner join employer on employer_id = employer.id inner join users on user_id = users.id where employer_id =${id}`);
        return [...items];
    }

    async createSchedule(data: any){
        const insertedId = await knex('schedule').insert(data);

        return {...data, id:insertedId };
    }
}

export default ScheduleService;