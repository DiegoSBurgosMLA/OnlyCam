import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';


export class App extends Component {

  constructor(props){
  super(props)
    this.state= {
      show: true,
    }
  }


  onSuccess = (e) => {
    Linking
      .openURL(e.data)
      .catch(err => console.error('An error occured', err));
  }

  render() {

    return (

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Test - Comentar esto y descomentar el codigo de abajo</Text>
      </View>


      /*<QRCodeScanner onRead = {this.onSuccess}
        topContent = {
          <Text style={styles.centerText}>
            Go to <Text style={styles.textBold}>QR_code</Text> QR code.
          </Text>
        }
        bottomContent = {

          <TouchableOpacity style={styles.buttonTouchable}>
          <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>

        } />*/
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  decoText:{
    
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
export default App;