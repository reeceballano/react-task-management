import React from 'react';
import Add from '../elements/Add';

const AddTaskSection = ({ task, handleOnchange, handleSubmit }) => {
    return (
        <section className="add-task">
            <Add task={ task } handleOnchange={ handleOnchange } handleSubmit={ handleSubmit } />
        </section>
    );
};

export default AddTaskSection;