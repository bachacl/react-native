import React, {useCallback, useState} from 'react';
import {Button, Text, View} from 'react-native';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <View>
      <Button title="Increment" onPress={incrementCount} />
      <Text>Count: {count}</Text>
    </View>
  );
};

export default MyComponent;
