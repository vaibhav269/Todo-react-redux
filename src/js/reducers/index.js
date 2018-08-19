import {ADD_TODO} from '../constants/action-types';

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
        
        default: return state;
    }
}

export default rootReducer;