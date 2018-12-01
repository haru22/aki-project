import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { database } from 'firebase';

export default class MessageScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        list: [
          // {
          //   name: 'Amy Farha',
          //   avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          //   text: 'Vice President'
          // },
          // {
          //   name: 'Chris Jackson',
          //   avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          //   text: 'Vice Chairman'
          // },
        ]
    }
  }

  static navigationOptions = {
    title: 'Inbox',
  };

  componentDidMount() {
    console.log("component mount is happening yay!")
    var query = database().ref('users').orderByChild('organization').equalTo("org1");
    query.on("value", (snap) => {
        var users = snap.toJSON();
        this.setState({
          list: Object.values(users).map(item => {
            return { name: item.name, year: item.year };
          })
        });
    })
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Messages will go here */}
        <List>
          {
            this.state.list.map((item) => (
              <ListItem
                roundAvatar
                hideChevron
                avatarStyle={styles.avatarContainer}
                avatar={{uri:item.avatar_url}}
                key={item.name}
                title={item.name}
                titleStyle={styles.listTitle}
                containerStyle={styles.listContainer}
                subtitle={
                  <View style={styles.subtitleView}>
                    <Text style={styles.subtitleText}>{item.text} 5 months ago</Text>
                  </View>
                }
                onPress={()=>{this.props.navigation.navigate('Chat', {name:"name"})}}
              />
            ))
          }
        </List>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -20,
    backgroundColor: '#fff',
  },
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  listContainer: {
    //height: 100
  },
  subtitleText: {
    color:"grey",
  },
  listTitle: {
    fontSize: 20,
  },
  avatarContainer: {
    borderColor: "white",
  },
});