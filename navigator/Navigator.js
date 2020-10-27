import React from 'react';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import AuthScreen from '../screens/AuthScreen';
import Colors from '../constants/Colors';

const HomeNavigator = createStackNavigator({
    home: HomeScreen,
}, {
    defaultNavigationOptions: {
        headerTitle: "Outreach",
        headerStyle: {
            backgroundColor: Colors.secondary,
        },
        headerTintColor: "#fff",
    }
});

const AppNavigator = createSwitchNavigator({
    splash: SplashScreen,
    auth: AuthScreen,
    app: HomeNavigator,
});


export default createAppContainer(AppNavigator);