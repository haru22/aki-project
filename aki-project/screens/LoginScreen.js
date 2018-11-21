import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image, StatusBar} from 'react-native'
import { Button, Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'firebase'

export default class Login extends React.Component {
  state = { email: '', password: '', errorMessage: null , displayError:false}

  handleLogin = () => {
    const { email, password } = this.state
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Main'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }

  render() {
    return (
		<ImageBackground source={require('../assets/images/login-background2.jpg')} style={{width: '100%', height: '100%'}}>
      <StatusBar
				barStyle="light-content"
			/>
			<View style={styles.container}>
				<Image source={require('../assets/images/logo.png')} style={{width: 100, height: 100}} resizeMode='contain' />
				<Input
					placeholder='Email'
					placeholderTextColor='#cfd1c0'
					autoCapitalize="none"
					inputStyle={{color: 'white'}}
					leftIcon={
						<Icon
							name='user'
							size={24}
							color='#cfd1c0'
						/>}
					//errorStyle={(displayError) ? { color: 'red' } : null}
					//errorMessage={displayError ? 'Enter a valid email address' : null}
					onChangeText={email => this.setState({ email })}
							value={this.state.email}
				/>
				<Input
					secureTextEntry
					placeholder='Password'
					placeholderTextColor='#cfd1c0'
					autoCapitalize="none"
					inputStyle={{color: 'white'}}
					leftIcon={
					<Icon
						name='lock'
						size={24}
						color='#cfd1c0'
					/>
					}
					shake={true}
					//errorStyle={(displayError) ? { color: 'red' } : null}
					//errorMessage={displayError ? 'Incorrect password' : null}
					onChangeText={password => this.setState({ password })}
					value={this.state.password}
				/>
				{this.state.errorMessage &&
							<Text style={{ color: '#ff4a66', fontSize: 16, padding: 5}}>
								{this.state.errorMessage}
							</Text>}
				<Button
					title="Login"
					titleStyle={{color:"#1e4340" }}
					borderRadius={5}
					icon= { <Icon
						name='sign-in'
						size={20}
						color= 'grey'
						type='fontawesome'
					/>
					}
					iconRight
					shake={true}
					buttonStyle={styles.button}
					onPress={this.handleLogin} 
				/>
				<Text style={{color:'white'}}>Don't have an account?</Text>
						<Button
							title="Sign Up"
					onPress={() => this.props.navigation.navigate('SignUp')}
					buttonStyle={styles.signupButton}
					titleStyle={{fontSize:20, fontWeight:'bold' }}
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
  button: {
	  width: 250,
	  backgroundColor: '#66e2d6',
  },
  signupButton: {
		borderWidth: 0,
		backgroundColor: null
  }
  
})