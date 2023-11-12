export default class UsersDTO {
    constructor(userData) {
        this.userId = userData.userId;
        this.email = userData.email;
        this.name = userData.name;
        this.lastname = userData.lastname;
        this.phone = userData.phone;
        this.image = userData.image;
    }
}

export function asDto(dataU) {
    if (Array.isArray(dataU)) return dataU.map((u) => new UsersDTO(u));
    else return new UsersDTO(dataU);
}
