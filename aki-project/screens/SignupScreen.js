import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image } from 'react-native'
import { Button, Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'firebase'

export default class SignUp extends React.Component {
  state = {}

  render() {
    return (
	<ImageBackground source={require('../assets/images/login-background2.jpg')} style={{width: '100%', height: '100%'}}>
      <View style={styles.container}>
	    <Image source={require('../assets/images/logo.png')} style={{width: 100, height: 100}} resizeMode='contain' />
		<Button
          title="Log in"
		  onPress={() => this.props.navigation.navigate('Auth')}
		  buttonStyle={styles.loginButton}
		  fontSize='100px'
		  fontWeight='bold'
        />
		
      </View>
	</ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  loginButton: {
    borderWidth: 0,
	backgroundColor: null
  }
  
})