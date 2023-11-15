import React from 'react';
import {View, Text} from 'react-native';

export default function App()
{
  return (
    <View style={{ 
        flex: 1, //ocupa a tela toda
        justifyContent: 'center', 
        alignItems: 'center'}}
      >
      <Text>React Native</Text>
    </View>
  )
}