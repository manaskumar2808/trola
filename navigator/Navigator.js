import React from 'react';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createTabNavigator,createBottomTabNavigator } from 'react-navigation-tabs';

import { MaterialCommunityIcons, Feather, Foundation, MaterialIcons, Octicons, FontAwesome } from '@expo/vector-icons';

import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import AuthScreen from '../screens/AuthScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PostScreen from '../screens/PostScreen';
import ExploreScreen from '../screens/ExploreScreen';
import ActivityScreen from '../screens/ActivityScreen';
import CommentScreen from '../screens/CommentScreen';

import HomeSVG from '../svgs/HomeSVG';

import HeaderLeft from '../components/HeaderLeft';

import Colors from '../constants/Colors';

const headerConfig = {
    defaultNavigationOptions: {
        headerTitle: "Outreach",
        headerStyle: {
            backgroundColor: Colors.secondary,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
            fontFamily: 'billabong',
            fontSize: 35,
        },
        headerTitleContainerStyle: {
            marginTop: 40,
            justifyContent: "center",
            alignItems: "center",
        },
        headerTitleAlign: "flex-start",
        headerLeft: () => (
            <HeaderLeft>
                <Feather name="camera" size={28} color="#fff" />
            </HeaderLeft>
        ),
        headerLeftContainerStyle: {
            padding: 20,
        },
        headerRight: () => (
            <FontAwesome 
                name="send" 
                size={28} 
                color="#fff" 
                onPress={() => {}}
            />
        ),
        headerRightContainerStyle: {
            padding: 20,
        }
    }
};

const HomeStackNavigator = createStackNavigator({
    home: HomeScreen,
    comment: CommentScreen,
}, headerConfig);

const ExploreStackNavigator = createStackNavigator({
    explore: ExploreScreen,
}, headerConfig);

const PostStackNavigator = createStackNavigator({
    post: PostScreen,
}, headerConfig);

const ActivityStackNavigator = createStackNavigator({
    activity: ActivityScreen,
}, headerConfig);

const ProfileStackNavigator = createStackNavigator({
    profile: ProfileScreen,
}, headerConfig);


const TabNavigator = createBottomTabNavigator({
    homeTab: {
        screen: HomeStackNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => (
                tabInfo.focused ?
                <MaterialCommunityIcons name="home-variant" size={28} color="#fff" />
                    : 
                <MaterialCommunityIcons name="home-variant-outline" size={28} color="#fff" />
            )
        }
    },
    exploreTab: {
        screen: ExploreStackNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => (
                tabInfo.focused ?
                <MaterialCommunityIcons name="compass" size={28} color="#fff" />
                    :
                <MaterialCommunityIcons name="compass-outline" size={28} color="#fff" />
            )
        }
    },
    postTab: {
        screen: PostStackNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => (
                tabInfo.focused ?
                <MaterialIcons name="add-box" size={28} color="#fff" />
                    :
                <Octicons name="diff-added" size={24} color="#fff" />
            )
        }
    },
    activityTab: {
        screen: ActivityStackNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => (
                <Octicons name="search" size={24} color="#fff" />
            )
        }
    },
    profileTab: {
        screen: ProfileStackNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => (
                tabInfo.focused ? 
                <FontAwesome name="user-circle" size={24} color="#fff" /> 
                    :
                <FontAwesome name="user-circle-o" size={24} color="#fff" />
            )
        }
    },
},{
    tabBarOptions: {
        showLabel: false,
        activeTintColor: "#fff",
        style: {
            backgroundColor: Colors.background,
        },
    }
});


const AppNavigator = createSwitchNavigator({
    splash: SplashScreen,
    auth: AuthScreen,
    app: TabNavigator,
});


export default createAppContainer(AppNavigator);