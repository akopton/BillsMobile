import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, ScrollView, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import { Bill } from '../components/Bill';
import { billsList } from '../constants/bills';
import { CategoryPage } from '../pages/CategoryPage';
import { TBill } from '../types/Bill';


export const Tile = ({navigation, props}:any) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('CategoryPage', {props})} style={styles.tile}>
            <View>
                <Text style={styles.content}>{props.name}</Text>
                <Text>{props.value}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    tile: {
        marginBottom: 10,
        marginRight: 10,
        marginLeft: 10,
        flex: 1,
        padding: 20,
        borderWidth: 2,
        borderColor: '#5f5f5f',
        borderRadius: 20,
    },
    content: {
        textAlign: 'center',
        lineHeight: 100,
        fontSize: 40,
    }
})