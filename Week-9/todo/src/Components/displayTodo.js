import React from 'react';

// Add row in a display table for each new task
function DisplayTodo(props){
    // row consists task and button to mark it as complete and delete 
    return (<tr>
                {/* If task is marked as done strike throught it */}
                {props.done && <td className='strike'>{props.task}</td>}
                {!props.done && <td>{props.task}</td>}
                {/* Button to mark as complete */}
                <td>
                    <button className='action' onClick={() => {
                        props.onComplete(props.id);
                    }}>
                        <img src='https://www.nicepng.com/png/full/236-2362999_check-icon-yellow-check-icon-png.png' alt='complete'></img>
                    </button>
                </td>
                {/* Button to delete task */}
                <td>
                    <button className='action' onClick={() => {
                        props.onDelete(props.id);
                    }}>
                        <img src='https://cdn0.iconfinder.com/data/icons/basic-8/97/5-512.png' alt='delete'></img>
                        </button>
                </td>
            </tr>)
}

export default DisplayTodo;