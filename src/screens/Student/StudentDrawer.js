import React from 'react';
import {Image, View, Text, Alert, FlatList} from 'react-native';
import Button from 'react-native-button/Button';
import { 
    DrawerItem,
    createDrawerNavigator, 
} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Feather from 'react-native-vector-icons/Feather';
import AntDesingn from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Animated from 'react-native-reanimated';

import StudentClasses from './StudentClasses'
import StudentTabs from './StudentTabs'
import AddClass from './AddClass'


const classData = [
    {
        id: '1',
        name: 'Software Engineering  ',
    },
    {
        id: '2',
        name: 'Data Structures',
    },
    {
        id: '3',
        name: 'Algorithms',
    },
    {
        id: '4',
        name: 'Operation Research',
    },
]; 

const Drawer =  createDrawerNavigator();
const Stack = createStackNavigator();

const Screens = () => {
    return(
        <Stack.Navigator >
            <Stack.Screen name="Screens" component={DrawerScreens} options={{ headerShown: false }}/>
            <Stack.Screen name="Add Class" component={AddClass} />
        </Stack.Navigator>
    );
}

const  DrawerScreens = ({navigation, style}) => {
    return(
        <Animated.View style={[{flex: 1, overflow: 'hidden'}, style]}>
            <Stack.Navigator
                screenOptions={{
                    headerLeft: () => (
                        <Button 
                            containerStyle ={{padding:10, marginHorizontal: 10}}
                            onPress={() => {navigation.openDrawer()}}
                        >
                            <Feather name='menu' size={18} />
                        </Button>
                    )
                }}
            >
                <Stack.Screen name="Student Classes" component={StudentClasses} />
                <Stack.Screen name="Class" options={({ route }) => ({ title: route.params.name })}>
                    {props  => <StudentTabs {...props} />}
                </Stack.Screen>
            </Stack.Navigator>
        </Animated.View>
    );
}

const DrawerContent = (props) => {

    const ClassDrawerItem = ({data}) => {
        return(
            <DrawerItem
                label = {data.name.toString()}
                labelStyle={{marginLeft: -16}}
                onPress={
                    () => {props.navigation.navigate('Class', { name: data.name.toString() })}
                }
                icon={() => <FontAwesome name='book' size={16} />}
            />
        );
    }

    const LogoutAlert = () => {
        Alert.alert(
            "Loging out!",
            "Are you sure you want to log out?",
            [
            {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
            },
            { text: "Yes", onPress: () => props.navigation.navigate('Welcome') }
            ],
            { cancelable: false }
        );
    }

    return(
            <View  style={{flex: 1}}>
                <View
                    style={{flex:0.4, justifyContent: "flex-end", margin:20}}
                >
                    <Image 
                        source={
                            require('../../images/OASYS.png')
                        }
                        resizeMode = 'center'
                        style = {{height: 50, width: 100}}         
                    />
                    <Text style={{marginTop:10}}>Online Attendance System</Text>
                </View>
                <View style={{flex: 1}}>
                    <DrawerItem
                        label="Student Classes"
                        labelStyle={{marginLeft: -16}}
                        onPress={() => props.navigation.navigate('Student Classes')}
                        icon={() => <AntDesingn name='dashboard' size={16} />}
                    />
                    <FlatList 
                            data={classData}
                            renderItem={({item}) => <ClassDrawerItem data={item} /> }
                            keyExtractor={classes => classes.id}
                    /> 
                </View>
                <View style={{marginBottom:20}}>
                <DrawerItem
                        label="Logout"
                        labelStyle={{marginLeft: -16}}
                        onPress={LogoutAlert}
                        icon={() => <AntDesingn name='logout' size={16} />}
                    />
                </View>
                
            </View>
    );
};

export default () => {
    const [progress, setProgress] = React.useState(new Animated.Value(0));

    const scale = Animated.interpolate(progress, {
        inputRange: [0,1],
        outputRange: [1, 0.8]
    });

    const borderRadius = Animated.interpolate(progress, {
        inputRange: [0,1],
        outputRange: [0, 20]
    })

    const screenStyles = { borderRadius, transform: [{ scale }] };

    return(
        <Drawer.Navigator 
            drawerType='slide'
            overlayColor= 'transparent'
            initialRouteName="Classes"
            drawerStyle={{width: '50%'}}
            drawerContentOptions={{
                activeBackgroundColor: 'transparent'
            }}
            sceneContainerStyle ={{backgroundColor: 'white'}}
            drawerContent={props => {
                setProgress(props.progress);
                return <DrawerContent  {...props} />;
            }}
        >
            <Drawer.Screen name="Screens">
                {props => <Screens {...props} style={screenStyles} />}
            </Drawer.Screen>
        </Drawer.Navigator>
    );
};

