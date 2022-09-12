import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import concert from './assets/concert.png';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

const App = () => {
  const [ticket, setTicket] = useState(0),
  [total, setTotal] = useState(0)

  return (
    <View style={styles.container}>
      <Text style={{paddingBottom: 30, fontSize: 50}}>Ticket Vault</Text>
      <TextInput
        style={styles.textPut}
        placeholder="Number of Tickets"
        onChangeText={newText => setTicket(newText)}
      />

      <Text style={{padding: 5}}> </Text>

      <TouchableOpacity style={styles.button}
        onPress={() => {setTotal (parseFloat((ticket * 99.99).toFixed(2)));}}>
        <Text style={styles.buttonText}> Calculate </Text>
       </TouchableOpacity>

        <Text style={{padding: 50, fontSize: 25}}>
          Ticket Cost: ${total}
        </Text>

        <Image source={concert} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textPut: {
    backgroundColor: 'white',
    paddingLeft: 60,
    paddingRight: 60,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 2,
  },
  button: {
    borderRadius: 5,
    paddingLeft: 60,
    paddingRight: 60,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#f98b88'
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  }
});

export default App;