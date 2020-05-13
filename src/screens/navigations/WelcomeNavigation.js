import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../Auth/WelcomeScreen'
import LoginScreen from '../Auth/LoginScreen'
import SignupScreen from '../Auth/SignupScreen'
import ForgotPassword from '../Auth/ForgotPassword';
import ResetPassword from '../Auth/ResetPassword';
import StudentDrawer from '../Student/StudentDrawer'
import LectureDrawer from '../Lecture/LectureDrawer'


const WelcomeStack = createStackNavigator();
const LoginStack = createStackNavigator();

export default class WelcomeNavigation extends React.Component {

    render(){
        return(
            <WelcomeStack.Navigator initialRouteName='Lecture'>
                <WelcomeStack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
                <WelcomeStack.Screen name="Login" component={LoginScreen} />
                <WelcomeStack.Screen name="Forgot" component={ForgotPassword} />
                <WelcomeStack.Screen name="Reset" component={ResetPassword}/>
                <WelcomeStack.Screen name="Signup" component={SignupScreen} />
                <WelcomeStack.Screen name="Student" component={StudentDrawer} options={{ headerShown: false }}/>
                <WelcomeStack.Screen name="Lecture" component={LectureDrawer} options={{ headerShown: false }}/>
            </WelcomeStack.Navigator>
        );
  }

}
