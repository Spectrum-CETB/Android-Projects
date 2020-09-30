import React from 'react';
import { StyleSheet, Text, View,Animated, ImageBackground ,TouchableOpacity} from 'react-native';
import {Button,TextInput} from 'react-native-paper';
import { createStackNavigator, createAppContainer } from "react-navigation";

const Results =(props)=>
  {const { data1 } = props.final;
  const name = data1 && data1.data && data1.data.location || '';
      
          return(
          
          
          <Text>{name}</Text>
          
          );
  }

export default Results;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'green',
      
    },
   
   
  });
  