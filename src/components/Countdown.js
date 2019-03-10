import React, { Component } from 'react';
//import Calendar from 'react-input-calendar';
import DatePicker from "react-datepicker";
import Clock from '../components/Clock';
import '../css/clock.css';
import "react-datepicker/dist/react-datepicker.css";
class Countdown extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            deadline: 'March, 12, 2019',
            time:'12:00',
            date: new Date(), 
        };
   }
 
    onChange = date => this.setState({ date })

    withCalendar(){
        return(
            <div>
                <h1 className="Clock">Selecciona una fecha para ponertela en la pera: </h1>
                <DatePicker 
                    selected={this.state.date}
                    onChange={this.onChange}/>
            </div>
        );    
    }

    render(){
        return(
            //here put the function for the change with calendar
            <div className="Countdown">
                <div className="Countdown-title">
                        Tiempo Restante para la exposición del forro de Genaro
                </div>
                   <Clock deadline={ this.state.deadline } time={this.state.time}/>
              </div>
        );
    }

    } 

export default Countdown;