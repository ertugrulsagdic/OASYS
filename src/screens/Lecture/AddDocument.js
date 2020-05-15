import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert} from 'react-native';
import { Card, Button, Divider } from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';
import { AppStyles } from "../../AppStyles";
import * as firebase from "firebase";

import DocumentPicker from 'react-native-document-picker';


const AddDocument = () => {

    const [singleFileOBJ, setsingleFileOBJ] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    
    
    async function SingleFilePicker() {
        try {
          const res = await DocumentPicker.pick({
            type: [DocumentPicker.types.allFiles],
          
          });

          setsingleFileOBJ( res)
     
     
        } catch (err) {
          if (DocumentPicker.isCancel(err)) {
            Alert.alert('Canceled');
          } else {
            Alert.alert('Unknown Error: ' + JSON.stringify(err));
            throw err;
          }
        }
    }

    async function uploadFile (uri, fileName){
        const response = await fetch(uri);
        const blob = await response.blob();

        var ref = firebase.storage().ref().child("Documents/" + fileName);
        return ref.put(blob);


    }
     


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
                        value={title}
                        onChangeText={title => setTitle(title)}
                    />
                </View>
                <Text style={{fontSize:17, marginTop:20, marginBottom:5}}>Description:</Text>
                <View style={styles.InputContainer}>
                    <TextInput
                        style={styles.body}
                        placeholder="Enter the Descripton"
                        placeholderTextColor={AppStyles.color.grey}
                        underlineColorAndroid="transparent"
                        value={description}
                        onChangeText={description => setDescription(description)}
                    />
                </View>
                <TouchableOpacity activeOpacity={0.5}
          style={styles.button}
          onPress={SingleFilePicker}>
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
                    <Text style={{fontSize:20, marginHorizontal:20}}>{"\n"} {singleFileOBJ.name ? singleFileOBJ.name : ''}</Text>
                </TouchableOpacity >
                <Button
                    title='Add'
                    containerStyle={{margin:20, }}
                    buttonStyle={{borderRadius:10,}}
                    color='white'
                    onPress={() => uploadFile(singleFileOBJ.uri, singleFileOBJ.name)}
                   
                ></Button>
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