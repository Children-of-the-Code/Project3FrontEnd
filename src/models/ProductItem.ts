export default class ProductItem {
    id: number
    name: string
    desc: string
    price: string
    img: string

    constructor (id: number, name: string, desc: string, price: string, img: string) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.img = img;
    }
}