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
        let id = 1;
        let status = false;        
        this.props.addTodo({id,todoName,status});
        this.refs.todoName.value = "";
    }

    render(){
        return(
            <div>
                <form 
                    onSubmit = {this.addTodo}>                
                    <input 
                        ref="todoName" 
                        type="text"
                        />
                    <button 
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