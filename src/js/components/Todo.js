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
            <div className="w-100">
                <div className="text-center d-block">

                    <div style = { {...cursorPointer,maxWidth:'10%',verticalAlign:'middle'} } className = "d-inline-block m-2" onClick = {this.markDone}>
                            <img className = "d-inline-block" src = { check } height='40'/>
                    </div>

                    <div style={{ fontSize:'150%',width:'70%',verticalAlign:'middle'}} className = "d-inline-block list-group-item p-2" >
                            {todoName()}                
                    </div>
                    
                    <div style = { {...cursorPointer,maxwidth:'10%',verticalAlign:'middle'} } className = "d-inline-block m-2" onClick = {this.delete}>
                            <img className = "d-inline-block" src = { dustbin } height='40'/>
                    </div>
                    
                </div>    
            </div>
        )
    }
    
}

const Todo = connect(null,mapDispatchToProps)(ConnectedTodo);
export default Todo;