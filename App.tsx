import { NavigationContainer, Route, TabRouter } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useRef, useState } from 'react';
import { ScrollView, Text, StyleSheet, Button } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AddNewBill } from './pages/AddNewBill';
import { CategoryPage } from './pages/CategoryPage';
import { HomeScreen } from './pages/HomeScreen';
import { List } from './pages/List';
import { SecondScreen } from './pages/SecondScreen';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator()

export default function App() {
  const [nextPage, setNextPage] = useState<boolean>(false)
  const categoryRef = useRef()

    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={HomeScreen} initialParams={(route:any) => {return route}}/>
            <Stack.Screen name='List' component={List} />
            <Stack.Screen name='SecondScreen' component={SecondScreen} />
            <Stack.Screen name='AddNewBill' component={AddNewBill} options={{title: 'Dodaj rachunek'}}/>
            <Stack.Screen 
              name='CategoryPage' 
              component={CategoryPage} 
              options={({route, navigation}:any) => {
                const { props } = route.params
                return (
                  {title: props.name}
                ) 
              }}/>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
}



