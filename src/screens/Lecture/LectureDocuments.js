import React from 'react';
import { Text, StyleSheet, TouchableOpacity, FlatList, View } from 'react-native';
import { Card, Divider, SearchBar, Button } from 'react-native-elements'
import Entypo from 'react-native-vector-icons/Entypo'

const LectureDocuments = (props) => {

    documentList= [
        {
            id: '1',
            documentTitle: 'Syllabus',
            satement: 'You can find the syllabus of the lecture below',
            filemame:'syllabus.pdf'
        },
        {
            id: '2',
            documentTitle: 'Chapter 1',
            satement: 'You can find the first chapter slide of the lecture below',
            filemame:'chapter1.pdf'
        },
        {
            id: '3',
            documentTitle: 'Chapter 2',
            satement: 'You can find the second chapter slide of the lecture below',
            filemame:'chapter2.pdf'
        },
        {
            id: '4',
            documentTitle: 'Chapter 3',
            satement: 'You can find the third chapter slide of the lecture below',
            filemame:'chapter3.pdf'
        },
    ]

    state = {
        search: '',
    };

    Document = ({props}) =>{
        return(
            <Card containerStyle={{ margin: 20, borderRadius:10, width:'90%'}}>
                <Text style={{ fontSize: 20,}}> {props.documentTitle} </Text>
                <Divider style={{ backgroundColor: 'black', marginVertical:10 }} />
                <Text style={{ fontSize: 17, marginLeft:10}}> {props.satement} </Text>
                <TouchableOpacity>
                    <Card 
                        containerStyle={{ borderRadius:40, marginLeft:25}}
                        wrapperStyle={{flexDirection:'row'}}    
                    >
                        <Entypo name='text-document' size={20} />
                        <Text style={{marginLeft:10}}> {props.filemame} </Text>
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
                        data={this.documentList}
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
