import {Text, View} from 'react-native';
import React from 'react';

export default function HomeScreen({navigation}) {
  return (
    <View>
      <Text onPress={() => navigation.navigate('Profile')}>
        HomeScreen
      </Text>
    </View>
  )
}
