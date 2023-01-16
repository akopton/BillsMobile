import { View, ScrollView, Text, StyleSheet, Button, FlatList } from 'react-native';
import { Bill } from '../components/Bill';
import { billsList } from '../constants/bills';
import { TBill } from '../types/Bill';

export const HomeScreen = ({navigation}:any) => {

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
            <Text>Ostatnio dodane</Text>
            <View style={styles.nav}>
                <Button title='Bills' onPress={()=>navigation.navigate('List')}></Button>
            </View>
            <Text style={styles.title}>Elo byniu</Text>
            <View style={styles.billsList}>
                {
                    billsList.map((bill:TBill, id:number) => {
                        return (
                            <Bill bill={bill} id={id}/>
                        )
                    })
                }
                
            </View>
            <View style={styles.title}>
                <Text style={{textAlign: 'center'}}>
                    {newSum}
                </Text>
            </View>
            <View>
                <Button title='Dodaj nowy rachunek' onPress={()=>navigation.navigate('AddNewBill')}></Button>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    page: {
      height: 100,
      flex: 1,
      backgroundColor: '#eaeaea',
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