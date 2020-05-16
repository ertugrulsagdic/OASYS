import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, YellowBox} from 'react-native';
import { Card, Button } from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';
import Modal from 'react-native-modal';

YellowBox.ignoreWarnings([
    'Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'
  ]);

const LectureClasses = (props) => {

    const classesList = [
        {
            id: '1',
            name: 'Software Engineering  ',
            courseField:'Computer Engineering',
            instructue:'Berna Altinel',
            classCode:'rBxhYsEq',
            theme: 'lightcoral',
        },
        {
            id: '2',
            name: 'Data Structures',
            courseField:'Computer Engineering',
            instructue:'Berna Altinel',
            classCode:'gTsiOPa3',
            theme: 'deepskyblue',
        },
    ]

    const [isModalVisible, setModalVisible] = useState(false);
  
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const navigateEditClass = (props) => {
        setModalVisible(!isModalVisible);
        props.navigation.navigate('Edit')
    };

    const Class = ({data}) => {
        return(
            <TouchableOpacity 
                onPress={
                    () => {props.navigation.navigate('Class', { name: data.name.toString() })}
                }
                
            >
                <Card containerStyle={{ borderRadius:10, backgroundColor: data.theme, width:'90%'}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={styles.textName}>{data.name}</Text>
                        <Button
                            containerStyle={styles.button}
                            type='clear'
                            icon={
                                <Entypo 
                                    style={styles.icon}
                                    name='dots-three-horizontal' 
                                    size={15} 
                                />
                            }
                            onPress={toggleModal}
                        />
                        <Modal isVisible={isModalVisible}>
                            <View >
                                <Button 
                                    containerStyle={{marginBottom:20}} 
                                    title="Edit Class" 
                                    onPress={() => {navigateEditClass(props)}}
                                     
                                />
                                <Button 
                                    containerStyle={{marginBottom:20}} 
                                    title="Delete Class" 
                                    onPress={() => {toggleModal}} 
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
                data={classesList}
                renderItem={({item}) => <Class data={item} /> }
                keyExtractor={post => post.id}
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

export default LectureClasses;