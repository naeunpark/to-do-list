import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, StatusBar, StyleSheet } from "react-native";
import LogInScreen from "../../screens/LogInScreen";
import ThemeStyles from "../../styles/ThemeStyles";
import RootNavigation from "../../navigation/RootNavigation";

class AppContainer extends Component {
    static propTypes = {
        isLoggedIn: PropTypes.bool.isRequired
    };
    
    render() {
        const { isLoggedIn } = this.props;
        return (
            <View style={styles.container}>
              <StatusBar hidden={false} />
              {isLoggedIn ? <RootNavigation /> : <LogInScreen />}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: ThemeStyles.PRIMARY_COLOR,
        flex:1
    }
});

export default AppContainer;