import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { useState, useEffect } from 'react';

import TextInput from '../ui/TextInput';
import Button from '../ui/Button';

const AllGlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard-ExtraBold';
    src: url('/font/Pretendard-ExtraBold.ttf') format('truetype');
    font-family: 'Pretendard-Medium';
    src: url('/font/Pretendard-Medium.ttf') format('truetype');
  }
    body {
    font-family: 'Pretendard-ExtraBold', sans-serif;
    }
 `;
 
/* 레이아웃 코드 */
const Wrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  padding-top: 20px;
`;

const SecondWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
  padding-top: 30px;
`;

const ThirdWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 10px;
  width: 70%;
`;

const FourthWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 70%;
  height: 130px;
  gap: 20px;
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
  align-items: center;
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

const HeaderText = styled.p`
  font-size: 12px;
  color: white;
  margin-left: 5px;
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
    font-family: 'Pretendard-ExtraBold';
`;


/* 본문 상단 */
const GuideText = styled.p`
  font-size: 12px;
  text-align: center;
  color: #aaaaaa;
  font-family: 'Pretendard-ExtraBold';
`;


const WordCloud = styled.img`
  width: 60%; /* 원하는 너비 설정 */
  height: auto; /* 높이를 auto로 설정하여 비율 유지 */
  object-fit: contain; /* 컨테이너 내에서 비율 유지하며 맞춤 */
`;


/* 본문 하단 */
const SubText = styled.p`
  font-size: 20px;
  text-align: center;
  color: #252a2f;
  font-family: 'Pretendard-ExtraBold';
`;

const CustomTextInput = styled(TextInput)`
    height: 100%;
    box-sizing: border-box; // padding을 포함한 높이로 설정
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
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  font-family: 'Pretendard', sans-serif;
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
    }, []);
  
    return (
      <Overlay>
        <Message>{messages[currentMessageIndex]}</Message>
      </Overlay>
    );
  };

  // const handleButtonClick = () => {
  //   setIsLoading(true);
  //   {/* 버튼 클릭 시, 서버 전달 및 응답 요청*/}
  //   {/*응답을 받으면 (false)로 설정 -> 로딩 화면을 비활성화*/}
  //   {/*응답을 받으면 navigateTo('/research-page-sub')*/}
  // };
  
  {/*임시코드*/}
  const handleButtonClick = () => {
    setIsLoading(true);
  
    setTimeout(() => {
      setIsLoading(false);
      navigateTo('/research-page-sub');
    }, 6500); // 6.5초 후에 실행됩니다.
  };


  return (
    <div>
      <AllGlobalStyle />
      <Header>
      <LeftContainer>
          <ClickableBoxLogo onClick={() => navigateTo('/')}>
            <HeaderLogoText>PAPA</HeaderLogoText>
          </ClickableBoxLogo>
          <HeaderText>All-in-one 특허 출원 보조 서비스</HeaderText>
        </LeftContainer>
        <RightContainer>
          <ClickableBoxNone onClick={() => navigateTo('/spec-page')}>
            <HeaderBoxTextNone>명세서 작성</HeaderBoxTextNone>
          </ClickableBoxNone>
          <ClickableBoxNone onClick={() => navigateTo('/sim-page')}>
            <HeaderBoxTextNone>유사도 분석</HeaderBoxTextNone>
          </ClickableBoxNone>
          <ClickableBox onClick={() => navigateTo('/research-page-main')}>
            <HeaderBoxText>연구동향</HeaderBoxText>
          </ClickableBox>
        </RightContainer>
      </Header>
      <Wrapper>
          <MainTitleText>🔍 <HighlightText>연구동향 리서치</HighlightText> 를 도와드릴게요</MainTitleText>
          <SecondWrapper>
            <WordCloud src={process.env.PUBLIC_URL + 'output.png'} />
            <GuideText>* 최근 1년 간 등록된 특허 기준 / Update: 2024.02.11 00:00</GuideText>
          </SecondWrapper>
          <ThirdWrapper>
            <SubText>아이디어를 입력해주시면, 관련 뉴스와 논문을 찾아드려요</SubText>
          </ThirdWrapper>
          <FourthWrapper>
            <CustomTextInput placeholder="아이디어를 입력해주세요" />
            <CustomButton title="👀" onClick={handleButtonClick} />
              {isLoading && <LoadingOverlay />}
          </FourthWrapper>
      </Wrapper>
    </div>
  );
};

export default ResearchPageMain;

