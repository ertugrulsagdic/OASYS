import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import StudentList from './StudentList'
import Announcement from '../Announcement'
import LectureDocuments from '../LectureDocuments';
import LecturerAssignment from './LecturerAssignment';
import CreateQR from './CreateQR'

import PostBulkMessage from './PostBulkMessage';
import CommentScreen from '../CommentScreen';

const Tab = createBottomTabNavigator();
const AnnouncementStack = createStackNavigator();

const AnnouncementNavigation = () => {
  return(
    <AnnouncementStack.Navigator>
      <AnnouncementStack.Screen name='Announcement' component={Announcement} options={{ headerShown: false }} />
      <AnnouncementStack.Screen name='Post' component={PostBulkMessage} />
      <AnnouncementStack.Screen name='Comments' component={CommentScreen} />
    </AnnouncementStack.Navigator>
  );
}

export default function () {
  return (
      <Tab.Navigator 
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Announcement') {
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
                  return <Ionicons name={iconName} size={size} color={color} />;
              } 
              else if (route.name === 'Student List') {
                iconName =  'percent';
                return <MaterialIcon name={iconName} size={size} color={color} />;
              }
              else if (route.name === 'Create Qr Code') {
                iconName = focused ? 'qrcode' : 'qrcode';
                return <MaterialIcon name={iconName} size={size} color={color} />;
              }
              else if (route.name === 'Lecture Documents') {
                iconName = focused ? 'file-document' : 'file-document-outline';
                return <MaterialIcon name={iconName} size={size} color={color} />;
              }
              else if (route.name === 'Assignment') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
                return <Ionicons name={iconName} size={size} color={color} />;
              }
  
              // You can return any component that you like here!
              
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
      >
        <Tab.Screen name="Announcement" component={AnnouncementNavigation} />
        <Tab.Screen name="Student List" component={StudentList} />
        <Tab.Screen name="Create Qr Code" component={CreateQR} />
        <Tab.Screen name="Lecture Documents" component={LectureDocuments} />
        <Tab.Screen name="Assignment" component={LecturerAssignment} />
      </Tab.Navigator>
  );
}
