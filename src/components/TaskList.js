import React from 'react';
import Task from "./Task";
import TextField from "material-ui/TextField"
import Button from "material-ui/Button"

class TaskList extends React.Component {


    state = {
        tasks: ['one', 'two', 'three', 'four']
    }

    handleChange = (event) => {
        this.setState({task: event.target.value});
    }

    handleClick = (event) => {
        this.setState({
            tasks: this.state.tasks.concat(this.state.task)
        });
    }

    handleRemove = (index) => {
        this.setState({
            tasks: this.state.tasks.filter((task, iterationIndex) => index !== iterationIndex)
        })
    }
    render() {
        return (
            <div>
                <div>
                    <TextField onChange={this.handleChange}/>
                    <Button onClick={this.handleClick}>Add</Button>
                    <div>
                        {this.state.tasks.map((taskName, index) => (
                            <Task key={index} name={taskName} onDelete={() => this.handleRemove(index)}/>))}
                    </div>
                </div>
            </div>
        );
    }
}


export default TaskList