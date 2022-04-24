import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import gamesList from '../gamesList/gamesList';
import gameTrailer from '../gameTrailer/gameTrailer';
import settingsView from '../settings/settings';

const Tab = createBottomTabNavigator();
export default function gamesApp({ navigation }) {
    return (
            <Tab.Navigator screenOptions={{headerShown: false}}>
              <Tab.Screen name="Lista" component={gamesList}/>
              <Tab.Screen name="Video" component={gameTrailer} options={{headerShown: true, title: 'Outer Wilds Trailer'}}/>
              <Tab.Screen name="Settings" component={settingsView} options={{headerShown: true}}/>
            </Tab.Navigator>
    );
}
