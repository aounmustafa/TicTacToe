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
  let [arr,setArr]=React.useState([1,2,3,4,5,6,7,8,9])
  
  if((arr[0] == arr[1] && arr[1] == arr[2])||
      (arr[0] == arr[3] && arr[3] == arr[6]) || 
     (arr[0] == arr[4] && arr[4]==arr[8]) ||
       (arr[1] == arr[4] && arr[4] == arr[7]) || 
        (arr[2] == arr[4] && arr[4] == arr[6] )||
         (arr[2] == arr[5]  && arr[5] == arr[8])|| 
         (arr[3] == arr[4]  && arr[4]  == arr[5]) ||
        (arr[6] == arr[7]  && arr[7]  == arr[8])){
          if(player=== "player1"){
            return(
              <View>
                <Text>
                Winner is player 2
                </Text>
              </View>
            )
          
          }
          else { 
            return(
          <View>
          <Text>
          Winner is player 1
          </Text>
        </View>
            )
          }
        }
        
 else{

  return(
  <View style={styles.board}>
  
    <Text style={{fontSize:25,marginBottom:"10%",transform: [{ rotate: '180deg' }]}}>Player 2: 0</Text>
    <View style={styles.innerRows}>
  <Pressable style={styles.btns} onPress={()=>changeSign(checkSign(sign,player,playerTurn,checkWin(1,arr,setArr,checkSign(sign,player,playerTurn))))}><Text>{sign}</Text></Pressable>
  <Pressable style={styles.btns} onPress={()=>changeSign2(checkSign(sign2,player,playerTurn,checkWin(2,arr,setArr,checkSign(sign2,player,playerTurn))))}><Text>{sign2}</Text></Pressable>
  <Pressable style={styles.btns} onPress={()=>changeSign3(checkSign(sign3,player,playerTurn,checkWin(3,arr,setArr,checkSign(sign3,player,playerTurn))))}><Text>{sign3}</Text></Pressable>
    </View>

    <View style={styles.innerRows}>
  <Pressable style={styles.btns} onPress={()=>changeSign4(checkSign(sign4,player,playerTurn),checkWin(4,arr,setArr,checkSign(sign4,player,playerTurn)))} ><Text>{sign4}</Text></Pressable>
  <Pressable style={styles.btns} onPress={()=>changeSign5(checkSign(sign5,player,playerTurn),checkWin(5,arr,setArr,checkSign(sign5,player,playerTurn)))}><Text>{sign5}</Text></Pressable>
  <Pressable style={styles.btns} onPress={()=>changeSign6(checkSign(sign6,player,playerTurn),checkWin(6,arr,setArr,checkSign(sign6,player,playerTurn)))}><Text>{sign6}</Text></Pressable>
    </View>

    <View style={styles.innerRows}>
  <Pressable style={styles.btns} onPress={()=>changeSign7(checkSign(sign7,player,playerTurn),checkWin(7,arr,setArr,checkSign(sign7,player,playerTurn)))} ><Text>{sign7}</Text></Pressable>
  <Pressable style={styles.btns} onPress={()=>changeSign8(checkSign(sign8,player,playerTurn),checkWin(8,arr,setArr,checkSign(sign8,player,playerTurn)))}><Text>{sign8}</Text></Pressable>
  <Pressable style={styles.btns} onPress={()=>changeSign9(checkSign(sign9,player,playerTurn),checkWin(9,arr,setArr,checkSign(sign9,player,playerTurn)))}><Text>{sign9}</Text></Pressable>
    </View>
    <Text style={{fontSize:25,marginTop:"10%"}}>Player 1: X</Text>
  </View>)
}}



const checkSign=(sign,player,playerTurn)=>{
  
  if(sign==="" && player==="player1"){
  playerTurn("player2")
    return "X"
}
else if(sign==="" && player==="player2"){
  playerTurn("player1")
return "O"
}
else{
return sign;
}}

const checkWin=(num,arr,setArr,sign)=>{
  console.log(sign)
  console.log(num);
 arr[num-1]=sign;
 setArr(arr);
 for(var i=0;i<arr.length;i++){
    console.log("At index "+i+" = " + arr[i])
  
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
