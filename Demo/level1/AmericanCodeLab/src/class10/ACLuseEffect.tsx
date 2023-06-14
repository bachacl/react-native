import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

const MyComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from an API
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <View>
      {data.map((item: any) => (
        <Text key={item.id}>{item.name}</Text>
      ))}
    </View>
  );
};

export default MyComponent;
