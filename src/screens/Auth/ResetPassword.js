import React from "react";
import { StyleSheet, Text, TextInput, View, TouchableWithoutFeedback, Keyboard } from "react-native";
import Button from "react-native-button";
import {Avatar} from 'react-native-elements';
import { AppStyles } from "../../AppStyles";


const ResetPassword = (props) => {

    return(
        <TouchableWithoutFeedback onPress = {() => {Keyboard.dismiss()}}>
            <View style={styles.container}>
                <Text style={styles.title}>Please enter new password!</Text>
                <View style={styles.InputContainer}>
                    <TextInput
                        style={styles.body}
                        placeholder="Enter new password"
                        placeholderTextColor={AppStyles.color.grey}
                        underlineColorAndroid="transparent"
                    />
                </View>
                <View style={styles.InputContainer}>
                    <TextInput
                        style={styles.body}
                        placeholder="Enter new password again"
                        placeholderTextColor={AppStyles.color.grey}
                        underlineColorAndroid="transparent"
                    />
                </View>
                <Button
                  containerStyle={[styles.signupContainer, { marginTop: 30 }]}
                  style={styles.signupText}
                >
                    Submit
                </Button>
            </View>
        </TouchableWithoutFeedback>
    );  

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent:'center'
    },
    title: {
      fontSize: AppStyles.fontSize.title,
      color: AppStyles.color.tint,
      marginBottom:10,
      textAlign: "center",
    },
    placeholder: {
      fontFamily: AppStyles.color.text,
      color: "red"
    },
    InputContainer: {
      width: AppStyles.textInputWidth.main,
      marginTop: 30,
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: AppStyles.color.grey,
      borderRadius: AppStyles.borderRadius.main
    },
    body: {
      height: 42,
      paddingLeft: 20,
      paddingRight: 20,
      color: AppStyles.color.text
    },
    signupContainer: {
      width: AppStyles.buttonWidth.main,
      backgroundColor: AppStyles.color.tint,
      borderRadius: AppStyles.borderRadius.main,
      padding: 10,
      marginTop: 30
    },
    signupText: {
      color: AppStyles.color.white
    }
  });
  
  export default ResetPassword;
