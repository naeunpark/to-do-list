import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import FeedScreen from '../screens/FeedScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LogInScreen from '../screens/LogInScreen';

const TabNavigation = TabNavigator(
    {
        Home:{
            screen: FeedScreen,
            navigationOptions: {
                tabBarIcon:({ focused }) => (
                    <Ionicons 
                        name={ focused ? "ios-list-box" : "ios-list-box-outline"}
                        size={30}
                        color={'black'}
                    />
                )
            }
        },
        Profile:{
            screen: ProfileScreen,
            navigationOptions: {
                tabBarIcon:({ focused }) => (
                    <Ionicons 
                        name={ focused ? "ios-home" : "ios-home-outline"}
                        size={30}
                        color={'black'}
                    />
                )
            }
        },
        LogOut:{
            screen: LogInScreen,
            navigationOptions: {
                tabBarIcon:({ focused }) => (
                    <Ionicons 
                        name={ focused ? "ios-search" : "ios-search-outline"}
                        size={30}
                        color={'black'}
                    />
                )
            }
        }
    },
    {
    }
)

export default TabNavigation;