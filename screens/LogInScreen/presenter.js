import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import Button from "../../components/Button";
import ThemeStyles from "../../styles/ThemeStyles";

class LogInScreen extends Component {
    render () {
        const { 
            logIn,
            logOut,
            setUser } = this.props;
            
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
                <Button btnName="Log In" onPressOut={logIn}/>
              </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: ThemeStyles.PRIMARY_COLOR,
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
        color: ThemeStyles.LIGHT_COLOR,
        fontSize: ThemeStyles.FONT_SIZE_MEDIUM,
        fontWeight: ThemeStyles.FONT_WEIGHT_MEDIUM,
        marginTop:15,
        marginBottom: 5
     },
    input: {
        height: 55,
        borderColor: ThemeStyles.LIGHT_COLOR,
        borderWidth: 1,
        backgroundColor: ThemeStyles.LIGHT_COLOR,
        borderRadius: 5
    },
});

export default LogInScreen;