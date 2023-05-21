import React, {useMemo} from 'react';
import {Text, View} from 'react-native';

const MyComponent = ({data}: any) => {
  const total = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      sum += data[i];
    }
    return sum;
  }, [data]);

  return (
    <View>
      <Text>Total: {total}</Text>
    </View>
  );
};

export default MyComponent;
