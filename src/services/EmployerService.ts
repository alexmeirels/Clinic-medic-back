import knex from '../database/connection';

class EmployerService {
    async getEmployer(){
        const items = await knex.raw('select users.name, users.email, users.id as userId, employer.Id as employerId, contractDate, salary, crm, specialty from employer inner join users on user_id = users.id');
        return [...items];
    }
}

export default EmployerService;