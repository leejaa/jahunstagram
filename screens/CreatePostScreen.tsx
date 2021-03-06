import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { RootStackParamList } from '../types';

type CreatePostScreenRouteProp = RouteProp<RootStackParamList, 'CreatePost'>;
type CreatePostScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CreatePost'>;
type Props = {
  route: CreatePostScreenRouteProp;
  navigation: CreatePostScreenNavigationProp;
};
const CreatePostScreen = ({ route, navigation }: Props) => {
  const [postText, setPostText] = React.useState('');
  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass params back to home screen
          navigation.navigate('Home', { post: postText });
        }}
      />
    </>
  );
};
export default CreatePostScreen;
