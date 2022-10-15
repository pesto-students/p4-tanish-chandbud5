import { MODE } from "./action"

export const initialState = {
    lights: false,
    text: "OFF"
}

export const toggleReducer = (state = initialState, action) => {
    switch(action.type){
        case MODE:
            return {
                ...state,
                lights: !state.lights,
                text: state.text === "OFF" ? "ON" : "OFF"
            }
        default:
            return state
    }
}