import React from "react";
import { Text, View, StyleSheet, Alert} from "react-native";
import  {Card, Input, Avatar, Divider} from 'react-native-elements';
import Button from "react-native-button";



  const EditClass = () => {

    const className = 'Software Engineering'
    const classField = 'Computer Engineering'

    return (
      <View>
        <Card containerStyle={{borderRadius:10, marginTop: 30}}>
          <Text style={{fontSize:18}}>Class Name:</Text>
          <Card containerStyle={{marginLeft: 0,borderRadius:10, width:'100%', height: 80, marginBottom:10}}>
            <Input placeholder={className}/>
          </Card>
          <Text style={{fontSize:18}}>Class Field:</Text>
          <Card containerStyle={{marginLeft: 0, marginTop: 10,borderRadius:10, width:'100%', height: 80}}>
            <Input placeholder={classField}/>
          </Card>
         <View styles={{height:50, width:50}}>
             <Button containerStyle={styles.buttonContainer} style={{color: '#708090',fontWeight: "bold", }}  
              onPress={() => Alert.alert('Sınıfa katınıldı')}>
                Save Changes
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
  
     export default EditClass;