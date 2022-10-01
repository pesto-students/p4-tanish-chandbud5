import React from 'react';

function DisplayTodo(props){
    return (
        <table>
            <tr>
                <td>{props.id}</td>
                <td>{props.task}</td>
                <td>{props.done}</td>
                <td><button onClick={() => {
                    props.onComplete(props.id);
                }}>✅</button></td>
                <td><button onClick={() => {
                    props.onDelete(props.id);
                }}>❌</button></td>
            </tr>
        </table>
    )
}

export default DisplayTodo;