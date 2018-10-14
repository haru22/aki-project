import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import Fire from '../components/Fire';

export default class ChatScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: (navigation.state.params || {}).name || 'chats',
    });
    state = {
        messages: [],
    };

    get user() {
        return {
          name: this.props.navigation.state.params.name,
          //_id: Fire.shared.uid,
          _id: 'vMovSEJrBeSqPGl9rFo82wTnGwL2',
        };
    }
  render() {
    return (
        <GiftedChat
          messages={this.state.messages}
          onSend={Fire.shared.send}
          user={this.user}
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