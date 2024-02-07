import React from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
    padding: 30px;
    font-size: 16px;
    line-height: 20px;
    border: 2px dashed #e8e8e8;
    border-radius: 15px;
    min-height: 230px;
    width: 85%;
    outline: none;
    resize: none;
    font-family: 'Pretendard-Medium';
`;

function TextInput(props) {
    const { value } = props;

    return <StyledTextarea value={value} />;
}

export default TextInput;
