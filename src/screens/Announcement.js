import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { Card, Input, Divider } from 'react-native-elements';
import Button from 'react-native-button/Button';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Avatar from 'react-native-user-avatar';


const Announcement = (props) => {

  const postData = [
    {
      id: '1',
      name: 'Ertugrul Sagdic',
      post: 'The idea with React Native Elements is more about component structure than actual design.',
      comment: 'true'
    },
    {
      id: '2',
      name: 'Melisa Donmez',
      post: 'The idea with React Native Elements is more about component structure than actual design.',
      comment: 'false'
    },
    {
      id: '3',
      name: 'Ekin Nohutcu',
      post: 'The idea with React Native Elements is more about component structure than actual design.',
      comment: 'true'
    },
    {
      id: '4',
      name: 'Berna Altinel',
      post: 'The idea with React Native Elements is more about component structure than actual design.',
      comment: 'false'
    }
  ];

  const DisplayComment = (props) => {
    if(props.comment === 'false'){
      return(
          <Text>No Comment</Text>
      );
    }
    else{
        return (
            <Text>1 Comment</Text>
      );
    }
  }

  const Comment = (props) => {

    return(
      <View>
          <TouchableOpacity style={{ margin: 10 }}>
            <DisplayComment comment={props.comment} />
          </TouchableOpacity>
          <Divider style={{ backgroundColor: 'black' }} />
        </View>
    );
  };

  const Post = ({props}) => {
    return(
      <Card containerStyle={{ margin: 20, borderRadius:10 }}>
          <View style={{ flexDirection: 'row' }}>
            <Avatar 
              style={{ marginBottom: 10, marginRight: 5 }}
              name= {props.name}
            />
            <Text style={{ fontSize: 20, }}> {props.name} </Text>
          </View>
          <Divider style={{ backgroundColor: 'black' }} />
          <Text style={{ marginVertical: 10, fontSize: 17 }}> {props.post} </Text>
          <Divider style={{ backgroundColor: 'black' }} />     
          <Comment comment={props.comment} />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Input 
              placeholder='Add Comment' 
              containerStyle={{ width: '90%' }}
            />
            <Button
              onPress={() => { }}
            >
              <Feather name='send' size={21} />
            </Button>
          </View>
        </Card>
    );
  }

  return (
    <View style={styles.container}>
      <View style={{ margin: 30, marginBottom: 0 }}>
        <Input 
          placeholder='Share your question with class' 
          leftIcon={
            <Icon name='question' size={24} color='black'/>
          }  
          onTouchStart={() => props.navigation.navigate('Post')}
        />
      </View>
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
    justifyContent: 'center',
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 40,
    width: 40,
  },
});


export default Announcement;