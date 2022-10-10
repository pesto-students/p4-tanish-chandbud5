import { useEffect, useState } from 'react';
import DisplayTodo from './displayTodo';
import '../CSS/AddTodo.css';

export default function TaskManager(){
    // task to be added
    const [newTask, setNewTask] = useState("");
    // array containing tasks
    const [taskList, setTaskList] = useState([]);
    // to track number of active tasks
    const [activeCount, setActive] = useState(0);
    // to track number of tasks completed
    const [completedCount, setCompleted] = useState(0);

    // value of input field set as newTask
    function newTaskHandler(e){
        setNewTask(e.target.value);
    }

    // call effects to re render in case of active tasks or completed tasks update
    useEffect(() => {}, [activeCount, completedCount])

    // adding newTask to taskList
    // make input field empty
    // increment active tasks count
    function addTask(e){
        e.preventDefault();
        taskList.push({
            task: newTask,
            done: false
        })
        setTaskList(taskList);
        setNewTask("");
        setActive(activeCount + 1);
    }
    
    // delete task, decrement Active tasks count
    function deleteTask(taskInd){
        taskList.splice(taskInd, 1);
        setTaskList(taskList);
        setActive(activeCount - 1);
    }

    // mark task as complete
    // update taskList and incement taskComplete count
    function completeTask(taskInd){
        taskList[taskInd]["done"] = true;
        setTaskList(taskList)
        setCompleted(completedCount + 1);
        setActive(activeCount - 1);
    }

    return (
        <div className='todo'>
            <div className='input-form'>
                {/* form to add task */}
                <form className='addTask' onSubmit={addTask}>
                    <input className='text-input' value={newTask} onChange={newTaskHandler} required></input>
                    <input className='submit' type='submit' value={"+ Add Task"}></input>
                </form>
            </div>
            <div>
                {/* Display task in a table */}
                <table className='display-todo'>
                <tr>
                    <th className='taskTitle'>Task</th>
                    <th>Mark as complete</th>
                    <th>Delete</th>
                </tr>
                {/* passing all task in list to DisplayTodo prop to render row in table */}
                {
                    taskList.map((value, index) => {
                        return <DisplayTodo id={index} task={value.task} done={value.done} onDelete={deleteTask} onComplete={completeTask}></DisplayTodo>
                    })
                }
                </table>
            </div>
        </div>
    )
}
