import React,{useState} from "react";
import { Text, View, StyleSheet,TouchableOpacity, Alert, FlatList} from "react-native";
import  {Card, Button} from 'react-native-elements';
import Icon from "react-native-vector-icons/Entypo";
import { connect } from "react-redux";
import {watchUserInfo, wathUserClasses, watchAssignments, watchStudentAssignments, setAssignmentKey} from '../../redux/app-redux'

const mapStateToProps = (state) => {
  return {
    classCode: state.classCode,
    assignmentList: state.assignmentList,
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


  const LectureAssignment = (props) => {

    const [refreshing, setRefreshing] = useState(false)

    const Post = ({data}) => {
      return(
           <TouchableOpacity   
           onPress={
            () => {
                props.navigation.navigate('Assignments')
                props.setAssignmentKey(data.key)
                props.watchStudentAssignments(props.classCode, data.key)
            }
        }
            >
            <Card containerStyle={{margin:20}}>
                 <Icon name="text-document" style={styles.icon2}></Icon>
                  <Text style={{marginLeft:50}}>
                     {data.title} 
                  </Text>
                  <Text style={{marginLeft:50}}>{"Deadline " + data.deadline}</Text>
                  <Icon name="export" style={styles.icon4}></Icon>
            </Card>
            </TouchableOpacity>

        );
    }

    const handleRefresh = () => {
      setRefreshing(true)
      props.watchAssignments(props.classCode)
      setRefreshing(false)
  }
  

    return (
      <View style={{flex:1}}>
        <Button
                    title='Add Assignment'
                    containerStyle={{margin:20, width:'88%'}}
                    buttonStyle={{borderRadius:10,}}
                    color='white'
                    onPress={
                        () => {
                          props.navigation.navigate('PostAssignment')
                        }}
                 />
        <FlatList 
          contentContainerStyle={{ paddingBottom: 20}}
          data={props.assignmentList}
          renderItem={({item}) => <Post data={item} /> }
          keyExtractor={post => post.name}
          refreshing={refreshing}
          onRefresh={handleRefresh}
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
  

       export default connect(mapStateToProps, mapDispatchToProps)(LectureAssignment);