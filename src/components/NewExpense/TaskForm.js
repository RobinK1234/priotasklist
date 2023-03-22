import React, {useState} from "react";
import './TaskForm.css'

const TaskForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredPriority, setEnteredPriority] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }
    const priorityChangeHandler = (event) => {
        setEnteredPriority(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault()
        const expenseData = {
            title: enteredTitle,
            priority: enteredPriority,
            date: new Date(enteredDate)
        }
        props.onSaveTaskData(expenseData)
        setEnteredTitle('')
        setEnteredPriority('')
        setEnteredDate('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-task__controls'>
                <div className='new-task__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} value={enteredTitle}/>
                </div>
                <div className='new-task__control'>
                    <label>Date</label>
                    <input type='date' min='2023-01-18' max='2025-12-31' onChange={dateChangeHandler}
                           value={enteredDate}/>
                </div>
                <div className='new-task__control'>
                    <label>Priority</label>
                    <select onChange={priorityChangeHandler} value={enteredPriority}>
                        <option value='low'>low</option>
                        <option value='medium'>medium</option>
                        <option value='high'>high</option>
                    </select>
                </div>
            </div>
            <div className='new-task__actions'>
                <button type='submit'>Add Task</button>
            </div>
        </form>
    )
}

export default TaskForm