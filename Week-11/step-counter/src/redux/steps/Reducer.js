import { STEP_INCREMENT, STEP_RESET } from "./Action";

const initialSteps = {
    numOfSteps: 0
}

const stepOperator = (state = initialSteps, action) => {
    switch(action.type){
        case STEP_INCREMENT:
            return{
                ...state,
                numOfSteps: state.numOfSteps + 1
            };
        case STEP_RESET:
            return{
                ...state,
                numOfSteps: 0
            }
        default: return state
    }
}

export default stepOperator