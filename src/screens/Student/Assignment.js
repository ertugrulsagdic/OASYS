import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, FlatList} from "react-native";
import  {Card, Divider, Button} from 'react-native-elements';

import Icon from "react-native-vector-icons/Entypo";

  const Assignment = (props) => {
    
    const postData = [
      {
        id: '1',
        name: 'HW1',
        post: 'Deadline 10 May, 23.30'
      },
      {
        id: '2',
        name: 'HW2',
        post: 'Deadline 10 May, 23.30'
      },
      {
        id: '3',
        name: 'HW3',
        post: 'Deadline 10 May, 23.30'
      },
      {
        id: '4',
        name: 'HW4',
        post: 'Deadline 10 May, 23.30'
      }
    ];
  
 
  
    const Post = ({data}) => {
      return(
            <Card containerStyle={{margin:20, }}>

           <TouchableOpacity  style={{}} onPress={() => { }}>
            
                 <Icon name="text-document" style={styles.icon2}></Icon>
                  <Text style={{marginLeft:50}}>
                     {data.name} 
                  </Text>
                  <Text style={{marginLeft:50}}>{data.post}</Text>
                  <Icon name="export" style={styles.icon4}></Icon>
            
            </TouchableOpacity>
            <Divider style={{ backgroundColor: 'black', margin:10 }} /> 
                <Button
                    title='Submit Homework'
                    buttonStyle={{borderRadius:10,}}
                    color='white'
                    onPress={
                        () => {props.navigation.navigate('Submit')}
                    }
                 />
            </Card>

        );
    }

    return (
      <View>
        <FlatList 
          data={postData}
          renderItem={({item}) => <Post data={item} /> }
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
        icon4: {
            color: "rgba(128,128,128,1)",
            fontSize: 25,
            position: 'absolute',
            marginLeft: 290,
            marginTop: 5
          },
        icon2: {
            color: "rgba(128,128,128,1)",
            fontSize: 40,
            position: 'absolute'
          },
       });
  
     export default Assignment;