import React from "react";
import { Text, View, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import  {Card, Input, Divider} from 'react-native-elements';
import Icon from "react-native-vector-icons/Entypo";
import Avatar from 'react-native-user-avatar';



  const LecturerAssignment = () => {

    const total = 10;
    const submitted = 5;
    const percentage = (submitted/total)

    
    const postData = [
      {
        id: '1',
        name: 'Melisa Dönmez',
        filemame: '150116030_Report.pdf'
      },
      {
        id: '2',
        name: 'Ertugrul Sagdic',
        filemame: '150116030_Report.pdf'
      },
      {
        id: '3',
        name: 'Gulce Sirvanci',
        filemame: '150116030_Report.pdf'
      },
      {
        id: '4',
        name: 'Berre Ergun',
        filemame: '150116030_Report.pdf'
      },
      {
        id: '5',
        name: 'Zeynep Alıcı',
        filemame: '150116030_Report.pdf'
      }
      
    ];

    const Post = ({props}) => {
      return(
      <Card containerStyle={{ margin: 20, borderRadius:10, width:'90%'}}>
          <View style={{ flexDirection: 'row' }}>
            <Avatar 
              style={{ marginBottom: 10, marginRight: 5 }}
              name= {props.name}
            />
             <Text style={{ fontSize: 15,marginTop:5}}> {props.name} </Text>
           </View>
          <Divider style={{ backgroundColor: 'black', marginVertical:10,marginTop:-5 }} />
        <TouchableOpacity>
            <Card 
                containerStyle={{ borderRadius:40, marginLeft:15, marginTop: 5}}
                wrapperStyle={{flexDirection:'row'}}
                >
                <Text style={{marginLeft:10}}> {props.filemame} </Text>
                <Icon name="download" style={styles.icon1}></Icon>
            </Card>  
        </TouchableOpacity>  
      </Card> 
       );
    }

    return (
      <View style={styles.container}>
        <Card containerStyle={{borderRadius: 10}}>
         <Text style={{marginLeft: 150,fontSize:15}}>Report</Text>
         <Text>Total student: {total} {'\n'}Number of submitted assignment: {submitted}</Text>
          <View style={{ flexDirection: "row", backgroundColor: "lightgray", borderRadius: 4, overflow: 'hidden', margin:20}}>
           <View style={{ flex: percentage, height: 10,  backgroundColor: "red" }} />
             <View style={{ flex: 1 - percentage }} />
          </View>
          <Text style={{marginLeft: 150, marginTop: -10, fontSize:15}} >%{percentage * 100}</Text>
        </Card>
        <FlatList
          data={postData}
          renderItem={({item}) => <Post props={item} /> }
          keyExtractor={post => post.id}
        />
         
      </View>
    );
  }

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
        },
        icon1: {
            color: "rgba(128,128,128,1)",
            fontSize: 25,
            position: 'absolute',
            marginLeft: 240,
            
          },
        icon2: {
            color: "rgba(128,128,128,1)",
            fontSize: 40,
            position: 'absolute'
          },
        });
  
     export default LecturerAssignment;