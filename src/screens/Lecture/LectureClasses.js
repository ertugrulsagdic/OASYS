import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { Card, Button } from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';


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
                        />
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