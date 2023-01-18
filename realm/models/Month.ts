import { TCategory } from "../../types/Category"

export class Month {
    name: string
    type: string
    value: number
    categories: TCategory[]

    constructor(
        {name, type, value, categories}:{name:string, type:string, value:number, categories: TCategory[]}
    ) {
        this.name = name
        this.type = type
        this.value = value
        this.categories = categories
    }
    

    static schema = {
        name: 'Bill',
        primaryKey: '_id',
        properties: {
            _id: 'objectId',
            name: 'string',
            type: 'string',
            value: 'number',
            categories: 'TCategory[]'
        }
    }
}