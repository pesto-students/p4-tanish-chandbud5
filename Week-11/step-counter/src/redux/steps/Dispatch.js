import { stepInc, stepReset } from "./Action"

export const mapStateToProps = (state) => {
    return {
        numOfSteps: state.numOfSteps
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        stepInc: () => dispatch(stepInc()),
        stepReset: () => dispatch(stepReset())
    }
}