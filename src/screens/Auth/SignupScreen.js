import React, {useState} from "react";
import { StyleSheet, Text, TextInput, View, TouchableWithoutFeedback, Keyboard } from "react-native";
import Button from "react-native-button";
import {Avatar} from 'react-native-elements';
import { AppStyles } from "../../AppStyles";
import * as firebase from "firebase";



const SignupScreen = props => {

    const [email, setEmail] = useState({ value: ""});
    const [password, setPassword] = useState({ value: ""});

     
    const handleSignUp = () => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value)
          .then(() => props.navigation.navigate('Login'))
         
    }
    

    const [sizeStudent, setSizeStudent] = useState('medium');
    const [sizeProfessor, setSizeProfessor] = useState('medium');


    const studentAvatarHandler = () => {
        if(sizeStudent == 'medium'){
            setSizeProfessor('medium');
            setSizeStudent('large');
        }
        else{
            setSizeStudent('medium');
        }
        
    }

    const professorAvatarHandler = () => {
        if(sizeProfessor == 'medium'){
            setSizeProfessor('large');
            setSizeStudent('medium');
        }
        else{
            setSizeProfessor('medium');
        }
        
    }
    
    return(
        <TouchableWithoutFeedback onPress = {() => {Keyboard.dismiss()}}>
            <View style={styles.container}>
                <Text style={styles.title}>Create new account</Text>
                <View style = {styles.avatarContainer}>
                    <View style = {{alignItems : 'center'}}>
                        <Avatar
                            id = 'student'
                            rounded
                            source={require('../../images/student.png')} 
                            size = {sizeStudent}
                            containerStyle = {{marginHorizontal: 30}}
                            onPress = {studentAvatarHandler}
                        />
                        <Text>Student</Text>
                    </View>
                    <View style = {{alignItems : 'center'}}>
                        <Avatar
                            id = 'professor'
                            rounded
                            source={require('../../images/professor1.png')} 
                            size = {sizeProfessor}
                            containerStyle = {{marginHorizontal: 30}}
                            onPress = {professorAvatarHandler}
                        />
                        <Text>Lecturer</Text>
                    </View>
                </View>
                <View style={styles.InputContainer}>
                    <TextInput
                        style={styles.body}
                        placeholder="Full Name"
                        placeholderTextColor={AppStyles.color.grey}
                        underlineColorAndroid="transparent"
                    />
                </View>
                <View style={styles.InputContainer}>
                <TextInput
                    style={styles.body}
                    placeholder="E-mail Address"
                    placeholderTextColor={AppStyles.color.grey}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={email => setEmail({ value: email})}
                    
                />
                </View>
                <View style={styles.InputContainer}>
                <TextInput
                    style={styles.body}
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor={AppStyles.color.grey}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    value={password}
                    onChangeText={password => setPassword({ value: password})}
                />
                </View>
                <Button
                containerStyle={[styles.signupContainer, { marginTop: 50 }]}
                style={styles.signupText} onPress={() => props.navigation.navigate('Login')}
                >
                Sign Up
                </Button>
            </View>
        </TouchableWithoutFeedback>
    );                
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center"
    },
    avatarContainer:{
        flexDirection: "row",
        justifyContent: 'space-around',
    },
    title: {
      fontSize: AppStyles.fontSize.title,
      fontWeight: "bold",
      color: AppStyles.color.tint,
      marginTop: 20,
      marginBottom: 20,
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
  
  export default SignupScreen;