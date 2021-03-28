import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from '../types';
import CreatePostScreen from './CreatePostScreen';
import DetailsScreen from './DetailsScreen';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;
type Props = {
  route: HomeScreenRouteProp;
  navigation: HomeScreenNavigationProp;
};
const Tab = createBottomTabNavigator();
const HomeScreen = ({ route, navigation }: Props) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Messages" component={DetailsScreen} />
      <Tab.Screen name="Feed" component={CreatePostScreen} />
    </Tab.Navigator>
  );
};
export default HomeScreen;
