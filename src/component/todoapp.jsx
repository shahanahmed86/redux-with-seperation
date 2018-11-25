import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, editTodo, deleteTodo } from '../store/actions/actions';

function mapStateToProps(store) {
    return {
        reducer: store,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo: data => dispatch(addTodo(data)),
        editTodo: (val, ind) => dispatch(editTodo(val, ind)),
        deleteTodo: ind => dispatch(deleteTodo(ind)),
    }
}

class TodoApp extends Component {

    state = {
        message: '',
        index: '',
        editing: false,
    }

    handleChange = ev => {
        const { name, value } = ev.target;
        this.setState({
            [name]: value,
        });
    }

    onSaveHandler = () => {
        let { message, editing, index } = this.state;
        if (editing) {
            this.props.editTodo(message, index)
        }
        else {
            this.props.addTodo(message);
        }
        message = index = '';
        editing = false;
        this.setState({ message, index, editing });
    }

    onEditHandler = (message, index) => {
        this.setState({
            message, index,
            editing: true,
        });
    }

    onDeleteHandler = ind => {
        this.setState({
            message: '',
            index: '',
            editing: false,
        });
        this.props.deleteTodo(ind);
    }

    render() {
        const { reducer } = this.props;
        const { message, editing } = this.state;
        return (
            <div>
                <input
                    type='text'
                    name='message' value={message}
                    onChange={this.handleChange}
                />
                <input
                    type='button'
                    value={editing ? 'Edit' : 'Save'}
                    onClick={this.onSaveHandler}
                />
                <ul>
                    {reducer.todo.length > 0 ? (
                        reducer.todo.map((val, ind) => {
                            return (
                                <li key={ind}>
                                    {val}
                                    <input
                                        type='button'
                                        value='Edit'
                                        onClick={() => this.onEditHandler(val, ind)}
                                    />
                                    <input
                                        type='button'
                                        value='Delete'
                                        onClick={() => this.onDeleteHandler(ind)}
                                    />
                                </li>
                            );
                        })
                    ) : ''}
                </ul>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);