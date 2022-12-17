import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"


let store = {
    _state:
    {
        profilePage: {
            newPostText: "",
            postsData: [
                { id: 1, message: "Post1" },
                { id: 2, message: "Post2" },
                { id: 3, message: "Post3" }
              ] 
        },
        messagesPage:{
            dialogsData: [
                { 
                    user_id: 1, 
                    name: "John",
                    newMessageText: "",
                    messagesData: [
                        { id: 1, text: "Привет, чем сейчас занят ?", from: "from_you" },
                        { id: 2, text: "Здравствуй! Играю в футбол", from: "from_opponent" },
                        { id: 3, text: "Побеждаешь ?", from: "from_you" },
                        { id: 4, text: "Если бы", from: "from_opponent" },
                        { id: 5, text: "аххахаха", from: "from_you" },
                        { id: 6, text: "можно с тобой ?", from: "from_you" }
                    ]
                
                },
                { 
                    user_id: 2, 
                    name: "Artem",
                    newMessageText: "",
                    messagesData: [
                        { id: 1, text: "Прив", from: "from_you" },
                        { id: 2, text: "Дарова, че хотел", from: "from_opponent" },
                        { id: 3, text: "Домашку хотел попросить", from: "from_you" },
                        { id: 4, text: "кинь пжпж", from: "from_you" },
                        { id: 5, text: "по английскому страница 95 задание 5b", from: "from_opponent" },
                        { id: 6, text: "сенкс, выручил", from: "from_you" }
                    ]
                },
                { 
                    user_id: 3, 
                    name: "Ruf",
                    newMessageText: "",
                    messagesData: [
                        { id: 1, text: "Привет, ты скоро будешь дома ?", from: "from_opponent" },
                        { id: 2, text: "Я соскучилась", from: "from_opponent" },
                        { id: 3, text: "Приветик, я уже лечу", from: "from_you" },
                        { id: 4, text: "Я тоже сильно соскучился", from: "from_you" },
                        { id: 5, text: "Что на ужин приготовить ?", from: "from_opponent" },
                        { id: 6, text: "Давай пюре с котлетами )", from: "from_you" }
                    ]
                }
            ]
        }
    
    },
    getState() {
        return this._state
    },
    _callSubscriber() {},
    subscribe(observer) {
        this._callSubscriber = observer
    },
    


    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this._callSubscriber()
    }
}



export default store;

// let state=
// {
//     profilePage: {
//         newPostText: "",
//         postsData: [
//             { id: 1, message: "Post1" },
//             { id: 2, message: "Post2" },
//             { id: 3, message: "Post3" }
//           ] 
//     },
//     messagesPage:{
//         dialogsData: [
//             { 
//                 user_id: 1, 
//                 name: "John",
//                 newMessageText: "",
//                 messagesData: [
//                     { id: 1, text: "Привет, чем сейчас занят ?", from: "from_you" },
//                     { id: 2, text: "Здравствуй! Играю в футбол", from: "from_opponent" },
//                     { id: 3, text: "Побеждаешь ?", from: "from_you" },
//                     { id: 4, text: "Если бы", from: "from_opponent" },
//                     { id: 5, text: "аххахаха", from: "from_you" },
//                     { id: 6, text: "можно с тобой ?", from: "from_you" }
//                 ]
            
//             },
//             { 
//                 user_id: 2, 
//                 name: "Artem",
//                 newMessageText: "",
//                 messagesData: [
//                     { id: 1, text: "Прив", from: "from_you" },
//                     { id: 2, text: "Дарова, че хотел", from: "from_opponent" },
//                     { id: 3, text: "Домашку хотел попросить", from: "from_you" },
//                     { id: 4, text: "кинь пжпж", from: "from_you" },
//                     { id: 5, text: "по английскому страница 95 задание 5b", from: "from_opponent" },
//                     { id: 6, text: "сенкс, выручил", from: "from_you" }
//                 ]
//             },
//             { 
//                 user_id: 3, 
//                 name: "Ruf",
//                 newMessageText: "",
//                 messagesData: [
//                     { id: 1, text: "Привет, ты скоро будешь дома ?", from: "from_opponent" },
//                     { id: 2, text: "Я соскучилась", from: "from_opponent" },
//                     { id: 3, text: "Приветик, я уже лечу", from: "from_you" },
//                     { id: 4, text: "Я тоже сильно соскучился", from: "from_you" },
//                     { id: 5, text: "Что на ужин приготовить ?", from: "from_opponent" },
//                     { id: 6, text: "Давай пюре с котлетами )", from: "from_you" }
//                 ]
//             }
//         ]
//     }

// }

// export const subscribe = (observer) => {
//     rerenderEntireTree = observer
// }

// export const changeNewMessageText = (text, user_id) => {
//     state.messagesPage.dialogsData[user_id - 1].newMessageText = text
//     rerenderEntireTree()
// }


// export const addMessage = (user_id) => {
//     let newMessage = {
//         id: state.messagesPage.dialogsData[user_id - 1].messagesData.length + 1,
//         text: state.messagesPage.dialogsData[user_id - 1].newMessageText,
//         from: "from_you"
//     }
//     state.messagesPage.dialogsData[user_id - 1].messagesData.push(newMessage)
//     state.messagesPage.dialogsData[user_id - 1].newMessageText = ''
//     rerenderEntireTree()
// }


// export const changeNewPostText = (text) => {
//     state.profilePage.newPostText = text
//     rerenderEntireTree()
// }


// export const addPost = () => {
//     let newPost = {
//         id: 4,
//         message: state.profilePage.newPostText
//     }
//     state.profilePage.postsData.push(newPost)
//     state.profilePage.newPostText = ''
//     rerenderEntireTree()
// }



// export default state;