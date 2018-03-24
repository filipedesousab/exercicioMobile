import React, { Component } from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  TextInput,
  View
} from 'react-native';

export default class App extends Component<Props> {
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <View style={{ flex: 2, alignItems: 'center', marginTop: 70, }}>
          <Image source={require('./imgs/fbimg.png')} />
        </View>
        <View style={{ flex: 1, backgroundColor: 'rgb(254, 240, 252)'}}>
          <TextInput
            placeholder="Login ou Email"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
