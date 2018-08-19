import  { ADD_TODO,MARK_COMPLETE_TODO } from '../constants/action-types';

export const addTodo = (todo) =>(
    {
        type: ADD_TODO,
        payload: todo
    }
);

export const todoMarkComplete = (id) =>(
    {
        type: MARK_COMPLETE_TODO,
        payload: id
    }
);

export const todoDelete = (id) =>(
    {
        type: DELETE_TODO,
        payload: id
    }
);