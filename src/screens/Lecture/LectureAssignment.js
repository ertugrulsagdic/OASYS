import React from "react";
import { Text, View, StyleSheet,TouchableOpacity, Alert, FlatList} from "react-native";
import  {Card, Button} from 'react-native-elements';

import Icon from "react-native-vector-icons/Entypo";


  const LectureAssignment = (props) => {
    
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
           <TouchableOpacity   
              onPress ={() => props.navigation.navigate('Assignments')}
            >
            <Card containerStyle={{margin:20}}>
                 <Icon name="text-document" style={styles.icon2}></Icon>
                  <Text style={{marginLeft:50}}>
                     {data.name} 
                  </Text>
                  <Text style={{marginLeft:50}}>{data.post}</Text>
                  <Icon name="export" style={styles.icon4}></Icon>
            </Card>
            </TouchableOpacity>

        );
    }

    return (
      <View style={{flex:1}}>
        <Button
                    title='Add Assignment'
                    containerStyle={{margin:20, width:'88%'}}
                    buttonStyle={{borderRadius:10,}}
                    color='white'
                    onPress={
                        () => {props.navigation.navigate('PostAssignment')}
                    }
                 />
        <FlatList 
          contentContainerStyle={{ paddingBottom: 20}}
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
  
     export default LectureAssignment;