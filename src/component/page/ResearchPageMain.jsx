import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { useState, useEffect } from 'react';

import TextInput from '../ui/TextInput';
import Button from '../ui/Button';
import HeaderComponent from '../ui/HeaderComponent';

import { animationMixin } from '../effect/Animation';

const AllGlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard-ExtraBold';
    src: url('/font/Pretendard-ExtraBold.ttf') format('truetype');
  }
    body {
    font-family: 'Pretendard-ExtraBold';
    }
  @font-face {
    font-family: 'Pretendard-Medium';
    src: url('/font/Pretendard-Medium.ttf') format('truetype');;
  }
 `;

/* 레이아웃 코드 */
const Wrapper = styled.div`
  padding-left: 180px;
  padding-right: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
`;

const SecondWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  padding-top: 30px;
  ${animationMixin};
`;

const ThirdWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 10px;
  width: 80%;
  ${animationMixin};
`;

const FourthWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 80%;
  height: 130px;
  gap: 20px;
  ${animationMixin};
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
    margin-left: 5px;
    margin-right: 5px;
`;

const HeaderBoxText = styled.p`
  font-size: 16px;
  text-align: center;
  color: #252a2f;
  font-family: 'Pretendard-ExtraBold';
`;

const HeaderBoxTextNone = styled.p`
  font-size: 16px;
  text-align: center;
  color: #8c8c8c;
  font-family: 'Pretendard-ExtraBold';
`;

const ClickableBox = styled(HeaderBox)`
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #dcdcdc;
  }
`;



/* 페이지 제목 */
const MainTitleText = styled.p`
    font-size: 46px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 0px;
    padding-bottom: 0px;
    color: #252a2f;
    font-family: 'Pretendard-ExtraBold';
    ${animationMixin};
`;

const HighlightText = styled.span`
    color: #252a2f;
    background: linear-gradient(to right, #d3e8f7, #e9dcf9);
    border-radius: 15px;
    padding-left: 10px;
    padding-right: 10px;
    font-family: 'Pretendard-ExtraBold';
`;


/* 본문 상단 */
const GuideText = styled.p`
  font-size: 12px;
  text-align: center;
  color: #aaaaaa;
  font-family: 'Pretendard-ExtraBold';
  ${animationMixin};
`;


const WordCloud = styled.img`
  width: 65%; /* 원하는 너비 설정 */
  height: auto; /* 높이를 auto로 설정하여 비율 유지 */
  object-fit: contain; /* 컨테이너 내에서 비율 유지하며 맞춤 */
  ${animationMixin}
`;


/* 본문 하단 */
const SubText = styled.p`
  font-size: 20px;
  text-align: center;
  color: #252a2f;
  font-family: 'Pretendard-ExtraBold';
  ${animationMixin};
`;

const CustomTextInput = styled(TextInput)`
    height: 100%;
    box-sizing: border-box; // padding을 포함한 높이로 설정
    ${animationMixin}
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
  background: linear-gradient(to right, #d3e8f7, #e9dcf9);
  color: white;
  justify-content: center;
  box-shadow: inset 0px 0px 3px rgba(0, 0, 0, 0.1);
  font-family: 'Pretendard-ExtraBold';
  ${animationMixin}
`;


/* 로딩화면 컴포넌트 */
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

const ResearchPageMain = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');

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
        <div>3분 정도 소요될 수 있어요</div>
      </>,
      <>
        <div style={{ fontSize: '50px', marginBottom: '5px', color: '#252a2f' }}>🕵🏻</div>
        <div>기사와 논문을 찾고 있어요</div>
      </>
    ];

    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
      }, 4000); // 메시지 변경 주기를 4초로 설정 (애니메이션 주기에 맞춤)

      return () => clearInterval(intervalId);
    }, [messages.length]);

    return (
      <Overlay>
        <Message>{messages[currentMessageIndex]}</Message>
      </Overlay>
    );
  };


  const handleButtonClick = async () => {
    setIsLoading(true);

    // Assuming your backend endpoint is '/api/research' and it expects
    // a payload with an "inputValue" key
    try {
      const response = await fetch('http://localhost:8000/research-page-main', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inputValue }),
      });


      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Assuming 'data' contains the keywords you want to pass
      const data = await response.json();
      navigate('/research-page-sub', { state: { message: data.message } });
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false); // Ensure loading is stopped regardless of the outcome
    }
  };


  return (
    <div>
      <AllGlobalStyle />
      <HeaderComponent>
        {/* HeaderComponent의 RightContainer에 들어갈 내용을 children으로 전달 */}
        <ClickableBox onClick={() => navigateTo('/spec-page')}>
          <HeaderBoxTextNone>명세서 작성</HeaderBoxTextNone>
        </ClickableBox>
        <ClickableBox onClick={() => navigateTo('/sim-page')}>
          <HeaderBoxTextNone>유사도 분석</HeaderBoxTextNone>
        </ClickableBox>
        <ClickableBox onClick={() => navigateTo('/research-page-main')}>
          <HeaderBoxText>연구동향</HeaderBoxText>
        </ClickableBox>
      </HeaderComponent>
      <Wrapper>
        <MainTitleText>🔍 <HighlightText>연구동향 리서치</HighlightText> 를 도와드릴게요</MainTitleText>
        <SecondWrapper>
          <WordCloud src={process.env.PUBLIC_URL + 'output.png'} />
          <GuideText >* 최근 1년 간 등록된 특허 기준 / Update: 2024.02.18 00:00</GuideText>
        </SecondWrapper>
        <ThirdWrapper>
          <SubText>아이디어를 입력해주시면, 관련 뉴스와 논문을 찾아드려요</SubText>
        </ThirdWrapper>
        <FourthWrapper>
          <CustomTextInput
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="아이디어를 입력해주세요"
          />
          <CustomButton title="👀" onClick={handleButtonClick} />
        </FourthWrapper>
      </Wrapper>
      {isLoading && <LoadingOverlay />}
    </div>
  );
};

export default ResearchPageMain;

