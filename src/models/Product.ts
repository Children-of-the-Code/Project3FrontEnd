export default class Product {
    name: string
    desc: string
    price: string

    constructor (name: string, desc: string, price: string) {
        this.name = name;
        this.desc = desc;
        this.price = price;
    }
}