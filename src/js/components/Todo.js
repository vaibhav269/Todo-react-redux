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
        this.delete = this.delete.bind(this);
    }

    markDone(){
        let { todo } = this.props;
        console.log("marking as done ",todo.id);
        this.props.todoMarkComplete(todo.id);
    }

    delete(){
        let { todo } = this.props;
        console.log("deleting the todo ",todo.id);
        this.props.todoDelete(todo.id);        
    }

    render(){
        var {todo} = this.props;

        function todoName(){
            if(todo.status == 'DONE'){
                return(
                    <div className="text-secondary">
                        <del>{todo.todoName}</del>
                    </div>
                )
            }
            else{
                return(
                    <div >
                        {todo.todoName}
                    </div>
                )
            }
        }

        return(
            <div style={{ fontSize:'150%'}} className = "list-group-item p-2" >
                <div style={ widthNinety } className="w- d-inline-block">                    
                    {todoName()}                
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