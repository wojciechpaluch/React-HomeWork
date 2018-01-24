import React from 'react';
import Checkbox from 'material-ui/Checkbox'
import DeleteIcon from 'material-ui-icons/Delete'

class Task extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      checked: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange() {
    this.setState({
      checked: !this.state.checked
    })
  }

  render() {
    return (
      <div>
        <Checkbox
          checked={this.state.checked}
          onChange={this.handleChange}
          value="checkedA"
        />
        {this.props.name}
        <DeleteIcon onClick={this.props.onDelete}/>
      </div>
    );
  }
}


export default Task;