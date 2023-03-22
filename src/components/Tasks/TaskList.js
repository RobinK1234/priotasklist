import React from "react";

import './TaskList.css'
import TaskItem from "./TaskItem";

const TaskList = (props) => {
    if (props.filteredTasks.length === 0) {
        return <p className='task-list__fallback'>No tasks found.</p>
    }

    return (
        <ul className='task-list'>
            {
                props.filteredTasks.map((task) => {
                    return <TaskItem
                        id={task.id}
                        title={task.title}
                        priority={task.priority}
                        date={task.date}
                    ></TaskItem>
                })
            }
        </ul>
    )
}

export default TaskList