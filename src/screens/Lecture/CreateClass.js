import React, {useState} from "react";
import { Text, View, StyleSheet, Alert} from "react-native";
import  {Card, Input, Avatar, Divider} from 'react-native-elements';
import Button from "react-native-button";
import * as firebase from "firebase";



  const CreateClass = () => {

    const [className, setClassName] = useState("");
    const [classField, setClassField] = useState("");
    const [classCode, setClassCode] = useState(Math.random().toString(36).substring(7));

    const rootRef = firebase.database().ref();
    const classesRef = rootRef.child("Classes");

    async function createClass (className, classField){

      if(className.trim().length == 0 || classField.trim().length == 0){
        Alert.alert("Please enter valid input");
        return;
      }

      let r = Math.random().toString(36).substring(7);
      setClassCode(r);
      classesRef.push({name: className, field: classField, code: classCode}).then(Alert.alert('Class created with code', classCode));
    }
    
    
    return (
      <View>
          <Card containerStyle={{borderRadius:10, marginTop: 30}}>
          <Text style={{fontSize:18}}>Class Name:</Text>
       <Card containerStyle={{marginLeft: 0, marginTop: 10,borderRadius:10, width:'100%', height: 70}}>
       <Input placeholder={"Enter class name"} value={className} onChangeText={className => setClassName(className)}/>
       </Card>
       <Text style={{fontSize:18, marginTop: 20}}>Class Field:</Text>
       <Card containerStyle={{marginLeft: 0, marginTop: 10,borderRadius:10, width:'100%', height: 70}}>
       <Input placeholder={"Enter class field"} value={classField} onChangeText={classField => setClassField(classField)}/>
       </Card>
      
      
         <View styles={{height:50, width:50}}>
             <Button containerStyle={styles.buttonContainer} style={{color: '#708090',fontWeight: "bold", }}  
              onPress={() => createClass(className, classField)}>
                Create Class
            </Button>
        </View> 
        </Card>
      </View>
    );
  }

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
        },
        buttonContainer: {
            width: 130,
            backgroundColor: '#ff5a66',
            borderRadius:10,
            padding: 10,
            marginTop: 30,
            marginLeft: 100
          }
    });
  
     export default CreateClass;