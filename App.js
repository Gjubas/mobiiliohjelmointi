import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Alert, TextInput, Image } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');

  const buttonPressed = () => { 
    Alert.alert('You typed: ' + text + ' and ' + text2); 
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: 'https://www.sttinfo.fi/data/images/00304/be7db042-6b61-49f9-9bcd-7fd41b7bc35d.jpg'}} />
      <TextInput style={styles.input} keyboardType='numeric' onChangeText={text => setText(text)} value={text}/>
      <TextInput style={styles.input} onChangeText={text2 => setText2(text2)} value={text2}/>
      <Button onPress={buttonPressed} title="Press me" />
      <Text>This is text</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  image : {
    width: 250,
    height: 100
  },
  input : {
    width:200  , 
    borderColor: 'gray', 
    borderWidth: 1
  }
});