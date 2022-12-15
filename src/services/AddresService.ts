import knex from '../database/connection';
import Address from '../types/Address';

class AddressService {
    async getAddresses(){
        const items = await knex('address').select('*');
        return items;
    }

    async createAdress(address: Address){
        //adicionar validacoes principalmente ao cadastrar
        const insertedId = await knex('address').insert(address);

        return {...address, id:insertedId };
    }
}

export default AddressService;