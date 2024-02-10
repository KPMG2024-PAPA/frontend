import React from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
    padding: 30px;
    font-size: 16px;
    line-height: 20px;
    border-radius: 15px;
    height: 230px;
    width: 85%;
    outline: none;
    border: none;
    resize: none;
    font-family: 'Pretendard-Medium';
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
`;

function TextInput(props) {
    const { value, className } = props;

    return <StyledTextarea className={className} value={value} />;
}

export default TextInput;
