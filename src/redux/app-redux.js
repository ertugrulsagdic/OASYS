import { createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import * as firebase from 'firebase'

//Initial State
const initialState = {
    userInfo: { },
    email: '',
}

//Reducer
const reducer = (state= initialState, action) => {
    switch(action.type){
        case "setUserInfo":
            return {...state, userInfo: action.value};
        case "setEmail":
            return {...state, email: action.value};
        default:
            return state;
    }
}

//Store
const store = createStore(reducer, applyMiddleware(thunkMiddleware))
export {store}

//Action Creators

const setUserInfo = (userInfo) => {
    return {
        type: "setUserInfo",
        value: userInfo
    }
}

const setEmail = (email) => {
    return {
        type: "setEmail",
        value: email
    }
}

const watchUserInfo = (email) => {

    return function(dispatch){

        const userRef = firebase.database().ref("User");
    
        const query = userRef.orderByChild('email').equalTo(email)
         query.once('value').then(snapshot => {
            //take user
            var userInfo = snapshot.val()
            //assign it
            dispatch(setUserInfo(userInfo))

            dispatch(setEmail(email))
        })

    }
   
}

export {setUserInfo, watchUserInfo}