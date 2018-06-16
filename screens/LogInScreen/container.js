import React, { Component } from "react";
import LogInScreen from "./presenter";
import { Alert } from "react-native";

class Container extends Component {
    state = {
        username: "",
        password: "",
        isSubmit: false
    };

    render() {
        return (
            <LogInScreen
            {...this.state}
            changeUsername={this._changeUsername}
            changePassword={this._changePassword}
            submit={this._isSubmit}
            />
        );
    }

    _changeUsername = username => {
        this.setState({username})
    };

    _changePassword = password => {
        this.setState({ password });
    };

    _isSubmit = isSubmit => {
        this.setState({ isSubmit: true });
    }
}

export default Container;