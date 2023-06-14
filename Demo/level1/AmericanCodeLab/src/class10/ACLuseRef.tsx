import React, {useRef} from 'react';
import {Button, TextInput, View} from 'react-native';

const MyComponent = () => {
  const inputRef = useRef<any>(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <View>
      <TextInput ref={inputRef} />
      <Button title="Focus Input" onPress={focusInput} />
    </View>
  );
};

export default MyComponent;
