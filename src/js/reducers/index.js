import {ADD_TODO} from '../constants/action-types';
import {MARK_COMPLETE_TODO} from '../constants/action-types';

const initialState = {
    todos:[]
}

const rootReducer = (state = initialState,action) =>{
    switch(action.type){
        case ADD_TODO:  
                return {
                     ...state,
                     todos:[
                         ...state.todos,
                        action.payload
                    ]};
                break;

        case MARK_COMPLETE_TODO:
                console.log("Still working");
                return{
                    ...state,
                    todos : state.todos.map(function(todo){
                            if(todo.id == action.payload){
                                console.log("got the todo");
                                var newTodo = {...todo,status:'DONE'}
                                return newTodo;
                            }
                            else{
                                return todo;
                            }
                    })
                }
                console.log("marked as done");
                break;

        default: return state;
    }
}

export default rootReducer;