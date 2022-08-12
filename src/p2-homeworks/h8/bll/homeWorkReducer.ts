import {UserType} from "../HW8";

export type homeWorkReducerAT = {
    type: "sort" | "check"
    payload: 'up' | 'down' | number
}

export const homeWorkReducer = (state: Array<UserType>, action: homeWorkReducerAT): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            debugger
            if (action.payload === "up") {
               return [...state.sort((a, b) => b.age - a.age)]
            } else if (action.payload === "down") {
                return [...state.sort((a, b) => a.age - b.age)]
            } else return state

        }
        case 'check': {
            debugger
            if (action.payload) {
                return [...state.filter(a => a.age > action.payload)]
            } else {
                return state
            }

        }
        default:
            return state
    }
}