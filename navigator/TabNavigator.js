import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../components/Home';
import Profile from '../components/Profile';
import Feed from '../components/Feed';

const TabNavigator = () => {
    
    const Tab = createBottomTabNavigator();

    return (
            <Tab.Navigator screenOptions={{tabBarIconStyle:{display:'none'},tabBarLabelPosition:'beside-icon'}}>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Profile" component={Profile} />
                <Tab.Screen name="Feed" component={Feed} />
            </Tab.Navigator>
    )
}

export default TabNavigator
