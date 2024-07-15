import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import TabNavigator from './src/navigators/TabNavigator'

import HomeScreen from './src/screens/HomeScreen'
import DetailsScreen from './src/screens/DetailsScreen'
import PaymentScreen from './src/screens/PaymentScreen'
import OrderHistoryScreen from './src/screens/OrderHistoryScreen'
import CartScreen from './src/screens/CartScreen'
import FavoritesScreen from './src/screens/FavoritesScreen'

const Stack = createNativeStackNavigator()

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name='Tab'
                    component={TabNavigator}
                    options={{ animation: 'slide_from_bottom' }}
                />
                <Stack.Screen
                    name='Home'
                    component={HomeScreen}
                    options={{ animation: 'slide_from_bottom' }}
                />
                <Stack.Screen
                    name='Details'
                    component={DetailsScreen}
                    options={{ animation: 'slide_from_bottom' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App

const styles = StyleSheet.create({})
