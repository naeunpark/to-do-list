import { connect } from "react-redux";
import Container from "./container";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../redux/modules/user";

// const mapStateToProps = (state, ownProps ) => {
//     console.log(state);
//     const { user } = state;
//     return {
//         isLoggedIn: user.isLoggedIn
//     };
// };

function mapDispatchToProps(dispatch) {
    return {
        logIn: bindActionCreators(actionCreators.logIn, dispatch),
        logOut: bindActionCreators(actionCreators.logOut, dispatch),
        setUser: bindActionCreators(actionCreators.setUser, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(Container);