import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Card, Divider } from 'react-native-elements';
import Avatar from 'react-native-user-avatar';


const CommentScreen = (props) => {

    const commentList = [
        {
            id: '1',
            name: 'Ertugrul Sagdic',
            comment: 'React Native is awesome tool to make apps'
        },
        {
            id: '2',
            name: 'Melisa Donmez',
            comment: 'React Native is awesome tool to make apps'
        },
        {
            id: '3',
            name: 'Ekin Nohutcu',
            comment: 'React Native is awesome tool to make apps'
        },
        {
            id: '4',
            name: 'Berna Altinel',
            comment: 'React Native is awesome tool to make apps'
        },
      ]

    const Comment = ({props}) => {
        return(
            <Card containerStyle={{ margin: 20, borderRadius:10, width: '90%' }}>
                <View style={{ flexDirection: 'row' , marginBottom:10 }}>
                    <Avatar 
                        style={{ marginRight: 5 }}
                        name= {props.name}
                    />
                    <Text style={{ fontSize: 19, }}> {props.name} </Text>
                </View>
                <Divider style={{ backgroundColor: 'black' }} />
                <Text style={{ marginVertical: 10, fontSize: 17 }}> {props.comment} </Text>
            </Card>
        );
    };

    return(
        <View style={styles.container}>
            <FlatList      
                data={commentList}
                renderItem={({item}) => <Comment props={item} /> }
                keyExtractor={post => post.id}
            />   
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },
}); 

export default CommentScreen;