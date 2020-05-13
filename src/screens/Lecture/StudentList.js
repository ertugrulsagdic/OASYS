import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { Card, Divider  } from 'react-native-elements'
import { Table, Row, Rows } from 'react-native-table-component';
import Avatar from 'react-native-user-avatar';


export default class StudentList extends React.Component {

    studentList = [
        {
            id: '1',
            name: 'Ertugrul Sagdic',
            total: '20',
            attended: '15',
        },
        {
            id: '2',
            name: 'Melisa Donmez',
            total: '20',
            attended: '19',
        },
        {
            id: '3',
            name: 'Berna Altinel',
            total: '20',
            attended: '20',
        },
        {
            id: '4',
            name: 'Bek Dervisoglu',
            total: '20',
            attended: '0',
        },
        {
            id: '5',
            name: 'Ekin Nohutcu',
            total: '20',
            attended: '18',
        },
    ]

    state = {
        
    }

    AttendanceTable = ({props}) => {

        const id = props.id;
        const total = props.total;
        const attended = props.attended;

        


    }

    Student = ({props}) => {

        const tableHead = ['Student ID', 'Total', 'Attended'],
        tableData = [
          [props.id, props.total, props.attended]      
        ]

        return(
            <View>
                <View style={{ flexDirection: 'row', marginBottom:10 }}>
                    <Avatar 
                        style={{ marginRight: 5 }}
                        size={28}
                        name= {props.name}
                    />
                    
                    <Text style={{ fontSize: 19, }}> {props.name} </Text>
                </View>               
                <Table borderStyle={{borderWidth: 1}}>
                        <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
                        <Rows data={tableData} textStyle={styles.text}/>
                </Table>
                <Divider style={{ backgroundColor: 'black', marginVertical:10, }} />
            </View>
        );
    }


    render() {
        return (
            <View>
                <Card containerStyle={{ margin: 20, borderRadius:10, width:'90%'}}>
                <FlatList 
                   data={this.studentList}
                   renderItem={({item}) => <this.Student props={item} /> }
                   keyExtractor={student => student.id}
                />   
            </Card>  
            </View>
           
    );
    }
    
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    head:{ 
        height: 50, 
        backgroundColor: '#d3d3d3' 
    },
    text:{ 
        margin: 10
    }
}); 
