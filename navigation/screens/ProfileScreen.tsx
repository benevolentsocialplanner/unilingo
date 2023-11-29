import {Text, View} from 'react-native';
import React from 'react';

export default function ProfileScreen({navigation}) {
  return (
    <View>
      <Text onPress={() => navigation.navigate('Home')}>
        ProfileScreen
      </Text>
    </View>
  )
}
