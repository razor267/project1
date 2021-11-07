import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./gialogsReducer";
import navBarReducer from "./navBarReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navBarFriends: navBarReducer
});

let store = createStore(reducers);

export default store;