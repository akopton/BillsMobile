import { TBill } from "../../types/Bill"

export class Category {
    name: string
    type: string
    value: number
    bills: TBill[]

    constructor(
        {name, type, value, bills}:{name:string, type:string, value:number, bills: TBill[]}
    ) {
        this.name = name
        this.type = type
        this.value = value
        this.bills = bills
    }
    

    static schema = {
        name: 'Bill',
        primaryKey: '_id',
        properties: {
            _id: 'objectId',
            name: 'string',
            type: 'string',
            value: 'number',
            bills: 'TBill[]'
        }
    }
}