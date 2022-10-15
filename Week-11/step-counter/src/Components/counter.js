import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../redux/steps/Dispatch'

function Counter(props){
    return (
        <div>
            <h1>Steps - {props.numOfSteps}</h1>
            <button onClick={props.stepInc}>Add Steps</button>
            <button onClick={props.stepReset}>Reset</button>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);