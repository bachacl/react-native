import React from 'react';
import {Button, View} from 'react-native';

const ACLButton = () => {
  const handleButtonPress = () => {
    console.log('Button pressed!');
  };

  return (
    <View>
      <Button title="Click me" onPress={handleButtonPress} />
    </View>
  );
};

export default ACLButton;
