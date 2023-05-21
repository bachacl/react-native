import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';

class ClassComponent extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((prevState: any) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <View>
        <Text>Count: {this.state.count}</Text>
        <Button title="Increment" onPress={this.incrementCount} />
      </View>
    );
  }
}

export default ClassComponent;
