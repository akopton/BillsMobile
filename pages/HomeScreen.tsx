import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, StyleSheet, Button, FlatList } from 'react-native';
import { Bill } from '../components/Bill';
import { Tile } from '../components/Tile';
import { billsList } from '../constants/bills';
import { TBill } from '../types/Bill';
import { TCategory } from '../types/Category';
import { data } from '../constants/data';
import { globalStyles } from '../styles/global';


// wyświetla wszystkie miesiące z danego roku


export const HomeScreen = ({route, navigation}:any) => {

    const {year} = data

    return (
        <ScrollView style={globalStyles.page}>
            <View style={globalStyles.listColumn}>
                {
                    year.map((month, id) => (
                        <Tile key={id} navigation={navigation} props={month}/>
                    ))
                }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
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
    }
  });