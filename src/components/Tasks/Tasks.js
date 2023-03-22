import React, {useState} from "react";
import './Tasks.css'

import Card from "../UI/Card/Card";
import TaskFilter from "./TaskFilter";
import TaskList from "./TaskList";

const Tasks = (props) => {

    const [filteredPriority, setFilteredPriority] = useState('all')

    console.log('Priority data in Tasks.js ' + filteredPriority)

    const filterChangeHandler = (priority) => {
        console.log('Filter change handled by Tasks.js')
        console.log(priority + ' in Tasks.js')
        setFilteredPriority(priority)
    }
    const filteredTasks = props.taskData.filter((task) => {
        if (filteredPriority === 'all') {
            return task.priority
        } else {
            return task.priority === filteredPriority
        }
    })

    return (
        <Card className='tasks'>
            <TaskFilter selected={filteredPriority} onChangeFilter={filterChangeHandler}></TaskFilter>
            <TaskList filteredTasks={filteredTasks}></TaskList>
        </Card>
    )
}

export default Tasks