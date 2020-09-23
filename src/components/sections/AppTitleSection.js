import React from 'react';

const AppTitleSection = ({ appTitle }) => {
    return (
        <section className="app-name">
            <h2>{ appTitle }</h2>
        </section>
    );
};

export default AppTitleSection;