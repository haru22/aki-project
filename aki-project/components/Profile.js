import React from 'react';
import { View, Text, StyleSheet, Image, SectionList } from 'react-native';

export default class Profile extends React.Component {
  _renderItem = ({ item }) => {
    return (
        <SectionContent>
            <Text style={styles.sectionContentText}>
            {item.value}
            </Text>
        </SectionContent>
    );
  };

  _renderSectionHeader = ({ section }) => {
    return <SectionHeader title={section.title} />;
  };
    
  render() {
    const sections = [
        { data: [{ value: "Diablo Valley College" }], title: 'School Name' },
        { data: [{ value: "Sophomore" }], title: 'Year' },
        { data: [{ value: "Software Engineering Intern" }], title: 'Job Title' },
        { data: [{ value: "Acutulus Enterprises" }], title: 'Work Place' },
    ];
    
    return (
      <View>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={require('../assets/images/avatar.png')}/>
                <Text style={styles.name}> Diane Tobit</Text>
                <Text style={styles.userInfo}>dianetobit@gmail.com </Text>
                <Text style={styles.userInfo}>Dublin, CA </Text>
            </View>
          </View>
          <View style={styles.body}>
            <SectionList
                //style={styles.container}
                renderItem={this._renderItem}
                renderSectionHeader={this._renderSectionHeader}
                stickySectionHeadersEnabled={true}
                keyExtractor={(item, index) => index}
                sections={sections}
            />
          </View>
      </View>
    );
  }
}

const SectionHeader = ({ title }) => {
    return (
      <View style={styles.sectionHeaderContainer}>
        <Text style={styles.sectionHeaderText}>
          {title}
        </Text>
      </View>
    );
};

const SectionContent = props => {
    return (
      <View style={styles.sectionContentContainer}>
        {props.children}
      </View>
    );
};

const styles = StyleSheet.create({
    header:{
        backgroundColor: "#66e2d6",
    },
    headerContent:{
        padding:30,
        alignItems: 'center',
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom:10,
    },
    name:{
        fontSize:22,
        color:"#000000",
        fontWeight:'600',
    },
    userInfo:{
        fontSize:16,
        color:"#778899",
        fontWeight:'600',
    },
    body:{
        backgroundColor: "#F5F5DC",
        height:500,
    },
    sectionContentContainer: {
        paddingTop: 20,
        paddingBottom: 12,
        paddingHorizontal: 15,
    },
    sectionContentText: {
        color: '#808080',
        fontSize: 14,
    },
    sectionHeaderContainer: {
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#ededed',
    },
    sectionHeaderText: {
        fontSize: 14,
    },
});