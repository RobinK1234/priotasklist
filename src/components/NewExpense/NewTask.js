import React from "react";
import './NewTask.css'

import TaskForm from "./TaskForm";

const NewTask = (props) => {

    const saveTaskDataHandler = (enteredExpenseData) => {
        const taskData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddTask(taskData)

    }
    return (
        <div className='new-task'>
            <TaskForm onSaveTaskData={saveTaskDataHandler}></TaskForm>
        </div>
    )

}

export default NewTask