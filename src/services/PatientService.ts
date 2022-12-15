import knex from '../database/connection';
import Patient from '../types/Patient';

class PatientService {

    async createPatient(patient: Patient){
        //adicionar validacoes principalmente ao cadastrar
        const insertedId = await knex('patient').insert(patient);

        return {...patient, id:insertedId };
    }
}

export default PatientService;