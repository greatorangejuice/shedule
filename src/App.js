import React from 'react';
import Info from "./components/Info";
import Form from "./components/form";
import Shedule from './components/shedule';

class App extends React.Component {

  state = {
    group: undefined,
    week: undefined,
    shedule: undefined,
    todayDate: undefined,
    shedules: undefined,
    error: undefined
  }

  getShedule = async (e) => {
    e.preventDefault();
    const group = e.target.elements.group.value;

    if(group) {
      
    const api_url = await 
    fetch(`https://journal.bsuir.by/api/v1/studentGroup/schedule?studentGroup=${group}`)
    const data = await api_url.json();
    console.log(data);

    
    this.setState({
      group: data.studentGroup.name,
      week: data.currentWeekNumber,
      todayDate: data.todayDate,
      shedules: data.todaySchedules,
      error: ''
    });
  } 
  }

 

  render() {
    return (
      <div>
        <Info />
        <Form getSheduleMethod={this.getShedule}/>
        <Shedule
        group = {this.state.group}
        week= {this.state.week}
        todayDate = {this.state.todayDate}
        tomorrowDate = {this.state.tomorrowDate}
        error = {this.state.error}
        />
      </div>
    );
  }
}

export default App
 
