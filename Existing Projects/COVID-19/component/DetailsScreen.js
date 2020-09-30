import React from 'react';
import{Component} from 'react';
import { StyleSheet, Text, View,Animated, ImageBackground ,BackHandler} from 'react-native';
import {Button,TextInput} from 'react-native-paper';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Results from '../Results'


 class DetailsScreen extends React.Component {
  constructor(props) {
    super(props)
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }
  componentDidMount() {
    
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 6000
    }).start();
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  };
  componentWillUnmount() {
   
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }
  handleBackButtonClick() {
    BackHandler.exitApp();
    return true;
  }

     state={
        fadeAnim: new Animated.Value(0),
        country:" ",
     countryname:" ",
     isLoading: true,
     
    }
    
   
    
  async show(){
        await fetch(`https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=${this.state.countryname}`,
        {
            headers: {
                "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
                "x-rapidapi-key": "f090f59fbdmshdf3968ea5c66d87p13fe43jsn2c506976f937"
            }
        })
        .then(data=>data.json())
        .then(data2=>{
          this.setState({country:data2})
          console.log(data2)  
        })
        this.setState({ isLoading: false });
      }
    static navigationOptions = {
        title: 'Details',
        headerStyle: {
          backgroundColor: '#03A9F4',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };
      
    render() {


      
      return(
        <View style={styles.container}>
          <ImageBackground style={styles.image}source={require('./back.jpeg')}>
              <TextInput label="Country Name" placeholder="Enter Name Of The Country" mode="outlined" style={{margin:10}} onChangeText={text=>this.setState({countryname:text})}/>
              <Button icon="heart" style={{margin:10,height:50,padding:7,backgroundColor:"#03A9F4",shadowColor:"black",shadowOffset:{width: 7, height: 7}}}  mode="contained" onPress={()=>{this.show()}}>SEE DETAILS</Button>
              {this.state.isLoading ? (
        <Text></Text>
      ) : (
        <Animated.View style={{padding:20, opacity:this.state.fadeAnim}}>
      <View  >
      
      <Text style={{color:"black",fontSize:22,alignSelf:"center",fontWeight:"bold",backgroundColor:"white",borderColor:"#03A9F4",marginTop:10,borderRadius:5,height:50,width:300,textAlign:"center",padding:2 }}>Country : </Text>
      <Text style={{color:"black",alignSelf:"center",fontWeight:"bold",marginTop:-25,padding:5}}>{this.state.country.data.location}</Text>
      <Text style={{color:"black",fontSize:22,alignSelf:"center",fontWeight:"bold",backgroundColor:"white",borderColor:"#03A9F4",marginTop:10,borderRadius:5,height:50,width:300,textAlign:"center",padding:2 }}>Total Cases Confirmed : </Text>
      <Text style={{color:"green",alignSelf:"center",fontWeight:"bold",marginTop:-25,padding:5}}>{this.state.country.data.confirmed}</Text>
      <Text style={{color:"black",fontSize:22,alignSelf:"center",fontWeight:"bold",backgroundColor:"white",borderColor:"#03A9F4",marginTop:10,borderRadius:5,height:50,width:300,textAlign:"center",padding:2 }}>Total Deaths Reported : </Text>
      <Text style={{color:"red",alignSelf:"center",fontWeight:"bold",marginTop:-25,padding:5}}>{this.state.country.data.deaths}</Text>
      <Text style={{color:"black",fontSize:22,alignSelf:"center",fontWeight:"bold",backgroundColor:"white",borderColor:"#03A9F4",marginTop:10,borderRadius:5,height:50,width:300,textAlign:"center",padding:2 }}>Time Last Checked : </Text>
      <Text style={{color:"black",alignSelf:"center",fontWeight:"bold",marginTop:-25,padding:5}}>{this.state.country.data.lastChecked}</Text>
      <Text style={{color:"black",fontSize:22,alignSelf:"center",fontWeight:"bold",backgroundColor:"white",borderColor:"#03A9F4",marginTop:10,borderRadius:5,height:50,width:300,textAlign:"center",padding:2 }}>Time Last Reported :</Text>
      <Text style={{color:"black",alignSelf:"center",fontWeight:"bold",marginTop:-25,padding:5}}>{this.state.country.data.lastReported}</Text>
      <Text style={{color:"black",fontSize:22,alignSelf:"center",fontWeight:"bold",backgroundColor:"white",borderColor:"#03A9F4",marginTop:10,borderRadius:5,height:50,width:300,textAlign:"center",padding:2 }}>Total Cases Recovered : </Text>
      <Text style={{color:"green",alignSelf:"center",fontWeight:"bold",marginTop:-25,padding:5}}> {this.state.country.data.recovered}</Text>
      
       </View>

       </Animated.View>
      )}
     
          </ImageBackground>
        </View>
        
      );
    }
  }
  
 
  const AppNavigator = createStackNavigator({
    Detail: {
      screen: DetailsScreen
    },
    
  });
  
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
  