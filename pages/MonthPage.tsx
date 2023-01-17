// wyświetla wszystkie kategorie które mają rachunki

import { useEffect } from "react"
import { View, Text, ScrollView, StyleSheet } from "react-native"
import { Tile } from "../components/Tile"
import { globalStyles } from "../styles/global"

export const MonthPage = ({route, navigation}:any) => {

    const {props} = route.params

    return (
        <ScrollView style={globalStyles.page}>
            <View>
                <Text style={styles.title}>
                    Miesięczny wydatek: <Text style={{fontWeight: 'bold'}}>{props.value().toFixed(2)}zł</Text>
                </Text>
            </View>
            <View style={globalStyles.listColumn}>
                {
                    props.categories.map((category:any, id:number) => (
                        <Tile key={id} navigation={navigation} props={category}/>
                    ))
                }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        marginBottom: 20,
    }
})