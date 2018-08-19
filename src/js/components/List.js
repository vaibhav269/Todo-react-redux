import React,{Component} from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state)=>{
    return{
        todos:state.todos
    }
}
class ConnectedList extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="w-100">
                <ul className="list-group">
                    {                        
                        this.props.todos.map(function(todo){
                            return(
                                <li 
                                    className="w-100 list-group-item p-2"
                                    id={todo.id} >                                
                                        {todo.todoName}                                
                                </li>
                            )
                        })                        
                    }
                </ul>
            </div>
        )
    }
}

const List = connect(mapStateToProps)(ConnectedList);
export default List;