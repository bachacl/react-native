import React, {useState} from 'react';
import {Button, TextInput, View} from 'react-native';

const ACLTextInput = () => {
  const [text, setText] = useState('');

  const handleInputChange = (inputText: string) => {
    setText(inputText);
  };

  const handleButtonPress = () => {
    console.log('Input value:', text);
  };

  return (
    <View>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={handleInputChange}
        value={text}
      />
      <Button title="Submit" onPress={handleButtonPress} />
    </View>
  );
};

export default ACLTextInput;
