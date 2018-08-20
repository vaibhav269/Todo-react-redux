import React,{Component} from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';

const mapDispatchToProps = (dispatch) => {
    return{
        addTodo : todo => dispatch(addTodo(todo))
    }
}

class ConnectedForm extends Component{
    
    constructor(){
        super();
        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(event){
        event.preventDefault();
        let todoName = this.refs.todoName.value;
        let id = new Date().getTime();  //generating unique id NOTE:SHOULD BE REPLACED WITH PRIMARY KEY ON CONNECTING WITH DATABASE
        let status = 'NOT_DONE';        
        this.props.addTodo({id,todoName,status});
        this.refs.todoName.value = "";
    }

    render(){
        return(
            <div className="w-100">
                <form
                    className="text-center"                               
                    onSubmit = {this.addTodo}>                
                    <input 
                        className="w-100 bg-primary border-0 text-white p-2 mb-2 rounded"
                        ref="todoName" 
                        type="text"
                        />
                    <button 
                        className = "w-50 btn btn-success"
                        type = "submit">
                        Add Todo
                    </button>
                </form>
            </div>
        )
    }
}

const Form = connect(null,mapDispatchToProps)(ConnectedForm);
export default Form;