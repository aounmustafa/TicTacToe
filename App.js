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
 // const [player,playerTurn]=React.useState("player1")
  const[sign,changeSign]=React.useState("")
  const[sign2,changeSign2]=React.useState("")
  const[sign3,changeSign3]=React.useState("")
  const[sign4,changeSign4]=React.useState("")
  const[sign5,changeSign5]=React.useState("")
  const[sign6,changeSign6]=React.useState("")
  const[sign7,changeSign7]=React.useState("")
  const[sign8,changeSign8]=React.useState("")
  const[sign9,changeSign9]=React.useState("")
  const [player,playerTurn]=React.useState("player1")
  return(
  <View style={styles.board}>
    <Text style={{fontSize:25,marginBottom:"10%",transform: [{ rotate: '180deg' }]}}>Player 2: 0</Text>
    <View style={styles.innerRows}>
  <Pressable style={styles.btns} onPress={()=>changeSign(checkSign(sign,player,playerTurn))} ><Text>{sign}</Text></Pressable>
  <Pressable style={styles.btns} onPress={()=>changeSign2(checkSign(sign2,player,playerTurn))}><Text>{sign2}</Text></Pressable>
  <Pressable style={styles.btns} onPress={()=>changeSign3(checkSign(sign3,player,playerTurn))}><Text>{sign3}</Text></Pressable>
    </View>

    <View style={styles.innerRows}>
  <Pressable style={styles.btns} onPress={()=>changeSign4(checkSign(sign4,player,playerTurn))} ><Text>{sign4}</Text></Pressable>
  <Pressable style={styles.btns} onPress={()=>changeSign5(checkSign(sign5,player,playerTurn))}><Text>{sign5}</Text></Pressable>
  <Pressable style={styles.btns} onPress={()=>changeSign6(checkSign(sign6,player,playerTurn))}><Text>{sign6}</Text></Pressable>
    </View>

    <View style={styles.innerRows}>
  <Pressable style={styles.btns} onPress={()=>changeSign7(checkSign(sign7,player,playerTurn))} ><Text>{sign7}</Text></Pressable>
  <Pressable style={styles.btns} onPress={()=>changeSign8(checkSign(sign8,player,playerTurn))}><Text>{sign8}</Text></Pressable>
  <Pressable style={styles.btns} onPress={()=>changeSign9(checkSign(sign9,player,playerTurn))}><Text>{sign9}</Text></Pressable>
    </View>
    <Text style={{fontSize:25,marginTop:"10%"}}>Player 1: X</Text>
  </View>)
}
const checkSign=(sign,player,playerTurn)=>{
  
  if(sign==="" && player==="player1"){
  playerTurn("player2")
    return "X"
}
else if(sign==="" && player==="player2"){
  playerTurn("player1")
return "0"
}
else{
  return sign;
}}



const changePlayer=(player)=>{
  if(player==="player1")
  return "player2"
else{
  return "player1"
}
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
