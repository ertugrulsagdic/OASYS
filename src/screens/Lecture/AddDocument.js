import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import { Card, Button, Divider } from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';
import { AppStyles } from "../../AppStyles";


const AddDocument = () => {


    return(
        <View style={styles.container}>
            <Card containerStyle={styles.card}>
                <Text style={styles.text}>Please select the file that you want to add</Text>
                <Divider style={{ backgroundColor: 'black'}} />
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
                <View style={styles.InputContainer}>
                    <TextInput
                        style={styles.body}
                        placeholder="Enter the Descripton"
                        placeholderTextColor={AppStyles.color.grey}
                        underlineColorAndroid="transparent"
                    />
                </View>
                <TouchableOpacity>
                    <Card containerStyle={styles.cardAdd}>
                        <View style={{flexDirection:'row'}}>
                            <Entypo 
                                style={{marginLeft:10}}
                                name='plus' 
                                size={25} 
                            />
                            <Text style={{fontSize:20, marginHorizontal:20}}>
                                Add Document
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
        maxWidth:'100%',
        height: 42,
        paddingLeft: 20,
        paddingRight: 20,
        color: AppStyles.color.text
    },
   
    
}); 

export default AddDocument;