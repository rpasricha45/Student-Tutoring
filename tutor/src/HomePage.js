import React, { Component } from 'react';
import {Dropdown} from 'reactjs-dropdown-component';

class HomePage extends Component{
  state = {
    school: [
      {
        id: 0,
        title: 'NJIT',
        selected: false,
        key: 'school'
      },
      {
        id: 1,
        title: 'Rutgers',
        selected: false,
        key: 'school'
      },
      {
        id: 2,
        title: 'Georgetown',
        selected: false,
        key: 'school'
      }
    ]
  }
  resetThenSet = (id, key) => {
    let temp = JSON.parse(JSON.stringify(this.state[key]));
    temp.forEach(item => item.selected = false);
    temp[id].selected = true;
    this.setState({
      [key]: temp
    });
  }
  
  

  render() {
    return (
    <div>
        <h1>Special Tutoring</h1>
        <Dropdown
        title="Select School"
        list={this.state.school}
        resetThenSet={this.resetThenSet}
        />
    <button onclick={null}>
      Start Learning!
    </button>
    </div>
        );

  };
};
  

export default App;
