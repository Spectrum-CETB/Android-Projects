import React from 'react';
import { StyleSheet, Text, View,Animated, ImageBackground ,ScrollView} from 'react-native';
import {Button,TextInput} from 'react-native-paper';
import { createStackNavigator, createAppContainer } from "react-navigation";
import DetailsScreen from './component/DetailsScreen'
 class Homescreen extends React.Component{
  
  state={
    fadeAnim: new Animated.Value(0),
    countryname:""
  }

 componentDidMount() {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 2000
    }).start();
  };

fadeOut = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(this.state.fadeAnim, {
      toValue: 0,
      duration: 1000
    }).start(()=>this.props.navigation.navigate('Details'));
    
  };

   render(){ return (
     
    <View style={styles.container}>
     <ImageBackground style={styles.image} source={require('./back.jpeg')}>
       <ScrollView>
      <Animated.View style={{padding:20, opacity:this.state.fadeAnim}}>
      <Text style={{alignSelf:"center",fontSize:40,textAlign:"center",marginTop:30,color:"white",fontWeight:"bold",textShadowColor:"black", textShadowOffset:{width: 5, height: 5},textShadowRadius:10}}>WELCOME TO COVID-19 TRACKER APP</Text>
      <Text style={{alignContent:"center",marginTop:40,color:"white",alignSelf:"center",fontWeight:"bold",color:"white",textAlign:"center",fontSize:20,padding:5,textShadowColor:"black", textShadowOffset:{width: 5, height: 5},textShadowRadius:10}} >THIS APP LETS YOU TRACK DIFFERENT DETAILS REGARGING THE COVID-19 PANDEMIC</Text>
      
      <Text style={{alignContent:"center",marginTop:50,color:"white",alignSelf:"center",fontWeight:"bold",marginBottom:5,fontSize:25,textAlign:"center",textShadowColor:"black", textShadowOffset:{width: 5, height: 5},textShadowRadius:10}}>Follow these three easy steps to help prevent the spread of COVID-19</Text>
     <Text style={{alignContent:"center",marginTop:10,color:"white",alignSelf:"center",fontWeight:"bold",marginBottom:5,textAlign:"justify",margin:10,fontSize:18,textShadowColor:"black", textShadowOffset:{width: 5, height: 5},textShadowRadius:10}}>Sneeze or cough?  Cover your nose and mouth with a tissue or use your elbow.</Text>
     <Text style={{alignContent:"center",marginTop:5,color:"white",alignSelf:"center",fontWeight:"bold",marginBottom:5,fontSize:18,margin:10,textShadowColor:"black", textShadowOffset:{width: 5, height: 5},textShadowRadius:10}}>Wash your hands often with soap and water for at least 20 seconds.</Text>
     <Text style={{alignContent:"center",marginTop:5,color:"white",alignSelf:"center",fontWeight:"bold",marginBottom:5,fontSize:18,margin:10,textShadowColor:"black", textShadowOffset:{width: 5, height: 5},textShadowRadius:10}}>Clean and disinfect surfaces around your home and work frequently.</Text>
     
      <Button icon="heart" style={{marginTop:80,height:50,padding:7,backgroundColor:"#03A9F4",shadowColor:"black",shadowOffset:{width: 7, height: 7}}}  mode="contained" onPress={this.fadeOut}>Next</Button>
      </Animated.View>
      </ScrollView>
      </ImageBackground>
      
    </View>
  );}
   }




const AppNavigator = createStackNavigator({
  Home:{
    screen:Homescreen,
    
  },Details:{
    screen:()=><DetailsScreen/>
}
  
},
  {
    initialRouteName:"Home",
    headerMode:"none"
    
  },
 
);


export default createAppContainer(AppNavigator);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  image:{
    flex: 1,
    resizeMode: "cover",
    
    
  },
 
});
