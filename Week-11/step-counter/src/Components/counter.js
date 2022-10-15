import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../redux/steps/Dispatch'
import '../CSS/counter.css'

function Counter(props){
    return (
        <div>
            <p>You have walked {props.numOfSteps} steps today!</p>
            <div className='controls'>
                <button className='btn-purple-txt-white' onClick={props.stepInc}>Add Steps</button>
                <button onClick={props.stepReset}>Reset</button>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);