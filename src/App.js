import React, { Component } from 'react';
import Grid from 'material-ui/Grid'
import Task from './components/Task'

class App extends Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <Task/>
        </Grid>
      </Grid>

    );
  }
}

export default App;
