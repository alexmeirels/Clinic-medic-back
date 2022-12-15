import knex from '../database/connection';
import User from '../types/User';
import Address from '../types/Address';
import Patient from '../types/Patient';
import Employer from '../types/Employer';
class UserService {
    async getUsers(){
        const items = await knex('users').select('*');

        return items;
    }

    async createUser(user: User, address: Address, patient: Patient){
        //adicionar validacoes principalmente ao cadastrar
        const insertedIdAddress = await knex('address').insert(address);

        const insertUser = {...user, address_id: insertedIdAddress[0]};
        const insertedIdUser = await knex('users').insert(insertUser);
        
        const insertPacient = {...patient, user_id: insertedIdUser[0]};
        const insertedId = await knex('patient').insert(insertPacient);

        return {...user, id:insertedId};
    }

    async createUserEmployer(user: User, address: Address, employer: Employer){
        //adicionar validacoes principalmente ao cadastrar
        const insertedIdAddress = await knex('address').insert(address);

        const insertUser = {...user, address_id: insertedIdAddress[0]};
        const insertedIdUser = await knex('users').insert(insertUser);
        
        const insertEmployer = {...employer, user_id: insertedIdUser[0]};
        const insertedId = await knex('employer').insert(insertEmployer);

        return {...user, id:insertedId};
    }

    async getPatient(){
        const items = await knex.raw('select name, email, users.id as userId, patient.weight, patient.height, patient.bloodType, patient.id as patientId from users inner join patient on users.id = patient.user_id');

        return items;
    }

    async getLogin(email: string){
        const items = await knex.raw(`select name, email, password, id from users where email like "${email}"`);
        return items;
    }
}

export default UserService;