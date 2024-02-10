import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { useState, useEffect } from 'react';

import TextInput from '../ui/TextInput';
import Button from '../ui/Button';

const AllGlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard';
    src: url('/font/Pretendard-ExtraBold.ttf') format('truetype');
  }
    body {
    font-family: 'Pretendard', sans-serif;
    }
 `;

 
/* 레이아웃 코드 */
const Wrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  height: auto;
  padding-top: 20px;
`;

const SecondWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 200px;
  align-items: stretch;
  padding-top: 60px;
  padding-left: 60px;
  padding-right: 60px;
  gap: 20px;
`;

const ThirdWrapper = styled.div`
  display: flex;
  width: 50%; 
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
`;

const FourthWrapper = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 30px;
  box-sizing: border-box;
`;


/* 상단바- 레이아웃 코드 */
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: #252a2f;
  color: white;
`;

const LeftContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 10px;
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

/* 상단바- 왼쪽 로고 코드  */
const HeaderLogo = styled.div`
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 100px;
    background: linear-gradient(to right, #9dbdeb, #7f85d8);
    margin-left: 5px;
    margin-right: 5px;
`;

const HeaderLogoText = styled.p`
  font-size: 27px;
`;

const ClickableBoxLogo = styled(HeaderLogo)`
  cursor: pointer;
`;


/* 상단바- 선택된 페이지 버튼*/
const HeaderBox = styled.div`
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 40px; /* 높이 조정 */
    width: 100px;
    background: #dcdcdc;
    margin-left: 5px;
    margin-right: 5px;
`;

const HeaderBoxText = styled.p`
  font-size: 16px;
  text-align: center;
  color: #252a2f;
`;

const ClickableBox = styled(HeaderBox)`
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #dcdcdc;
  }
`;



/* 상단바- 선택되지 않은 페이지 */
const HeaderBoxNone = styled.div`
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 40px; /* 높이 조정 */
    width: 100px;
    background-color: #3d3d3d;
    margin-left: 5px;
    margin-right: 5px;
`;

const HeaderBoxTextNone = styled.p`
  font-size: 16px;
  text-align: center;
  color: #8c8c8c;
  /* justify-content와 align-items 제거 */
`;

const ClickableBoxNone = styled(HeaderBoxNone)`
  cursor: pointer;
  transition: background-color 0.3s ease; // 배경 색상 변화에 애니메이션 효과를 추가합니다.
  &:hover {
    background-color: #dcdcdc; // 여기서 원하는 색상으로 바꿉니다.
  }
`;



/* 페이지 제목 */
const MainTitleText = styled.p`
    font-size: 46px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 0px;
    padding-bottom: 0px;
`;

const HighlightText = styled.span`
    color: #FFFFFF;
    background: linear-gradient(to right, #9dbdeb, #7f85d8);
    border-radius: 15px;
    padding-left: 10px;
    padding-right: 10px;
`;


/* 본문 상단 */
const GuideText = styled.p`
  font-size: 20px;
  text-align: center;
  //background-color: #252a2f;
  color: #252a2f;
  //border-radius: 15px;
`;

const CustomButton = styled(Button)`
  padding: 7px 7px;
  font-size: 30px;
  border-width: 0px;
  border-radius: 15px;
  display: flex;
  width: 140px;
  height: 100%;
  cursor: pointer;
  align-items: center;
  background: linear-gradient(to right, #9dbdeb, #7f85d8);
  color: white;
  justify-content: center;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Pretendard', sans-serif;
`;

const CustomTextInput = styled(TextInput)`
    height: 200px;
    box-sizing: border-box; // padding을 포함한 높이로 설정
`;


// 로딩화면 컴포넌트
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; // 수정됨
`;


const Message = styled.p`
  color: #d0d0d0;
  display: flex;
  flex-direction: column;
  font-size: 24px; // 수정됨
  opacity: 0; // 초기 상태는 투명
  align-items: center;
  animation: fadeInOut 4s infinite; // 4초 동안 무한 반복
  background-color:  rgba(0, 0, 0, 0.3);
  width: 368px;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);

  @keyframes fadeInOut {
    0%, 100% { opacity: 0; }
    50% { opacity: 1; }
  }
`;



const SpecPage = () => {
  const navigate = useNavigate();
  
  // 페이지 이동 함수
  const navigateTo = (path) => {
    console.log(`${path} clicked!`);
    navigate(path);
  };
  

  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 관리

  // 로딩 화면 컴포넌트
  const LoadingOverlay = () => {
    const messages = [
      <>
      <div style={{ fontSize: '50px', marginBottom: '5px', color: '#252a2f' }}>🤔</div>
      <div>작성해주신 내용을 분석하고 있어요</div>
      </>,
      <>
      <div style={{ fontSize: '50px', marginBottom: '5px', color: '#252a2f' }}>⌛️</div>
      <div>n분정도 소요될 수 있어요</div>
      </>
    ];
    
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
      }, 4000); // 메시지 변경 주기를 4초로 설정 (애니메이션 주기에 맞춤)
  
      return () => clearInterval(intervalId);
    }, []);
  
    return (
      <Overlay>
        <Message>{messages[currentMessageIndex]}</Message>
      </Overlay>
    );
  };

  const handleButtonClick = () => {
    setIsLoading(true);
    {/* 버튼 클릭 시, 서버 전달 및 응답 요청*/}
    {/*응답을 받으면 (false)로 설정 -> 로딩 화면을 비활성화*/}
  };

  return (
    <div>
      <AllGlobalStyle />
      <Header>
      <LeftContainer>
          <ClickableBoxLogo onClick={() => navigateTo('/')}>
            <HeaderLogoText>PAPA</HeaderLogoText>
          </ClickableBoxLogo>
        </LeftContainer>
        <RightContainer>
          <ClickableBoxNone onClick={() => navigateTo('/spec-page')}>
            <HeaderBoxTextNone>명세서 작성</HeaderBoxTextNone>
          </ClickableBoxNone>
          <ClickableBox onClick={() => navigateTo('/sim-page')}>
            <HeaderBoxText>유사도 분석</HeaderBoxText>
          </ClickableBox>
          <ClickableBoxNone onClick={() => navigateTo('/research-page')}>
            <HeaderBoxTextNone>연구동향</HeaderBoxTextNone>
          </ClickableBoxNone>
        </RightContainer>
      </Header>
      <Wrapper>
          <MainTitleText>🧐 <HighlightText>유사도 분석</HighlightText> 을 도와드릴게요</MainTitleText>
          <SecondWrapper>
            <CustomTextInput></CustomTextInput>
            <CustomButton title='🔍' onClick={handleButtonClick} /> {/* 버튼 클릭 이벤트 핸들러 연결 */}
            {isLoading && <LoadingOverlay />}
          </SecondWrapper>
      </Wrapper>
    </div>
  );
};

export default SpecPage;

