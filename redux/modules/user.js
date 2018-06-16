//Actions 
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';
const SET_USER = 'SET_USER';

//Action Creators
function logIn() {
    return{
        type: "LOG_IN"
    };
}

function logOut() {
    return{
        type: "LOG_OUT"
    };
}

function setUser() {
    return{
        type: "SET_USER"
    };
}

//initial State 
const initialState = {
    isLoggedIn: false
}

//reducer 
function reducer(state = initialState, action) {
switch (action.type) {
    case LOG_IN:
      return applyLogIn(state);
    case LOG_OUT:
      return applyLogOut(state);
    case SET_USER:
      return applySetUser(state);
    default:
      return state;
  }
}

function applyLogIn(state) {
    return{
        ...state,
        isLoggedIn: true
    };
}

function applyLogOut(state) {
    return{
        ...state,
        isLoggedIn: false
    };
}

function applySetUser(state) {
    return{
        ...state,
    };
}
//reducer action 
// _isLoggedIn = isLoggedIn => {
//     this.setState({ isLoggedIn });
//   };

//export
const actionCreators = {
    logIn,
    logOut,
    setUser
}

export { actionCreators };

export default reducer;