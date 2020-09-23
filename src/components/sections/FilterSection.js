import React from 'react';
import FilterButton from '../elements/FilterButton';

const FilterSection = ({ filterTasks }) => {
    return (
        <section className="filter-tasks">
            <FilterButton filterTasks={ () => filterTasks('all') } filterName='All' />
            <FilterButton filterTasks={ () => filterTasks('completed') } filterName='Completed' />
            <FilterButton filterTasks={ () => filterTasks('notDone') } filterName='Not Done' />
        </section>
    );
};

export default FilterSection;