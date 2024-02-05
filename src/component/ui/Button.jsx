import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    cursor: pointer;
    padding-bottom: 30px;
    background-color: white;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    min-height: 270px;
    max-height: 270px;
    margin-bottom: 20px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
    outline: none; /* 윤곽선 제거 */
`;





function Button(props) {
    const { title, onClick } = props;
    
    return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>;
}

export default Button;
