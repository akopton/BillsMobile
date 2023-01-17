import { View, Text, ScrollView } from "react-native"
import { Bill } from "../components/Bill"
import { billsList } from "../constants/bills"
import { TBill } from "../types/Bill"

export const CategoryPage = ({route}:any) => {

    const {props} = route.params

    return (
        <ScrollView>
            {
                billsList.filter(bill => bill.category === props.name).map((bill:TBill, id:number) => (
                    <Bill bill={bill} id={id}/>
                ))
            }
        </ScrollView>
    )
}