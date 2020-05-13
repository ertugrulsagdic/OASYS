import React from "react";
import { Text, View, StyleSheet,TouchableHighlight, Alert, Button} from "react-native";
import  {Card, Input} from 'react-native-elements';

import Icon from "react-native-vector-icons/FontAwesome";


class SubmitAssignment extends React.Component {

    onPressLearnMore(){
        //For generating alert on buttton click
        alert('Hello');
      }

    render() {
        return (
          <View>
              <Card containerStyle={{marginTop:50}}>
               <TouchableHighlight   underlayColor='transparent' onPress={this.message_function}>
           <Card>
           <Icon name="plus" style={styles.icon}></Icon>
            <Text style={styles.textStyle}>Add File</Text>
            </Card>   
            </TouchableHighlight> 
            <View style={styles.buttonStyle}>
            <Button onPress={this.onPressLearnMore} title="Submit Homework" color="#d3d3d3"/> 
            </View>
            </Card>
            <Card containerStyle={{marginTop:30}}>
                <Text style={{fontSize:15}}>Share Comment</Text>
                <Input placeholder='Add Comment' leftIcon={
                <Icon name='user' style={styles.icon2}/>} rightIcon ={<Icon name="paper-plane" style={styles.icon2}/>}/>
            </Card>
          </View>
        );
      }
    }

    const styles = StyleSheet.create({
      
        icon: {
          color: "rgba(128,128,128,1)",
          fontSize: 25,
          position: 'absolute',
          marginLeft:100,
          marginTop: 5,
        
        },
        textStyle:{
          marginLeft:130, 
          fontSize:20,
          color: "rgba(128,128,128,1)",
          marginTop: 3,
        },
        buttonStyle:{
          height: 50, 
          width: 300,
          marginTop: 30,
          marginLeft: 25,
          marginBottom:10
        },
        icon2: {
          color: "rgba(128,128,128,1)",
          fontSize: 30
        }
      });
    
      export default SubmitAssignment;