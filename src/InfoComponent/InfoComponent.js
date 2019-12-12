import React from 'react';
import styled from 'styled-components';

const InDiv = styled.div`
    color: white;
    text-align: center;
    font-size: 25px;
`;
const H2 = styled.h2`
color:white;
text-align: center;
font-size:35px;
`;
const InSection = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    
`;

const InfoComponent = (props) => {
    //console.log(props);
    return (
        <InSection>
            
            <H2> {props.title}</H2>
            
            
            <InDiv> Date: {props.date}</InDiv>
            <InDiv> Explanation: {props.explanation}</InDiv>
        </InSection>
    );
}

export default InfoComponent; 