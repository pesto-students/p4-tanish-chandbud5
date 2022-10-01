import { useState, useEffect } from 'react';
import DisplayTodo from './displayTodo';

export default function TaskManager(){
    const [newTask, setNewTask] = useState("");
    const [taskList, setTaskList] = useState([]);

    function newTaskHandler(e){
        setNewTask(e.target.value);
    }

    function addTask(e){
        e.preventDefault();
        taskList.push({
            task: newTask,
            done: false
        })
        setTaskList(taskList);
        setNewTask("");
    }
    
    function deleteTask(taskInd){
        taskList.splice(taskInd, 1);
        setTaskList(taskList);
    }

    function completeTask(taskInd){
        taskList[taskInd]["done"] = true;
    }

    return (
        <div className='todo'>
            <div className='input-form'>
                <form onSubmit={addTask}>
                    <input value={newTask} onChange={newTaskHandler}></input>
                    <input type='submit' value={"Add Task"}></input>
                </form>
            </div>
            <div className='display-todo'>
                {
                    taskList.map((value, index) => {
                        return <DisplayTodo id={index} task={value.task} done={value.done} onDelete={deleteTask} onComplete={completeTask}></DisplayTodo>
                    })
                }
            </div>
        </div>
    )
}
