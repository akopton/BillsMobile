import React from 'react';
import { View, ScrollView, Text, StyleSheet, Button, FlatList } from 'react-native';
import { Bill } from '../components/Bill';
import { Tile } from '../components/Tile';
import { billsList } from '../constants/bills';
import { TBill } from '../types/Bill';

export const HomeScreen = ({navigation}:any) => {

    const [categories, useCategories] = React.useState<{}[]>([
        {
            name: 'spożywcze',
            value: 0
        },
        {
            name: 'paliwo',
            value: 0
        },
        {
            name: 'opłaty',
            value: 0
        }
    ])


    const sum = () => {
        let value = 0
        for (let i = 0; i < billsList.length; i++) {
            value += billsList[i].value
        }
        return value
    }

    const newSum = sum()

    return (
        <ScrollView style={styles.page}>
            <View >
                {
                    categories.map(category => (
                        <Tile navigation={navigation} props={category}/>
                    ))
                }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    page: {
        padding: 20,
        height: 100,
        flex: 1,
        backgroundColor: '#eaeaea',
    },
    row: {
        flex: 2,
        flexDirection: 'row',
    },
    nav: {
        flex: 1,
    },
    title: {
      borderBottomColor: '#000000',
      marginTop: 16,
      paddingVertical: 8,
      borderWidth: 4,
      borderColor: '#20232a',
      borderRadius: 6,
      backgroundColor: '#61dafb',
      color: '#20232a',
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
    },
    billsList: {
        flex: 10,
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
  });