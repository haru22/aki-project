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
  render() {
    return (
        <GiftedChat
          messages={this.state.messages}
          onSend={Fire.shared.send}
          user={this.user}
          //user='vMovSEJrBeSqPGl9rFo82wTnGwL2'
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