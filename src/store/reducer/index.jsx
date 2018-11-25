import types from '../actions/actiontypes';

const initialState = {
    todo: ['a', 'b', 'c', 'd', 'e', 'f'],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADDTODO: {
            return {
                ...state,
                todo: state.todo.concat(action.payload),
            }
        }
        case types.EDITTODO: {
            state.todo.splice(action.payload.ind, 1, action.payload.val);
            return {
                ...state,
            }
        }
        case types.DELETETODO: {
            state.todo.splice(action.payload, 1);
            return {
                ...state,
            }
        }        
        default: {
            return state;
        }
    }
}

export default reducer;