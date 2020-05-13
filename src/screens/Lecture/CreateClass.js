import React from "react";
import { Text, View, StyleSheet, Alert} from "react-native";
import  {Card, Input, Avatar, Divider} from 'react-native-elements';
import Button from "react-native-button";



  const CreateClass = () => {

    const className = 'Enter class name'
    const classField = 'Enter class field'
    

    return (
      <View>
          <Card containerStyle={{borderRadius:10, marginTop: 30}}>
       <Card containerStyle={{marginLeft: 0, marginTop: 40,borderRadius:10, width:'100%', height: 70}}>
       <Input placeholder={className}/>
       </Card>
       <Card containerStyle={{marginLeft: 0, marginTop: 20,borderRadius:10, width:'100%', height: 70}}>
       <Input placeholder={classField}/>
       </Card>
      
      
         <View styles={{height:50, width:50}}>
             <Button containerStyle={styles.buttonContainer} style={{color: '#708090',fontWeight: "bold", }}  
              onPress={() => Alert.alert('Sınıf ....... class kodu ile olusturuldu')}>
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