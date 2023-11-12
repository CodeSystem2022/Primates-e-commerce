export default class ProductModel {
    #productId;
    #name;
    #description;
    #image;
    #price;
    constructor({ productId, name, description, price, image }) {
        (this.productId = productId),
            (this.name = name),
            (this.description = description),
            (this.image = image),
            (this.price = price);
    }

    set productId(productId) {
        if (!productId) {
            throw new Error(
                "Error. Something happened while creating the product."
            );
        }
        this.#productId = productId;
    }

    set name(name) {
        if (!name || name.length < 3) {
            throw new Error(
                "Error. Invalid name. Must contain at least 3 characters."
            );
        }
        const formatedName = `${name[0].toUpperCase()}${name.slice(1)}`;
        this.#name = formatedName;
    }

    set description(description) {
        if (!description || description.length < 3) {
            throw new Error(
                "Error. Invalid description. Must contain at least 3 characters."
            );
        }
        this.#description = description;
    }

    set image(image) {
        if (!image) {
            throw new Error("Error. Invalid image");
        }
        this.#image = image;
    }

    set price(price) {
        if (!price || isNaN(price)) {
            throw new Error("Error. Invalid price. Value must be a number.");
        }
        this.#price = price;
    }

    get dto() {
        const product = Object.freeze({
            productId: this.#productId,
            name: this.#name,
            description: this.#description,
            image: this.#image,
            price: this.#price
        });

        return product;
    }
}
