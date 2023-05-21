import React from 'react';
import {Text, View} from 'react-native/types';

const FunctionalComponent = (props: any) => {
  return (
    <View>
      <Text>{props.message}</Text>
    </View>
  );
};

export default FunctionalComponent;
