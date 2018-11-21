import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  StatusBar,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          backgroundColor: "#CED0CE",
        }}
      />
    );
  };

  render() {
    return (
      <ImageBackground source={require('../assets/images/home-background.jpg')} style={{width: '100%', height: '100%'}}>
        <StatusBar
          barStyle="light-content"
        />
        <View style={styles.container}>
          <FlatList
            data={[{title: 'My Groups', icon: 'sitemap',key:'item1'},{title: 'Browse Groups', icon: 'search',key:'item2'},{title: 'Events', icon: 'podcast', key:'item3'},{title: 'Invite Friends', icon: 'plus-square-o', key:'item4'}]}
            ItemSeparatorComponent={this.renderSeparator}
            columnWrapperStyle={{marginBottom:0}}
            numColumns={2}
            renderItem={({item, separators, index}) => (
              <View style={[ styles.gridItem, index%2==0 ? { borderEndWidth: 1, borderEndColor:'#CED0CE' } : { marginLeft: 0 } ]}>
                <Icon
                  name={item.icon}
                  size={24}
                  color='#66e2d6'
                />
                <Text style={{color:'white'}}>{item.title}</Text>
              </View>
            )}
          /> 
        </View>
      </ImageBackground>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',  
  },
  gridItem: {
    flex: 1,  
    height: 130, 
    justifyContent:'space-evenly',
    marginVertical: 20,
    alignItems: "center" ,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
