import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, Button } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AddNewBill } from './pages/AddNewBill';
import { CategoryPage } from './pages/CategoryPage';
import { HomeScreen } from './pages/HomeScreen';
import { List } from './pages/List';
import { SecondScreen } from './pages/SecondScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  const [nextPage, setNextPage] = useState<boolean>(false)

    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='List' component={List} />
            <Stack.Screen name='SecondScreen' component={SecondScreen} />
            <Stack.Screen name='AddNewBill' component={AddNewBill} options={{title: 'Dodaj rachunek'}}/>
            <Stack.Screen name='CategoryPage' component={CategoryPage} options={{title: 'Kategoria 1'}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
}



