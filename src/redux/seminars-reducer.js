const CHANGE_FILTER_TEXT = "CHANGE-FILTER-TEXT"


let initialState = {
    filterText: "",
    seminars: [
        {
            number: 9,
            name: "Повторение"
        },
        {
            number: 10,
            name: "Хуки"
        },
        {
            number: 11,
            name: "Структура приложения"
        },
        {
            number: 12,
            name: "Фильтр для магазина"
        },
        {
            number: 13,
            name: "Список дел"
        },
        {
            number: 14,
            name: "Условный рендер"
        },
        {
            number: 15,
            name: "Компоненты высшего порядка"
        },
        {
            number: 16,
            name: "Redux"
        }
    ]
        
    
}

const seminarsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_FILTER_TEXT:
            state.filterText = action.text
            return state
        default:
            return state
    }
}

export let changeFilterTextActionCreator = (text) => {
    return (
        {
            type: CHANGE_FILTER_TEXT, 
            text: text
        }
    )
}


export default seminarsReducer