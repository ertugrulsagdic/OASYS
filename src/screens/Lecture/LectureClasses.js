import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert} from 'react-native';
import { Card, Button } from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';
import Modal from 'react-native-modal';
import { connect } from "react-redux";
import * as firebase from "firebase";
import {setClassCode, watchAnnouncements, wathUserClasses} from '../../redux/app-redux'

  const mapStateToProps = (state) => {
    return {
        userClasses: state.userClasses,
        email: state.email,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      setClassCode: (classCode) => {dispatch(setClassCode(classCode))},
      watchAnnouncements: (classCode) => {dispatch(watchAnnouncements(classCode))},
      wathUserClasses: (email) => {dispatch(wathUserClasses(email))}
    }
  }
  

const LectureClasses = (props) => {

    const [isModalVisible, setModalVisible] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
  
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const navigateEditClass = (props) => {
        props.navigation.navigate('Edit')
        setModalVisible(!isModalVisible);
    };

    const deleteClass = (classCode) => {
        Alert.alert(
            'Do you want delete this class',
            "If yes press OK",
            [
            { text: "OK", onPress: () => {deletedClass(classCode)}}
            ],
            { cancelable: true }
        )
      
    };

    async function deletedClass(classCode){
            await firebase.database().ref('Classes')
                .orderByChild('classCode').equalTo(classCode)
                .once('value').then(snapshot => {
                snapshot.forEach(child => {
                const ref = firebase.database().ref().child("Classes/" + child.key).remove().then(
                    Alert.alert('Class successfully deleted')
                );
                })
                })
        setModalVisible(!isModalVisible);
    }

    const handleRefresh = () => {
        setRefreshing(true)
        props.wathUserClasses(props.email);
        setRefreshing(false)
      }
    

    const Class = ({data}) => {
        return(
            <TouchableOpacity 
                onPress={
                    () => {
                        props.setClassCode(data.classCode)
                        props.watchAnnouncements(data.classCode)
                        props.navigation.navigate('Class', { name: data.name.toString() })
                    }
                }
                
            >
                <Card containerStyle={{ borderRadius:10, backgroundColor: data.theme, width:'90%'}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={styles.textName}>{data.name}</Text>
                        <Button
                            containerStyle={styles.button}
                            type='clear'
                            onPress={() => {
                                toggleModal();
                                props.setClassCode(data.classCode)
                            }}
                            icon={
                                <Entypo 
                                    style={styles.icon}
                                    name='dots-three-horizontal' 
                                    size={15} 
                                />
                            }
                        
                        />
                        <Modal isVisible={isModalVisible}>
                            <View >
                                <Button 
                                    containerStyle={{marginBottom:20}} 
                                    title="Edit Class" 
                                    onPress={() => {
                                    navigateEditClass(props)
                                    }
                                }
                                     
                                />
                                <Button 
                                    containerStyle={{marginBottom:20}} 
                                    title="Delete Class" 
                                    onPress={() => {
                                        deleteClass(data.classCode);
                                    }} 
                                />
                                <Button 
                                    containerStyle={{marginBottom:20}} 
                                    buttonStyle={{backgroundColor: "red"}} 
                                    title="Close" 
                                    onPress={toggleModal} 
                                />
                            </View>
                        </Modal>
                    </View>
                    <Text style={styles.textField}>{data.courseField}</Text>
                    <Text style={styles.textIns}>{data.instructue}</Text>
                    <Text style={styles.textField}>Classs code: {data.classCode}</Text>
                </Card>
            </TouchableOpacity>
            
        );
    }

    return(
        <View style={styles.container}>
            <Button
                    title='Create Class'
                    containerStyle={{margin:20, width:'88%'}}
                    buttonStyle={{borderRadius:10,}}
                    color='white'
                    onPress={
                        () => {props.navigation.navigate('Create Class')}
                    }
            />
            <FlatList 
                data={props.userClasses}
                renderItem={({item}) => <Class data={item} /> }
                keyExtractor={post => post.classCode}
                refreshing={refreshing}
                onRefresh={handleRefresh}
            />     
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    textName:{
        fontSize:25,
        color:'white'
    },
    textField:{
        fontSize:15,
        color:'white'
    },
    textIns:{
        fontSize:15,
        color:'white',
        marginTop:40
    },
    icon:{
        position: 'absolute',
    },
    button:{
        position: 'absolute',
        right: 5,
                top: 5,
    }
    
}); 

export default connect(mapStateToProps, mapDispatchToProps)(LectureClasses);