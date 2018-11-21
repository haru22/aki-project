import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import Fire from '../components/Fire';

export default class ChatScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      messages: [],
    }
  }
  static navigationOptions = ({ navigation }) => ({
      title: navigation.getParam('name', 'chats'),
  });

  get user() {
      return {
        name: "Diane Test",
        //name: this.props.navigation.state.params.name,
        _id: Fire.shared.uid,
      };
  }

  // TODO:
  // - fix timestamp 
  // - incorporate green theme in the UI and the dark background
  // - make text area move up with keyboard (look up on react-native-gifted-chat repo)
  // - add some options to the text area (look up actions for react-native-gifted-chat)

  render() {
    return (
        <GiftedChat
          messages={this.state.messages}
          onSend={Fire.shared.send}
          user={this.user}
          //user='vMovSEJrBeSqPGl9rFo82wTnGwL2'
          showUserAvatar
        />
    );
  }

  componentDidMount() {
    Fire.shared.on(message =>
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      }))
    );
  }
  componentWillUnmount() {
    Fire.shared.off();
  }
}