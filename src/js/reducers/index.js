import {ADD_TODO} from '../constants/action-types';
import {MARK_COMPLETE_TODO,DELETE_TODO} from '../constants/action-types';

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
                return{
                    ...state,
                    todos : state.todos.map(function(todo){
                            if(todo.id == action.payload){
                                var newTodo = {...todo,status:'DONE'}
                                return newTodo;
                            }
                            else{
                                return todo;
                            }
                    })
                }
                break;

        case DELETE_TODO :            
                return{
                    ...state,
                    todos : state.todos.filter(function(todo){
                            if(todo.id == action.payload){
                                return false;
                            }
                            else{
                                return true;
                            }
                    })
                }
                break;

        default: return state;
    }
}

export default rootReducer;