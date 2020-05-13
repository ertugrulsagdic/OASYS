import React, {Component} from 'react';
import {Text, View,StyleSheet,TextInput, TouchableHighlight, FlatList} from 'react-native';
import  {Card, Divider} from 'react-native-elements';
import Icon from "react-native-vector-icons/EvilIcons";
import Avatar from 'react-native-user-avatar';

const PostBulkMessage = () => {
    
  const postData = [
    {
      id: '1',
      name: 'Berna Altinel'
    },
  ];

  const Post = ({props}) => {
    return(
    <View style={{ margin: 20, marginTop:30, flex:1}}>
      <View style={{ flexDirection: 'row' }}>
            <Avatar 
              style={{ marginBottom: 10, marginRight: 5 }}
              name= {props.name}
            />
            <Text style={{ fontSize: 20, }}> {props.name} </Text>
          </View>
        <Divider style={{ backgroundColor: 'black' }} />
        <Card containerStyle={{height:200, marginTop:20}}>
            <TextInput placeholder = "Write Your Question" underlineColorAndroid='transparent'/>
        </Card>
        <TouchableHighlight   underlayColor='transparent' onPress={() => {}}>
            <View style={{alignItems:'flex-end', marginRight:10}}>
                <Icon name="sc-telegram" style={styles.icon}></Icon>
            </View>
        </TouchableHighlight>
    </View>

      );
  }

  return (
    <View style={styles.container}>
      <FlatList 
        data={postData}
        renderItem={({item}) => <Post props={item} /> }
        keyExtractor={post => post.id}
      />    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 50,
    marginTop: 10,
  },
  userText:{
    marginLeft:60, 
    marginTop: 25,
    fontSize:20, 
    color:'grey'
  }
});

export default PostBulkMessage;