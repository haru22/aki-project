import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'


export default class LoginScreen extends React.Component {
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
	        	placeholder="username or email      "
	        	style={styles.input}
	        	/>
	         <TextInput 
	         	placeholder="password       "
	         	style={styles.input}
	        	/>
	        <TouchableOpacity style={styles.buttonContainer}>
	        	<Text style={styles.buttonText}>JOIN</Text>
	        </TouchableOpacity>
	         <TouchableOpacity style={styles.buttonContainer}>
	        	<Text style={styles.buttonText}>CREATE</Text>
	        </TouchableOpacity>
	        </View>
   		</View>

      </View>
    	
    );
  }
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
		backgroundColor: '#0071FF',
	},
	text: {
		
	},
	logoContainer: {
		alignItems: 'center',
		flexGrow: 1,
		justifyContent: 'center',
	},
	logo: {
		width: 100,
		height: 100,
	},
	input: {
		height: 40,
		backgroundColor: '#90D6FF',
		marginBottom: 20,
		color: '#FFF',
		paddingHorizontal: 10
	},
	inputContainer: {
		padding: 20,
	},
	buttonContainer: {
		backgroundColor: '#2980b9',
		paddingVertical: 15,
		paddingHorizontal: 10
	},
	buttonText: {
		textAlign: 'center',
		color: '#FFFFFF',
		paddingHorizontal: 10,
	},
})