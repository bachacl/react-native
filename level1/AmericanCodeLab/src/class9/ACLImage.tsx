import React from 'react';
import {Image, View} from 'react-native';

const ACLImage = () => {
  return (
    <View>
      <Image
        source={require('./path/to/local/image.png')}
        style={{width: 200, height: 200}}
      />
      <Image
        source={{uri: 'https://example.com/path/to/remote/image.png'}}
        style={{width: 200, height: 200}}
      />
    </View>
  );
};

export default ACLImage;
