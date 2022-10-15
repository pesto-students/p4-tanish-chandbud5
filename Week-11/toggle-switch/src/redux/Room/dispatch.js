import { ModeAction } from "./action"

export const mapStateToProps = (state) => {
    return {
        lights: state.lights,
        text: state.text,
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        toggle:() => dispatch(ModeAction())
    }
}