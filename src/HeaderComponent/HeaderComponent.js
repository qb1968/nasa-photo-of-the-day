import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
    color: white;
    font-size: 45px;
`;

const HeaderComponent = () => {
    return (
        <section className = 'header'>
            <div className = 'heading'>
                <H1>NASA Photo Of The Day</H1>
                
            </div>

        </section>
    );
}

export default HeaderComponent; 