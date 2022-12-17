import { combineReducers, legacy_createStore as createStore} from "redux";

import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import seminarsReducer from "./seminars-reducer";

let reducers = combineReducers({
    messagesPage: dialogsReducer,
    profilePage: profileReducer,
    seminarsPage: seminarsReducer
})

let store = createStore(reducers)

export default store