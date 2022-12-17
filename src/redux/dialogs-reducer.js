
const ADD_MESSAGE = "ADD-MESSAGE"
const CHANGE_NEW_MESSAGE_TEXT = "CHANGE-NEW-MESSAGE-TEXT"


let initialState = {
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

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: state.dialogsData[action.user_id - 1].messagesData.length + 1,
                text: state.dialogsData[action.user_id - 1].newMessageText,
                from: "from_you"
            }
            state.dialogsData[action.user_id - 1].messagesData.push(newMessage)
            state.dialogsData[action.user_id - 1].newMessageText = ''
            return state
        
        case CHANGE_NEW_MESSAGE_TEXT:
            state.dialogsData[action.user_id - 1].newMessageText = action.text
            return state
        
        default:
            return state
    }
}

export let addMessageActionCreator = (user_id) => {
    return(
        {
            type: ADD_MESSAGE,
            user_id: user_id
        })
}

export let changeNewMessageTextActionCreator = (text, user_id) => {
    return (
        {
            type: CHANGE_NEW_MESSAGE_TEXT, 
            text: text,
            user_id: user_id
        }
    )
}

export default dialogsReducer