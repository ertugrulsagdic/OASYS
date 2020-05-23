import { createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import * as firebase from 'firebase'
import { ReactReduxContext } from 'react-redux'

//Initial State
const initialState = {
    userInfo: { },
    email: '',
    userClasses: [],
    classCode: '',
    documentList: []
}

//Reducer
const reducer = (state= initialState, action) => {
    switch(action.type){
        case "setUserInfo":
            return {...state, userInfo: action.value};
        case "setEmail":
            return {...state, email: action.value};
        case "setUserClasses":
            return {...state, userClasses: action.value};
        case "setClassCode":
            return {...state, classCode: action.value};
        case "setDocumentList":
            return {...state, documentList: action.value};
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

const setUserClasses = (userClasses) => {
    return {
        type: "setUserClasses",
        value: userClasses
    }
}

const setDocumentList = (documentList) =>{
    return {
        type: "setDocumentList",
        value: documentList
    }
}

const wathUserClasses = (email) => {

    return function ( dispatch ) {

        const classesList = []
        
            const userRef = firebase.database().ref("User");
            const query = userRef.orderByChild('email').equalTo(email)
            return query.once('value').then(user => {  
                const promises = []
                user.forEach(userChild => {
                    userChild.child('classes').forEach(classesChild => {
                        var classCode = classesChild.val().classCode
                        const request = firebase.database().ref('Classes')
                        .orderByChild('classCode').equalTo(classCode)
                        .once('value').then(actualClass => {
                            actualClass.forEach(classChild => {
                                classesList.push({
                                    name: classChild.val().className,
                                    courseField: classChild.val().classField,
                                    instructue: classChild.val().instructure,
                                    classCode: classChild.val().classCode,
                                    theme: 'deepskyblue'
                                })
                            }) 
                        })
                        promises.push(request)
                    })
                })
                return Promise.all(promises)
            }).then(() => {
                dispatch(setUserClasses(classesList))
            })
                
    }
}

const watchDocuments = (classCode) =>{
console.log("girdi");
    return function ( dispatch ) {

        const documentList = []
      
        const classesRef = firebase.database().ref('Classes');
        const query = classesRef.orderByChild('classCode').equalTo(classCode);
        return query.once('value').then(snapshot => {
            const promises = []
            snapshot.forEach(child => {
                const ref = firebase.database().ref().child("Classes/" + child.key + "/Documents");
                ref.once('value', (snapshot) => {
                snapshot.forEach(snapshotchild =>{
                    documentList.push({
                        name: snapshotchild.child("name").val(),
                        title: snapshotchild.child("title").val(),
                        description: snapshotchild.child("description").val(),
                        uri: snapshotchild.child("uri").val()
                    })
                    
                })
            })
            promises.push(ref)
            })
            return Promise.all(promises)
        }).then(() => {
            dispatch(setDocumentList(documentList))
        })
    }
}

const setClassCode = (classCode) => {
    return {
        type: "setClassCode",
        value: classCode
    }
}


export {setUserInfo, watchUserInfo, wathUserClasses, setClassCode, watchDocuments}