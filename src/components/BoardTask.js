import React, { Component } from 'react';
import Task from '../components/Task'
import TaskForm from '../components/TaskForm'
import {data} from '../data/data.json'
class BoardTask extends Component{
    constructor(){
        super();
        this.state = {
          data
        }
        this.addTask = this.addTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
      }
    
      addTask(task){
        this.setState({
          data: [...this.state.data,task]
        })  
      }
    
      removeTask(index){
        if ( window.confirm('Estas seguro que queres volarlo?')){
          this.setState({
            data: this.state.data.filter((e,i) => {
              return i !== index
            })
          })
        }
      }
    render(){
    const content = this.state.data.map((task,i) => {
        return(
          <Task task={task} index={i} remove={this.removeTask}/>
        )
      })
    
        return(
        <div className="container">
            <div className="col mt-4">
                <div className="col md-3">
                <TaskForm addNewTask={this.addTask}/>
                </div>
                <div className="row md-9">
                {content}
                </div>
            </div>
        </div>      
        );
    }
}

export default BoardTask;