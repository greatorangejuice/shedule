import React from "react";
class Shedule extends React.Component {
    render() {
        return (
            <div className="shedule-page">
                { this.props.group &&
                    <div>
                     <p>Номер группы: {this.props.group} </p>
                     <p> Сейчас {this.props.week} учебная неделя </p>
                     <p>Сегодня: {this.props.todayDate} </p>
                     <p>Расписание: {this.props.examSchedules} </p>
                    </div>
                }
            </div>
        );
    }
}

export default Shedule;