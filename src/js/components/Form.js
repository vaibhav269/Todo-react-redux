import React,{Component} from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';
import '../../css/Form.css';

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
                    <label>Enter Todos here </label>
                    <input 
                        style = {{ color: '#fff', fontSize : '150%', backgroundColor : '#ee6352',outline:'none' }}
                        className = "w-100 border-0 text-white p-2 mb-2 rounded"
                        ref = "todoName" 
                        type = "text"
                        placeholder = "Enter todo here . . . "
                        autoFocus
                        />
                    <button 
                        style = {{ fontSize : '150%',cursor : 'pointer' }}
                        className = "w-50 btn btn-dark mt-2"
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