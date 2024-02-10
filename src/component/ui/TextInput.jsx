import React, { useState } from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
    padding: 30px;
    font-size: 16px;
    line-height: 20px;
    border-radius: 15px;
    height: 100%;
    width: 85%;
    outline: none;
    border: none;
    resize: none;
    font-family: 'Pretendard-Medium';
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
`;


function TextInput(props) {
    // 미리보기 텍스트를 상태로 관리합니다.
    const [text, setText] = useState(''); // 초기값을 빈 문자열로 설정

    const handleChange = (event) => {
        // 사용자 입력에 따라 텍스트를 업데이트합니다.
        setText(event.target.value);
    };

    // `placeholder` 대신 `value`와 `onChange`를 사용하여 텍스트 입력을 관리합니다.
    return (
        <StyledTextarea
            className={props.className}
            value={text}
            onChange={handleChange}
            // 입력 필드가 비어있을 때 표시될 미리보기 텍스트
            placeholder={props.placeholder}
        />
    );
}

export default TextInput;
