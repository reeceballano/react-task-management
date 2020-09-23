import React from 'react';

const Add = ({ task, handleOnchange, handleSubmit }) => {
    return(
        <form onSubmit={ handleSubmit }>
            <input onChange={ handleOnchange } type="text" value={ task } placeholder="Add Task"/>
        </form>
    )
}

export default Add;