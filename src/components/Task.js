import React, {Component} from 'react'

class Task extends Component{
    constructor(){
        super();
        this.removeTask = this.removeTask.bind(this);
    }

    removeTask(e){
        e.preventDefault();
        this.props.remove(this.props.index);
    }
    
    render(){
        return(
            <div className="col md-4">
                <div className="card mt-4">
                    <div className="card-header">
                        <h3>{this.props.task.titulo}</h3>
                        <span className="badge badge-pill badge-danger ml-2">
                            {this.props.task.prioridad}
                        </span>
                    </div>
                    <div className="card-body">
                        <p>descripcion:{this.props.task.descripcion}</p>
                        <p>responsable:{this.props.task.responsable}</p>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-danger" onClick={this.removeTask}>Eliminar</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Task;