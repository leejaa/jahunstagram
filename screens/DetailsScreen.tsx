import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { RootStackParamList } from '../types';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;
type DetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Details'>;
type Props = {
  route: DetailScreenRouteProp;
  navigation: DetailScreenNavigationProp;
};
const DetailsScreen = ({ route, navigation }: Props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detail Screen ItemId: {route?.params?.itemId}</Text>
      <Button
        title="버튼"
        onPress={() => {
          navigation.setParams({ itemId: 2 });
        }}
      ></Button>
    </View>
  );
};
export default DetailsScreen;
