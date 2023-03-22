import React from 'react';

import './TaskFilter.css';

const TaskFilter = (props) => {
    const filterYearHandler = (priority) => {
        props.onChangeFilter(priority.target.value)
    }

    return (
        <div className='task-filter'>
            <div className='task-filter__control'>
                <label>Filter by priority</label>
                <select onChange={filterYearHandler} value={props.selected.value}>
                    <option value='all'>all</option>
                    <option value='low'>low</option>
                    <option value='medium'>medium</option>
                    <option value='high'>high</option>
                </select>
            </div>
        </div>
    );
};

export default TaskFilter;