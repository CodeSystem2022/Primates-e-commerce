export default class ProductsDTO {
    constructor(productData) {
        this.productId = productData.productId;
        this.name = productData.name;
        this.description = productData.description;
        this.image = productData.image;
        this.price = productData.price;
    }
}

export function asDto(dataP) {
    if (Array.isArray(dataP)) return dataP.map((p) => new ProductsDTO(p));
    else return new ProductsDTO(dataP);
}
