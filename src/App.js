import React from 'react';
import Header from './components/header'
import Form from "./components/form";
import Shedule from './components/shedule';

class App extends React.Component {

  state = {
    group: undefined,
    week: undefined,
    shedule: undefined,
    todayDate: undefined,
    shedules: undefined,
    examSchedules: [],
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
    console.log(data.examSchedules)

    this.setState({
      group: data.studentGroup.name,
      week: data.currentWeekNumber,
      todayDate: data.todayDate,
      exam: data.examSchedules,
      error: ''
    });
  } 
  }

  render() {
    return (
      <div>
        <Header />
        <Form getSheduleMethod={this.getShedule}/>
        <Shedule
        group = {this.state.group}
        week= {this.state.week}
        todayDate = {this.state.todayDate}
        tomorrowDate = {this.state.tomorrowDate}
        error = {this.state.error}
        exam = {this.state.examSchedules}
        />
      </div>
    );
  }
}

export default App
 
