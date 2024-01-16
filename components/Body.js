import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const Body = () => {

    return (
        <View style={styles.view}>
            <Image
                style={styles.image}
                source={{ uri: 'http://reactnative.dev/img/tiny_logo.png' }}
            />
            <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                      Nam quis commodo elit. Nunc nulla sapien, pellentesque ac 
                                      nisi nec, placerat vulputate nulla. Etiam quis ullamcorper 
                                      arcu. Duis malesuada sapien lacus, ac accumsan sapien rutrum 
                                      sed. Class aptent taciti sociosqu ad litora torquent per conubia 
                                      nostra, per inceptos himenaeos. Praesent nec leo et nulla tempor 
                                      molestie nec vitae ex. Sed accumsan ex in magna tristique, eget 
                                      egestas urna commodo. Aliquam iaculis quam urna, eget ornare massa 
                                      lobortis et.
            </Text>

            <Text style={styles.subtext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                      Nam quis commodo elit. Nunc nulla sapien, pellentesque ac 
                                      nisi nec, placerat vulputate nulla. Etiam quis ullamcorper 
                                      arcu. Duis malesuada sapien lacus, ac accumsan sapien rutrum 
                                      sed. Class aptent taciti sociosqu ad litora torquent per conubia 
                                      nostra, per inceptos himenaeos. Praesent nec leo et nulla tempor 
                                      molestie nec vitae ex. Sed accumsan ex in magna tristique, eget 
                                      egestas urna commodo. Aliquam iaculis quam urna, eget ornare massa 
                                      lobortis et.
            </Text>

        </View>

    );

}

const styles = StyleSheet.create({

    view: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 30
    },

    image: {
        Width: 90,
        height: 90,
        padding: 40
    },

    text:{

         width: "70%", 
         paddingLeft: 20, 
         paddingRight: 20

    },

    subtext:{

        width: "100%", 
        padding:20,
        textAlign:"justify"

   }

})

export default Body;