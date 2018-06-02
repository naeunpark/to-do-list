import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, StatusBar, StyleSheet } from "react-native";
import LogIn from "../LogIn";

class AppContainer extends Component {
    static propTypes = {
        isLoggedIn: PropTypes.bool.isRequired
    };
    render() {
        const { isLoggedIn } = this.props;
        return (
            <View style={styles.container}>
              <StatusBar hidden={false} />
              {isLoggedIn ? <Text>You are logged in</Text> : <LogIn />}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#78b7bb",
        flex:1
    }
});

export default AppContainer;