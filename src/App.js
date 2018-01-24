import React, { Component } from 'react';
import Grid from 'material-ui/Grid'
import TaskList from './components/TaskList'
import Paper from 'material-ui/Paper';

class App extends Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={6}>
          <Paper>
          <TaskList/>
          </Paper>
        </Grid>
      </Grid>

    );
  }
}

export default App;
