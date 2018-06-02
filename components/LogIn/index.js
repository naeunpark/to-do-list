import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import Button from "../Button";

class LogIn extends Component {
    render () {
        return(
            <View style={styles.container}>
              <View style={styles.logoContainer}>
                <Image
                  style={styles.logo}
                  source={require('../../assets/images/logo_trans.png')}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.title}>Username</Text>
                <TextInput
                  style={styles.input}
                  placeholder = "username"
                  autoCapitalize = "none"
                />
                <Text style={styles.title}>Password</Text>
                <TextInput
                  style={styles.input}
                  placeholder = "password"
                  autoCapitalize = "none"
                />
                <Button btnName="Log In" />
              </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#78b7bb',
        flex:1,
        flexDirection: "column"
    },
    logoContainer: {
        flex:1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    inputContainer: {
        flex:3,
        marginRight: 40,
        marginLeft: 40,
    },
    logo: {
        width: 65,
        height: 90, 
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: "400",
        marginTop:15,
        marginBottom: 5
     },
    input: {
        height: 55,
        borderColor: '#fff',
        borderWidth: 1,
        backgroundColor: '#fff',
        borderRadius: 5
    },
});

export default LogIn;