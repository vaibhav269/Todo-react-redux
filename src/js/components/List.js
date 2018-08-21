import React,{Component} from 'react';
import {connect} from 'react-redux';
import Todo from '../components/Todo';

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
                <ul className="list-group w-100" style={{margin:'auto'}}>
                    {                        
                        this.props.todos.map(function(todo){
                            return(
                               <Todo todo={todo} key={todo.id}/>
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