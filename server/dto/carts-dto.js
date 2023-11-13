export default class CartsDTO {
    constructor(cartData) {
        this.cartId = cartData.cartId;
        this.products = cartData.products;
    }
}

export function asDto(dataC) {
    if (Array.isArray(dataC)) return dataC.map((c) => new CartsDTO(c));
    else return new CartsDTO(dataC);
}
