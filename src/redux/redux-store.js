import {combineReducers, legacy_createStore as createStore} from "redux";
import reduserDialog from "./reduserDialog";
import reduserProfile from "./reduserProfile";
import reduserSidebarFriends from "./reduserSidebarFriends";

let redusers = combineReducers({
    profilePage:reduserProfile,
    dialogsPage:reduserDialog,
    sidebarFriends:reduserSidebarFriends
})

const store = createStore(redusers);

export default store;
