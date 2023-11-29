import {Text, View} from 'react-native';
import React from 'react';

export default function DetailsScreen({navigation}) {
  return (
    <View>
      <Text onPress={() => navigation.navigate('Home')}>
        DetailsScreen
      </Text>
    </View>
  )
}
