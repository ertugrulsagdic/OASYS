import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import { Card} from 'react-native-elements'
import { Table, Row, Rows } from 'react-native-table-component';
import AnimatedProgressWheel from 'react-native-progress-wheel';
import { connect } from "react-redux";
import {watchUserInfo, wathUserClasses} from '../../redux/app-redux'

const mapStateToProps = (state) => {
    return {
      classCode: state.classCode,
      userInfo: state.userInfo
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      watchUserInfo: (email) => {dispatch(watchUserInfo(email))},
      wathUserClasses: (email) => {dispatch(wathUserClasses(email))}
    }
  }


const Attendance = (props) => {

    const total = 20;
    const [attended, setAttended] = useState("");
    const absence = total - attended;
    const percentage = (attended/total) * 100
    const [refreshing, setRefreshing] = useState(false);

    const state = {
        tableHead: ['Total', 'Attended', 'Absence'],
        tableData: [
          [total, attended, absence],
          
        ]
    }

    const findStudent = () =>{
        Object.values(props.userInfo).forEach(child => {
           setAttended(child.attendace);
        })
    }

    const handleRefresh = () => {
        setRefreshing(true)
        findStudent();
        setRefreshing(false)
    }
  
    return(
        <View style={{flex:1}}>
             <ScrollView
            contentContainerStyle={{flex:1}}
            refreshControl={
              <RefreshControl
                  refreshing={refreshing}
                  onRefresh={handleRefresh}
              />
            }
          >
            <Card title="Attendance" containerStyle={{width:'90%', marginBottom:50, borderRadius:10}}>
                <View>
                    <Table borderStyle={{borderWidth: 1}}>
                        <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
                        <Rows data={state.tableData} textStyle={styles.text}/>
                    </Table>
                </View>
            </Card>
            <View style = {styles.container}>
            <AnimatedProgressWheel
                progress={percentage}
                animateFromValue={0}
                color={'#dcdcdc'}
                size={120}
                width={20}
                
            />
            <Text style={{marginTop:20, fontSize:40}} >%{percentage}</Text>
            </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        flex:1
    },
    head:{ 
        height: 50, 
        backgroundColor: '#d3d3d3' 
    },
    text:{ 
        margin: 10
    }

}); 

export default connect(mapStateToProps, mapDispatchToProps)(Attendance);