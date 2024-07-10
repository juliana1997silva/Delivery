import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../pages/Home';
import RegistryDelivery from '../pages/RegistryDelivery';

const Tab = createBottomTabNavigator();

export default function Authroutes() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cadastros"
        component={RegistryDelivery}
        options={{
          tabBarLabel: 'Cadastros',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-box-multiple" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}