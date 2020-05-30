import React,{useState} from "react";
import { Text, View, StyleSheet, TouchableOpacity, FlatList, Linking} from "react-native";
import  {Card, Divider, Button} from 'react-native-elements';
import Icon from "react-native-vector-icons/Entypo";
import * as firebase from "firebase";
import { connect } from "react-redux";
import {watchUserInfo, wathUserClasses, watchAssignments,watchStudentAssignments, setAssignmentKey} from '../../redux/app-redux'

const mapStateToProps = (state) => {
  return {
    classCode: state.classCode,
    assignmentList: state.assignmentList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    watchUserInfo: (email) => {dispatch(watchUserInfo(email))},
    wathUserClasses: (email) => {dispatch(wathUserClasses(email))},
    watchAssignments: (classCode) => {dispatch(watchAssignments(classCode))},
    setAssignmentKey: (assignmentKey) => {dispatch(setAssignmentKey(assignmentKey))},
    watchStudentAssignments: (classCode, assignmentKey) => {dispatch(watchStudentAssignments(classCode, assignmentKey))},
  }
}


  const Assignment = (props) => {
    
    props.watchAssignments(props.classCode)


    const dowloandFile = (fileName) =>{
      var ref = firebase.storage().ref().child("Assignments/" + fileName);
      ref.getDownloadURL().then(function(url) {
          Linking.canOpenURL(url).then(supported => {
              if (supported) {
                Linking.openURL(url);
              } else {
                console.log("Don't know how to open URI: " + url);
              }
            });
          
          console.log(url);
      }, function(error){
          console.log(error);
      });

    }


    const Post = ({data}) => {
      return(
        <Card containerStyle={{margin:20, }}>
          <TouchableOpacity  style={{}} onPress={() => {dowloandFile(data.name)}}>
                  <Icon name="text-document" style={styles.icon2}></Icon>
                  <Text style={{marginLeft:50}}>
                     {data.title} 
                  </Text>
                  <Text style={{marginLeft:50}}>{"Deadline " + data.deadline}</Text>
                  <Icon name="export" style={styles.icon4}></Icon>
          </TouchableOpacity>
            <Divider style={{ backgroundColor: 'black', margin:10 }} /> 
                <Button
                    title='Submit Homework'
                    buttonStyle={{borderRadius:10,}}
                    color='white'
                    onPress={
                        () => {props.navigation.navigate('Submit')
                        props.setAssignmentKey(data.key)
                        props.watchStudentAssignments(props.classCode, data.key)
                      }}
                 />
        </Card>

        );
    }

    return (
      <View>
        <FlatList 
          data={props.assignmentList}
          renderItem={({item}) => <Post data={item} /> }
          keyExtractor={post => post.name}
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
  
       export default connect(mapStateToProps, mapDispatchToProps)(Assignment); 