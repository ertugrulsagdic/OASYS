import React, {useState} from 'react';
import { View, StyleSheet, FlatList, Text} from 'react-native';
import { Card, Divider  } from 'react-native-elements'
import { Table, Row, Rows } from 'react-native-table-component';
import Avatar from 'react-native-user-avatar';
import { connect } from "react-redux";
import {watchUserInfo, wathUserClasses, watchStudentList} from '../../redux/app-redux'

const mapStateToProps = (state) => {
    return {
      classCode: state.classCode,
      studentList: state.studentList,
      totalAttendance: state.totalAttendance
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      watchUserInfo: (email) => {dispatch(watchUserInfo(email))},
      wathUserClasses: (email) => {dispatch(wathUserClasses(email))},
      watchStudentList: (classCode) => {dispatch(watchStudentList(classCode))}
    }
  }



const StudentList = (props) => { 

    const [refreshing, setRefreshing] = useState(false)


    const handleRefresh = () => {
        setRefreshing(true)
        props.watchStudentList(props.classCode)
        setRefreshing(false)
    }

        const Student = ({data}) =>{

            const tableHead = ['Total', 'Attended'],
            tableData = [
              [props.totalAttendance, data.attended]      
            ]
    
            return(
                <View>
                    <View style={{ flexDirection: 'row', marginBottom:10 }}>
                        <Avatar 
                            style={{ marginRight: 5 }}
                            size={28}
                            name= {data.name}
                        />
                        
                        <Text style={{ fontSize: 19, }}> {data.name} </Text>
                    </View>               
                    <Table borderStyle={{borderWidth: 1}}>
                            <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
                            <Rows data={tableData} textStyle={styles.text}/>
                    </Table>
                    <Divider style={{ backgroundColor: 'black', marginVertical:10, }} />
                </View>
            );
        }
    
    
       
            return (
                <View>
                    <Card containerStyle={{ margin: 20, borderRadius:10, width:'90%'}}>
                    <FlatList
                        contentContainerStyle={{ paddingBottom: 20}}
                        data={props.studentList}
                        renderItem={({item}) => <Student data={item} /> }
                        keyExtractor={student => student.name}
                        refreshing={refreshing}
                        onRefresh={handleRefresh}
                />       
                </Card>  
                </View>
               
        );
        
    
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

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);
