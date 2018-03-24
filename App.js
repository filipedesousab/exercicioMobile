import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

export default props => (
  <View style={{ flex: 1 }}>
    <View style={styles.viewImagem}>
      <Image style={styles.imagem}source={require('./imgs/fbimg.png')} />
    </View>
    <View style={styles.viewFormulario}>
      <View>
        <TextInput
          style={[styles.textInput, { marginBottom: 10 }]}
          placeholder="Login ou Email"
          underlineColorAndroid="#1ddfec"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Senha"
          underlineColorAndroid="#1ddfec"
          secureTextEntry
        />
      </View>
      <TouchableHighlight
        style={styles.button}
        onPress={() => false}
        underlayColor="#005ad1"
      >
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableHighlight>
    </View>
  </View>
);

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#1ddfec',
    marginHorizontal: 30,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
    marginBottom: 5,
    height: 40,
    backgroundColor: '#006eff'
  },
  textoBotao: {
    color: '#FFF',
    fontWeight: '700'
  },
  imagem: {
    height: 150,
    width: 150,
  },
  viewImagem: {
    flex: 5,
    alignItems: 'center',
    marginTop: 70,
  },
  viewFormulario: {
    flex: 2,
    justifyContent: 'space-between',
  },
});
