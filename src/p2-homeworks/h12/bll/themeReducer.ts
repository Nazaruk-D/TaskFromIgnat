type changeThemeType = {
    type: "CHANGE-SITE-COLOR"
    value: string
}

export type themeReducerType = {
    theme: string
}

const initState = {
    theme: 'some'
};

export const themeReducer = (state: themeReducerType = initState, action: changeThemeType): themeReducerType => { // fix any
    switch (action.type) {
        case "CHANGE-SITE-COLOR": {
            return {...state, theme: action.value};
        }
        default:
            return state;
    }
};

export const changeThemeC = (value: string): changeThemeType => ({type: "CHANGE-SITE-COLOR", value}); // fix any