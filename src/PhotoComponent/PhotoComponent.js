import React from 'react';
import styled from 'styled-components';

const PicDiv = styled.div`
    border: 10px solid blue;
    width:auto;
    margin:auto;
`;
const PhotoComponent = (props) => {
    console.log(props);
    return (
        <PicDiv>
            <img src = {props.url} alt = 'NASA Pic' />
        </PicDiv>
    )
}

export default PhotoComponent; 