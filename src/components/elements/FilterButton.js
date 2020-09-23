import React from 'react';

const FilterButton = ({ filterTasks, filterName }) => {
    return (
        <button onClick={ () => filterTasks('all')}>{ filterName }</button>
    );
};

export default FilterButton;