import React from "react";
import { Text, View, StyleSheet, Alert} from "react-native";
import  {Card, Input, Avatar, Divider} from 'react-native-elements';
import Button from "react-native-button";



  const AddClass = () => {

    return (
      <View>
       <Card containerStyle={{ margin: 20, marginTop: 40,borderRadius:10, width:'90%'}}>
       <Input placeholder='Enter class code'/>
       </Card>
         <View styles={{height:50, width:50}}>
             <Button containerStyle={styles.buttonContainer} style={{color: '#708090',fontWeight: "bold", }}  
              onPress={() => Alert.alert('Sınıfa katınıldı')}>
                Join Class
            </Button>
        </View> 
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
            marginLeft: 140
          }
    });
  
     export default AddClass;