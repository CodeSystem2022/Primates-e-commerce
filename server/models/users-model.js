import bcrypt from "bcrypt";

export default class UsersModel {
    #userId;
    #email;
    #password;
    #name;
    #lastname;
    #phone;
    #image;
    constructor({ userId, email, password, name, lastname, phone, image }) {
        (this.userId = userId),
            (this.email = email),
            (this.password = password),
            (this.name = name),
            (this.lastname = lastname),
            (this.phone = phone),
            (this.image = image);
    }

    set userId(userId) {
        if (!userId) {
            throw new Error("Error. Invalid id.");
        }
        this.#userId = userId;
    }

    set email(email) {
        if (!email || email.length < 10 || !email.includes("@")) {
            throw new Error("Error. Invalid email");
        }
        this.#email = email;
    }

    set password(password) {
        if (!password || password.length < 6) {
            throw new Error(
                "Error. Invalid password, must contain at least 6 characters."
            );
        }
        this.#password = password;
    }

    set name(name) {
        if (!name) {
            throw new Error("Error. Invalid name");
        }
        this.#name = name;
    }

    set lastname(lastname) {
        if (!lastname) {
            throw new Error("Error. Invalid Last Name");
        }
        this.#lastname = lastname;
    }

    set phone(phone) {
        if (!phone) {
            throw new Error("Error. Invalid phone");
        }
        this.#phone = phone;
    }

    set image(image) {
        if (!image) {
            throw new Error("Error. Invalid image");
        }
        this.#image = image;
    }

    get dto() {
        const product = Object.freeze({
            userId: this.#userId,
            email: this.#email,
            password: this.#password,
            name: this.#name,
            lastname: this.#lastname,
            phone: this.#phone,
            image: this.#image,
        });

        return product;
    }
    doesNotExist(email) {
        if (email !== this.#email) {
            throw new Error("User doesn't exists.");
        }
    }
    async isPasswordCorrect(password) {
        const isPasswordCorrect = await bcrypt.compare(
            password,
            this.#password
        );
        if (!isPasswordCorrect) {
            throw new Error("Error passwords doesn't match.");
        }
    }
}
