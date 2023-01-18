import { TProduct } from "../../types/Product"

export class Bill {
    name: string
    type: string
    value: number
    products: TProduct[]
    addedAt: Date

    constructor(
        {name, type, value, products}:{name:string, type:string, value:number, products: TProduct[]}
    ) {
        this.name = name
        this.type = type
        this.value = value
        this.products = products
        this.addedAt = new Date()
    }
    

    static schema = {
        name: 'Bill',
        primaryKey: '_id',
        properties: {
            _id: 'objectId',
            name: 'string',
            type: 'string',
            value: 'number',
            products: 'TProduct[]',
            addedAt: 'date'
        }
    }
}