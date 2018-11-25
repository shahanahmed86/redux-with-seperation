import types from './actiontypes';

export function addTodo(data) {
    return dispatch => {
        dispatch({ type: types.ADDTODO, payload: data });
    }
}

export function editTodo(val, ind) {
    return dispatch => {
        dispatch({ type: types.EDITTODO, payload: { val, ind } });
    }
}


export function deleteTodo(ind) {
    return dispatch => {
        dispatch({ type: types.DELETETODO, payload: ind });
    }
}