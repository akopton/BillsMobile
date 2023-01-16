import { useEffect } from "react"
import { View, Text } from "react-native"
import { TBill } from "../types/Bill"

export const Bill = ({bill, id}:{bill:TBill, id:number}) => {

    useEffect(()=>{
        console.log('elo')
    },[])
    
    return (
        <View style={{flex: 1, padding: 5, borderStyle: 'solid', borderWidth: 2}} key={id}>
            <Text style={{textAlign: 'center'}}>
                {bill.title}
            </Text>
            <Text style={{textAlign: 'center'}}>
                {bill.value}
            </Text>
        </View>
    )
}