import React, {Component} from 'react'

class TaskForm extends Component{

    constructor(){
        super();
        this.state = {
            titulo:'',
            descripcion:'',
            responsable:'',
            prioridad:'Baja'
        }
        this.handlerSubmit = this.handlerSubmit.bind(this);
        this.handlerInput = this.handlerInput.bind(this);
    }
    
    handlerInput(e){
        const { value, name } = e.target;
        this.setState({
            [name]: value
        })
    }

    handlerSubmit(e){
        e.preventDefault();
        this.props.addNewTask(this.state);
    }
    
    render(){
        return(
            <div className="card">
                <form className="card-body" onSubmit={this.handlerSubmit}>
                    <div className="form-group">
                        <input type="text" name="titulo" className="form-control" placeholder="titulo" onChange={this.handlerInput}></input>
                    </div>
                
                
                    <div className="form-group">
                        <input type="text" name="descripcion" className="form-control" placeholder="descripcion" onChange={this.handlerInput}></input>
                    </div>
               
                
                    <div className="form-group">
                        <input type="text" name="responsable" className="form-control" placeholder="responsable" onChange={this.handlerInput}></input>
                    </div>
         
                    <div className="form-group">
                        <select name="prioridad" className="form-control" onChange={this.handlerInput} >
                            <option>Baja</option>
                            <option>Media</option>
                            <option>Alta</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Agregar Tarea</button>
                </form>

            </div>
        );
    }
}

export default TaskForm;