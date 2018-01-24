import React from 'react';
import Task from "./Task";
import TextField from "material-ui/TextField"
import Button from "material-ui/Button"
import AddIcon from 'material-ui-icons/Add';
import Grid from 'material-ui/Grid';

class TaskList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      task: '',
      tasks: ['one', 'two', 'three', 'four']
    };

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
        tasks: this.state.tasks.filter((task, Index) => index !== Index)
      })
    }

  render() {

    return (
      <div>
        <div>
          <TextField label="Add" onChange={this.handleChange}/>
          <Button fab color="primary" aria-label="add" onClick={this.handleClick}><AddIcon /> </Button>

          <Grid item xs={12} sm={6}>
            <TextField
              id="task"
              label="Search"
              onChange={this.searchChanged}
              margin="normal"
            />
          </Grid>
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