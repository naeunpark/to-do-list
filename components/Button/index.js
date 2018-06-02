import React from 'react';
import PropTypes from "prop-types";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function Button({btnName, onPress}){
    return (
        <TouchableOpacity style={styles.button} onPressOut={onPress}>
            <Text style={styles.btnText}>{btnName}</Text>
        </TouchableOpacity>
    )
}

Button.propTypes = {
    // btnName: PropTypes.string.isRequired,
    // onPress: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#FFF0C3",
        borderRadius: 5,
        marginTop:25
    },
    btnText: {
        fontSize: 25,
        margin: 15,
        color: "#808B96",
        textAlign: "center",
        fontWeight: "bold"
    }
});
export default Button;