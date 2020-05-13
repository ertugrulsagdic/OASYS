import React, {useState} from "react";
import { StyleSheet, Text, TextInput, View, TouchableWithoutFeedback, Keyboard } from "react-native";
import Button from "react-native-button";
import { AppStyles } from "../../AppStyles";
import * as firebase from "firebase";


const LoginScreen = (props) => {

  const [email, setEmail] = useState({ value: ""});
  const [password, setPassword] = useState({ value: ""});

  const user = 'Lecture'


  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email.value, password.value)
      .then(() => props.navigation.navigate('Classes'))
   
  }

        return(
          <TouchableWithoutFeedback onPress = {() => {Keyboard.dismiss()}}>
              <View style={styles.container}>
                <Text style={styles.title}>Sign In</Text>
                    <View style={styles.InputContainer}>
                        <TextInput
                            style={styles.body}
                            placeholder="E-mail"
                            autoCapitalize="none"
                            placeholderTextColor={AppStyles.color.grey}
                            underlineColorAndroid="transparent"
                            value={email}
                            onChangeText={email => setEmail({ value: email})}
                        />
                    </View>
                    <View style={styles.InputContainer}>
                        <TextInput
                            style={styles.body}
                            secureTextEntry={true}
                            placeholder="Password"
                            autoCapitalize="none"
                            placeholderTextColor={AppStyles.color.grey}
                            underlineColorAndroid="transparent"
                            value={password}
                            onChangeText={password => setPassword({ value: password})}
                        />
                    </View>
                    <Button
                        containerStyle={styles.loginContainer}
                        style={styles.loginText} onPress={() => props.navigation.navigate(user)}
                    >
                        Log in
                    </Button>
                    <Text style={styles.touchableText} onPress={() => props.navigation.navigate('Forgot')}>Forgot your password?</Text>
                    <Text style={styles.touchableText} onPress={() => props.navigation.navigate('Signup')}>Sign up</Text>
              </View>
           </TouchableWithoutFeedback>
        );
    }


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center"
    },
    title: {
      fontSize: AppStyles.fontSize.title,
      fontWeight: "bold",
      color: AppStyles.color.tint,
      marginTop: 20,
      marginBottom: 20,
      textAlign: "center",
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
    touchableText:{
      color: "black",
      marginTop: 40,
      textDecorationLine: 'underline'
    }
  });
  
  export default LoginScreen;