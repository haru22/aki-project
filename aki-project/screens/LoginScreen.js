import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import firebase from 'firebase';

export default class LoginScreen extends React.Component {
	state = { email: '', password: '', error: '', loading: false };
  handleLogin() {
    this.setState({ error: '', loading: true });
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ error: '', loading: false });
      })
			.catch((error) => this.setState({ error: error.message }));
			console.log(this.state.error);
  }
  render() {
    return (
      <View style={styles.container}>
     
        <View style={styles.logoContainer}> 
        	<Image 
        		style={styles.logo}
        		source={require('../assets/images/logo.png')}
	        	/>
	        <View style={styles.inputContainer}>
	        <TextInput 
	        	style={styles.input}
						placeholder="username or email"
						keyboardType="email-address"
						enablesReturnKeyAutomatically
						//onEndEditing to check if email entered is valid TO-Do
						onChangeText={(email) => this.setState({email})}
	        	/>
	         <TextInput 
	         	style={styles.input}
						 placeholder="password"
						 enablesReturnKeyAutomatically
						 secureTextEntry
						 onSubmitEditing ={this.handleLogin.bind(this)}
						 onChangeText={(password) => this.setState({password})}
	        	/>
	        <TouchableOpacity style={styles.buttonContainer}>
	        	<Text style={styles.buttonText}>Login</Text>
	        </TouchableOpacity>
	         <TouchableOpacity style={styles.buttonContainer}>
	        	<Text style={styles.buttonText}>Join</Text>
	        </TouchableOpacity>
	        </View>
   		</View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		//alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
	},
	text: {
		color: 'red',
	}
})