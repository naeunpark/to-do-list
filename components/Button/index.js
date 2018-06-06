import React from 'react';
import PropTypes from "prop-types";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import ThemeStyles from "../../styles/ThemeStyles";

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
        backgroundColor: ThemeStyles.SECONDARY_COLOR,
        borderRadius: 5,
        marginTop:25
    },
    btnText: {
        fontSize: ThemeStyles.FONT_SIZE_LARGE,
        margin: 15,
        color: ThemeStyles.DARK_COLOR,
        textAlign: "center",
        fontWeight: ThemeStyles.FONT_WEIGHT_HEAVY
    }
});
export default Button;