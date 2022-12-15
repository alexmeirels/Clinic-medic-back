import {Request, Response} from 'express'
import AddressService from '../services/AddresService';

class AddressControler {
    async getAddresses(request:Request, response: Response){
        const addressService = new AddressService();
        const items = await addressService.getAddresses();
        return response.json(items)
    }

    async createAddress(request:Request, response: Response){
        const {cep, streat, district, city, state} = request.body;
        const addressService = new AddressService();
        const created = await addressService.createAdress({cep, streat, district, city, state});
        return response.json(created);
    }
}

export default AddressControler;
