export default class PersonasDaoMem {

    constructor() {
        this.products = []
    }

    init() {
        console.log('Memory products DAO -> Ready!')
    }

    add(product) {
        this.products.push(product)
        return asDto(product)
    }

    getAll() {
        return asDto(this.products)
    }

    getById(id) {
        return asDto(this.products[ this.#getIndex(id) ])
    }

    #getIndex(id) {
        return this.products.findIndex(persona => persona.id === id)
    }

    update(id, newProduct) {
        const index = this.#getIndex(id)
        const updatedProduct = { ...this.products[ index ], ...newProduct }
        this.products.splice(index, 1, updatedProduct)
        return asDto(updatedProduct)
    }

    delete(id) {
        const [ deletedProduct ] = this.products.splice(this.#getIndex(id), 1)
        return asDto(deletedProduct)
    }   

}