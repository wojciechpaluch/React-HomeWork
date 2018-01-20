import React from 'react';
import Checkbox from 'material-ui/Checkbox'


class Task extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
        this.handleChange1 = this.handleChange1.bind(this)
    }

    handleChange1() {
        this.setState({
            checked: !this.state.checked
        })
    }

        render()
        {
            return (
                <div>
                    <Checkbox
                        checked={this.state.checked}
                        onChange={this.handleChange1}
                        value="checkedA"
                    />
                    {this.props.name}
                </div>
            );
        }
    }


export default Task;