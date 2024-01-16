import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import Header from './components/Header.js';
import Body from './components/Body.js';

export default class App extends React.Component {

  render() {
    return (
      <ScrollView style={styles.scrollview}>
        <Header></Header>
        <Body></Body>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create ({
    scrollview:{
      marginTop: 25, 
      flex:1 
    }

})