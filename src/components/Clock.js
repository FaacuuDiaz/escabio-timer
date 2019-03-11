import React, { Component } from 'react';
class Clock extends Component {
    constructor(props) {
        super(props);
        this.time = {
                  hours: parseInt((this.props.time).split(':')[0]),
                  minutes: (parseInt((this.props.time).split(':')[1])),
                  seconds: (parseInt((this.props.time).split(':')[2])),
        };
        this.state = {
                  days: 0,
                  hours: 0,
                  minutes: 0,
                  seconds: 0,
             };
        }
        returnSpecificTime(){
          if(this.state.days === 0){
               let hours = this.time.hours- new Date().toTimeString().split(" ")[0].split(':')[0];
               let minutes = this.time.minutes - new Date().toTimeString().split(" ")[0].split(':')[1];
               let seconds = this.time.seconds - new Date().toTimeString().split(" ")[0].split(':')[2];   
               this.time = ({hours,minutes,seconds})
          }   
        }

        componentWillMount() {
             this.getTimeUntil(this.props.deadline);
        }
        componentDidMount() {
             setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
        }  
        leading0(num) {
             return num < 10 ? '0' + num : num;
        }
        getTimeUntil(deadline) {
             const time = Date.parse(deadline) - Date.parse(new Date());
             if(time < 0) {
                  this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
             
             } else {
                  const seconds = Math.floor((time/1000)%60)+this.time.seconds;
                  const minutes = Math.floor((time/1000/60)%60)+this.time.minutes;
                  const hours = Math.floor((time/(1000*60*60))%24)+this.time.hours;
                  const days = Math.floor(time/(1000*60*60*24));
                  this.setState({ days, hours, minutes, seconds });
             }
        }
        render() {
             return(
                 <div className="Clock">
                    <div className="row">
                        <div className="col-sm">
                              <div className="Clock-day">
                                {this.leading0(this.state.days)} Días
                                </div>
                        </div>
                        <div className="col-sm ">
                                {this.leading0(this.state.hours)} Horas
                        </div>
                        <div className="col-sm ">
                                {this.leading0(this.state.minutes)} Minutos
                        </div>
                        <div className="col-sm">
                                {this.leading0(this.state.seconds)} Segundos
                        </div>
                    </div>
                  </div>
             );
        }
}

export default Clock;