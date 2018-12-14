import React from "react";

class Form extends React.Component {
    render() {
        return (
           <form onSubmit={this.props.getSheduleMethod}>
               <input type="text" name = "group" placeholder="Group"/>

               <button>
                Get Shedule
                </button>

           </form>
        );
    }
}

export default Form;