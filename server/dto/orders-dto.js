export default class OrdersDTO {
    constructor(orderData) {
        this.orderId = orderData.orderId;
        this.date = orderData.date;
        this.userId = orderData.userId;
        this.products = orderData.products;
    }
}

export function asDto(dataO) {
    if (Array.isArray(dataO)) return dataO.map((o) => new OrdersDTO(o));
    else return new OrdersDTO(dataO);
}
