import React from 'react';
import { Text, StyleSheet, TouchableOpacity, FlatList, View, Alert, Linking } from 'react-native';
import { Card, Divider, SearchBar, Button } from 'react-native-elements'
import Entypo from 'react-native-vector-icons/Entypo'
import * as firebase from "firebase";

const LectureDocuments = (props) => {

    this.files = {
        list: []
     };
  
    const displayFile = () => {
        const ref = firebase.database().ref().child('Documents');
        ref.once('value', (snapshot) => {
            snapshot.forEach(snapshotchild =>{
                files.list.push({
                    name: snapshotchild.child("name").val(),
                    title: snapshotchild.child("title").val(),
                    description: snapshotchild.child("description").val(),
                    uri: snapshotchild.child("uri").val()
                })
             
            })
        })
    }

      displayFile();

      const dowloandFile = (fileName) =>{
        var ref = firebase.storage().ref().child("Documents/" + fileName);
        ref.getDownloadURL().then(function(url) {
            Linking.canOpenURL(url).then(supported => {
                if (supported) {
                  Linking.openURL(url);
                } else {
                  console.log("Don't know how to open URI: " + url);
                }
              });
            
            console.log(url);
        }, function(error){
            console.log(error);
        });

      }

     
    state = {
        search: '',
    };

    Document = ({props}) =>{
        return(
            <Card containerStyle={{ margin: 20, borderRadius:10, width:'90%'}}>
                <Text style={{ fontSize: 20,}}> {props.title} </Text>
                <Divider style={{ backgroundColor: 'black', marginVertical:10 }} />
                <Text style={{ fontSize: 17, marginLeft:10}}> {props.description} </Text>
                <TouchableOpacity onPress={
                        () => {dowloandFile(props.name)}
                    }>
                    <Card 
                        containerStyle={{ borderRadius:40, marginLeft:25}}
                        wrapperStyle={{flexDirection:'row'}}    
                    >
                        <Entypo name='text-document' size={20} />
                        <Text style={{marginLeft:10}}> {props.name} </Text>
                    </Card>  
                </TouchableOpacity>  
            </Card> 
        );
        
    }

        return (
            <View style={{flex:1}}>
                <SearchBar 
                        placeholder='Search Document'
                        lightTheme
                        round
                        editable={true}
                        onChangeText={this.updateSearch}
                        value={this.state.search}
                /> 
                <Button
                    title='Add Document'
                    containerStyle={{margin:20, width:'88%'}}
                    buttonStyle={{borderRadius:10,}}
                    color='white'
                    onPress={
                        () => {props.navigation.navigate('AddDocument')}
                    }
                 />
                 <View style={{flex:1}}> 
                    <FlatList
                        contentContainerStyle={{ paddingBottom: 20}}
                        data={files.list}
                        renderItem={({item}) => <this.Document props={item} /> }
                        keyExtractor={document => document.id}
                /> 
                </View>
            </View>
    );
    
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
        fontSize:30,
    }
}); 

export default LectureDocuments;