import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Sign Up</Text>
        
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