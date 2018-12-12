import React from "react";

class Shedule extends React.Component {
    render() {
        return (
            <div>
                { this.props.group &&
                    <div>
                     <p>Номер группы:  {this.props.group} </p>
                     <p>Учебная неделя: {this.props.week} </p>
                     <p>Сегодня: {this.props.todayDate} </p>
                     <p>Расписание: {this.props.shedules} </p>
                    </div>
                }
            </div>
        );
    }
}

export default Shedule;