import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

const App = createStackNavigator();

import Login from '../pages/Login'

type propsNavigationStack = {
    Home: undefined;
    LoginEntry?: {
        name: string;
    }
    Search: undefined;
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>

const Approutes: React.FC = () => (
    <App.Navigator initialRouteName="home"
        screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: '#fff' }
        }}
    >
        <App.Screen name="Login" component={Login} />
      
    </App.Navigator>
);

export default Approutes;