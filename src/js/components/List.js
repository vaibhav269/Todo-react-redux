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
            <div>
                <ul className="list-unstyled">
                    {                        
                        this.props.todos.map(function(todo){
                            return(
                                <li id={todo.id}>
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