import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Card} from 'react-native-elements'
import { Table, Row, Rows } from 'react-native-table-component';
import AnimatedProgressWheel from 'react-native-progress-wheel';

const Attendance = () => {

    const total = 20;
    const attended = 13;
    const absence = total - attended;
    const percentage = (attended/total) * 100

    const state = {
        tableHead: ['Total', 'Attended', 'Absence'],
        tableData: [
          [total, attended, absence],
          
        ]
      }

    return(
        <View style={styles.container}>
            <Card title="Attendance" containerStyle={{width:'90%', marginBottom:50, borderRadius:10}} >
                <View>
                    <Table borderStyle={{borderWidth: 1}}>
                        <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
                        <Rows data={state.tableData} textStyle={styles.text}/>
                    </Table>
                </View>
            </Card>
            <AnimatedProgressWheel
                progress={percentage}
                animateFromValue={0}
                color={'#dcdcdc'}
                size={120}
                width={20}
            />
            <Text style={{marginTop:20, fontSize:40}} >%{percentage}</Text>
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

export default Attendance;