import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import { Card, Button, Divider } from 'react-native-elements';
import ButtonDate from "react-native-button";
import Entypo from 'react-native-vector-icons/Entypo';
import { AppStyles } from "../../AppStyles";
import DatePicker from 'react-native-date-picker'

const PostAssignment = () => {

    const [date, setDate] = useState(new Date())

    return(
        <View style={styles.container}>
            <Card containerStyle={styles.card}>
                <Text style={{fontSize:17, marginTop:20, marginBottom:5}}>Title:</Text>
                <View style={styles.InputContainer}>
                    <TextInput
                        style={styles.body}
                        placeholder="Enter Title of Document"
                        placeholderTextColor={AppStyles.color.grey}
                        underlineColorAndroid="transparent"
                    />
                </View>
                <Text style={{fontSize:17, marginTop:20, marginBottom:5}}>Description:</Text>
                <DatePicker
                    date={date}
                    onDateChange={setDate}
                />  
                <Divider style={{ backgroundColor: 'black'}} />  
                <Text style={styles.text}>Please select the file that you want to add</Text>
                <Divider style={{ backgroundColor: 'black'}} />              
                <TouchableOpacity>
                    <Card containerStyle={styles.cardAdd}>
                        <View style={{flexDirection:'row'}}>
                            <Entypo 
                                style={{marginLeft:10}}
                                name='plus' 
                                size={25} 
                            />
                            <Text style={{fontSize:20, marginHorizontal:20}}>
                                Add Assignment
                             </Text>
                        </View>
                    </Card>
                </TouchableOpacity>
                <Button
                    title='Add'
                    containerStyle={{margin:20, }}
                    buttonStyle={{borderRadius:10,}}
                    color='white'
                />
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    card:{
        borderRadius:10,
        width:'90%',
        alignItems:'center'
    },
    cardAdd:{
        flexDirection:'row',
        borderRadius:40,
        marginTop:20
    },
    text:{
        fontSize:20, 
        textAlign:'center', 
        maxWidth:'80%',
        padding:10
    },
    InputContainer: {
        width: AppStyles.textInputWidth.main,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: AppStyles.color.grey,
        borderRadius: AppStyles.borderRadius.main,
    },
    body: {
        width:300,
        maxWidth:'120%',
        height: 42,
        paddingLeft: 20,
        paddingRight: 20,
        color: AppStyles.color.text
    },
    loginContainer: {
        width: AppStyles.buttonWidth.main,
        backgroundColor: AppStyles.color.tint,
        borderRadius: AppStyles.borderRadius.main,
        padding: 10,
        marginTop: 30
      },
      loginText: {
        color: AppStyles.color.white
      },
    
}); 

export default PostAssignment;