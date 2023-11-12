import ProductsDAO from './products-dao-mongo.js';
import PersonasDaoMem from './products-dao-mem.js';

const opcion = process.argv[ 2 ] || 'Mongo';

let dao;

switch (opcion) {
    case 'Mem':
            dao = new PersonasDaoMem()
            await dao.init()
        break
    default:
        dao = new ProductsDAO()
}

export default class ProductsDaoFactory {
    static getDao() {
        return dao
    }
}