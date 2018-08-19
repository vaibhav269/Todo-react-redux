import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { todoMarkComplete,todoDelete } from '../actions/index';


//Styles
//--------------------------------------------------------------------
const widthFive = {
    width:'5%'    
}

const widthNinety = {
    width:'90%'    
}

const cursorPointer = {
    cursor:'pointer'
}


//code
//---------------------------------------------------------------------
const mapDispatchToProps = (dispatch) =>{
    return {
        todoMarkComplete : (id) => dispatch(todoMarkComplete(id)),
        todoDelete : (id) =>dispatch(todoDelete(id))
    }
}

class ConnectedTodo extends Component{
    
    constructor(){
        super();
        this.markDone = this.markDone.bind(this);
    }

    markDone(){
        let { todo } = this.props;
        console.log("marking as done ",todo.id);
        this.props.todoMarkComplete(todo.id);
    }

    delete(){                
    }

    render(){
        var {todo} = this.props;
        return(
            <div className = "list-group-item p-2" >
                <div style={ widthNinety } className="w- d-inline-block">
                    {todo.todoName}                
                </div>

                <div style = { {...cursorPointer,...widthFive} } className = "d-inline-block" onClick = {this.markDone}>
                ✔
                </div>

                <div style = { {...cursorPointer,...widthFive} } className = "d-inline-block" onClick = {this.delete}>
                ✖
                </div>
            </div>
        )
    }
}

const Todo = connect(null,mapDispatchToProps)(ConnectedTodo);
export default Todo;