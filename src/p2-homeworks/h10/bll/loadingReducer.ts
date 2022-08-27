import {AppStoreType} from "./store";

export type statePropsType = {
    isLoading: boolean
}

const initState = {
    isLoading: false
}

export type LoadingACType = {
    type: string
    isLoading: boolean
}

export const loadingReducer = (state:statePropsType = initState, action: LoadingACType): statePropsType => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default: return state
    }
}

export const loadingAC = (isLoading: boolean) => ({type: "LOADING", isLoading})