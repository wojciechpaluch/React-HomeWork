import React from 'react';
import Task from "./Task";

class TaskList extends React.Component {


    state = {
        tasks: ['one', 'two', 'three', 'four']
    }

    render() {
        return (
            <div>
                {this.state.tasks.map((taskName, index) => (
                <Task key={index} name={taskName}/>))}
            </div>
        );
    }
}

export default TaskList