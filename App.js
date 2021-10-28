import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:50}}>Tic Tac Toe</Text>
      <StatusBar style="auto" />
    
      <Board/>
    </View>
  );
}
const Board=()=>{
  return(
  <View style={styles.board}>
    <Text style={{fontSize:25,marginBottom:"10%",transform: [{ rotate: '180deg' }]}}>Player 2: 0</Text>
    <View style={styles.innerRows}>
  <Pressable style={styles.btns}><Text>X</Text></Pressable>
  <Pressable style={styles.btns}><Text>X</Text></Pressable>
  <Pressable style={styles.btns}><Text>X</Text></Pressable>
    </View>

    <View style={styles.innerRows}>
  <Pressable style={styles.btns}><Text>0</Text></Pressable>
  <Pressable style={styles.btns}><Text>0</Text></Pressable>
  <Pressable style={styles.btns}><Text>0</Text></Pressable>
    </View>

    <View style={styles.innerRows}>
  <Pressable style={styles.btns}><Text>X</Text></Pressable>
  <Pressable style={styles.btns}><Text>X</Text></Pressable>
  <Pressable style={styles.btns}><Text>X</Text></Pressable>
    </View>
    <Text style={{fontSize:25,marginTop:"10%"}}>Player 1: X</Text>
  </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  board:{
    alignItems:"center",
    justifyContent: 'center',
    width:"70%",
    height:"70%",
    padding:10,
    borderRadius:10,
    borderWidth:4,
    //backgroundColor:"#0a3940"
  // borderWidth: 5,
  
  
  },
  innerRows:{
    flexDirection:"row",
    justifyContent:"space-evenly",
    width:"100%",
    height:"20%",
    backgroundColor:"#2ed6f0"
  },
  btns:{
    alignItems:'center',
    borderRightWidth:1,
    width:"33.3%",
    justifyContent:"center",
    borderWidth:1
  }
})
;
