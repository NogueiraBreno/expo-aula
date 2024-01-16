import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const Header = () => {

    return (
        <View style={styles.view}>
            <Text style={styles.textStyle}>Meu Devocional 2024</Text>
        </View>
    )

}

const styles = StyleSheet.create({

view:{
    backgroundColor: 'rgb(0,0,255)',
    padding: 10, 
    width: "100%" 
},

textStyle:{
     textAlign: "center", 
     fontSize: 30, 
     color: "white",
     padding:10 
}

})

export default Header;

