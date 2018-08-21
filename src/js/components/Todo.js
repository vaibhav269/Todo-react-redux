import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { todoMarkComplete,todoDelete } from '../actions/index';
import homeicon from '../../assets/images/home.png';
import dustbin from '../../assets/images/dustbin.png'
import check from '../../assets/images/check5.png';
//Styles
//--------------------------------------------------------------------
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
            <div style={{ fontSize:'150%'}} className = "list-group-item p-2 pr-3" >
                
                <div style = { {...cursorPointer,width:'7%'} } className = "d-inline-block" onClick = {this.markDone}>
                    <img src = { check } height='40'/>
                </div>
                
                <div style={ {width:'86%'} } className="d-inline-block pl-3">                    
                    {todoName()}                
                </div>                

                <div style = { {...cursorPointer,width:'7%'} } className = "d-inline-block" onClick = {this.delete}>
                    <img src = { dustbin } height='40'/>
                </div>
            </div>
        )
    }
    
}

const Todo = connect(null,mapDispatchToProps)(ConnectedTodo);
export default Todo;