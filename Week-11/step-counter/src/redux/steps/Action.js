export const STEP_INCREMENT = "STEP_INCREMENT"
export const STEP_RESET = "STEP_RESET"

export function stepInc(){
    return {
        type: STEP_INCREMENT
    }
}

export function stepReset(){
    return {
        type: STEP_RESET
    }
}