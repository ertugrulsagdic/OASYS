import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDWY2HUpFPGCctPTfdRmp3dPggSb2jpYNU",
  autDomain: "oasys-1eaa0.firebaseapp.com",
  databaseURL: "https://1eaa0.firebaseio.com",
  projectId: "oasys-1eaa0",
  storageBucket: "",
}

firebase.initializeApp(firebaseConfig);

import StudentDrawer from './src/screens/Student/StudentDrawer'
import LectureDrawer from './src/screens/Lecture/LectureDrawer'
import WelcomeScreen from './src/screens/Auth/WelcomeScreen'
import LoginScreen from './src/screens/Auth/LoginScreen'
import SignupScreen from './src/screens/Auth/SignupScreen'
import Attendance from './src/screens/Student/Attendance'
import Announcement from './src/screens/Announcement'
import CommentScreen from './src/screens/CommentScreen';
import LectureDocuments from './src/screens/LectureDocuments';
import StudentList from './src/screens/Lecture/StudentList';
import StudentTabs from './src/screens/Student/StudentTabs';
import StudentClasses from './src/screens/Student/StudentClasses';
import ForgotPassword from './src/screens/Auth/ForgotPassword';
import ResetPassword from './src/screens/Auth/ResetPassword';
import AddDocument from './src/screens/Lecture/AddDocument';
import LectureClasses from './src/screens/Lecture/LectureClasses';
import AddClass from './src/screens/Student/AddClass';
import CreateClass from './src/screens/Lecture/CreateClass';
import PostQuestion from './src/screens/Student/PostQuestion';
import SubmitAssignment from './src/screens/Student/SubmitAssignment';
import PostAssignment from './src/screens/Lecture/PostAssignment';
import PostBulkMessage from './src/screens/Lecture/PostBulkMessage';
import EditClass from './src/screens/Lecture/EditClass';
import WelcomeNavigation from './src/screens/navigations/WelcomeNavigation';


class App extends React.Component {

  render(){
      return(
        <NavigationContainer>
          <WelcomeNavigation />
        </NavigationContainer>
      );
  }

}

const styles = StyleSheet.create({
  
});

export default App;