import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import Attendance from './Attendance'
import Announcement from '../Announcement'
import LectureDocuments from '../LectureDocuments';
import Assignment from './Assignment';
import ScanQR from './ScanQR';

import PostQuestion from './PostQuestion';
import CommentScreen from '../CommentScreen';

const Tab = createBottomTabNavigator();
const AnnouncementStack = createStackNavigator();

const AnnouncementNavigation = () => {
  <AnnouncementStack.Navigator>
    <AnnouncementStack.Screen name='Announcement' component={Announcement} />
    <AnnouncementStack.Screen name='PostQuestion' component={PostQuestion} />
    <AnnouncementStack.Screen name='Comments' component={CommentScreen} />
  </AnnouncementStack.Navigator>
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
              else if (route.name === 'Attendance') {
                iconName =  'percent';
                return <MaterialIcon name={iconName} size={size} color={color} />;
              }
              else if (route.name === 'Scan Qr Code') {
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
        <Tab.Screen name="Announcement">
          {props => <Announcement {...props}/>}
        </Tab.Screen>
        <Tab.Screen name="Attendance" component={Attendance} />
        <Tab.Screen name="Scan Qr Code" component={ScanQR} />
        <Tab.Screen name="Lecture Documents" component={LectureDocuments} />
        <Tab.Screen name="Assignment" component={Assignment} />
      </Tab.Navigator>
  );
}
