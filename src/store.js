import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore'
// Reducers
import notifyReducer from './reducers/notifyReducer';
import settingsReducer from './reducers/settingsReducer';

// firebase config
const firebaseConfig = {
    apiKey: "AIzaSyCF619ry_BZyTr2xGZmTIyxPxldV5LuD8A",
    authDomain: "reactclientpannel-99f76.firebaseapp.com",
    databaseURL: "https://reactclientpannel-99f76.firebaseio.com",
    projectId: "reactclientpannel-99f76",
    storageBucket: "reactclientpannel-99f76.appspot.com",
    messagingSenderId: "497263988958"
};

// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

// init firebase instance
firebase.initializeApp(firebaseConfig);
// init firestore
// const firestore = firebase.firestore();
// const settings = { timestampsInSnapshots: true };
// firestore.settings(settings);

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
    reduxFirestore(firebase)
)(createStore)

// Add firebase to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    notify: notifyReducer,
    settings: settingsReducer
});

// Check for settings in localStorage
if (localStorage.getItem('settings') === null) {
    // Default Settings
    const defaultSettings = {
        disableBalanceOnAdd: true,
        disableBalanceOnEdit: false,
        allowRegistration: false
    }
    // LocalStorage only hold string, therefore converting obj -> str
    // Set to localStorage
    localStorage.setItem('settings', JSON.stringify(defaultSettings))
}

// create initial state
const initialState = { settings: JSON.parse(localStorage.getItem('settings')) };

// create store
const store = createStoreWithFirebase(
    rootReducer,
    initialState,
    compose(
        reactReduxFirebase(firebase)
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
