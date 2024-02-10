import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { useState, useEffect } from 'react';

import TextInput from '../ui/TextInput';
import Button from '../ui/Button';
import Table from '../ui/Table';

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
  flex-direction: row;
  justify-content: center;
  width: 85%;
  height: 130px;
  padding-top: 60px;
  gap: 20px;
`;

const ThirdWrapper = styled.div`
  padding: 60px;
  display: flex;
  width: 100%; 
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
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

const CustomTextInput = styled(TextInput)`
    height: 100%;
    box-sizing: border-box; // padding을 포함한 높이로 설정
`;

/* 본문 하단 */
const SubText = styled.p`
  font-size: 20px;
  padding-bottom: 20px;
  text-align: center;
  color: #252a2f;
  font-family: 'Pretendard-ExtraBold';
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

  /* 국가명에 따른 이모티콘 반환 함수 */
  const countryToEmoji = (country) => {
    switch (country) {
      case '한국': return '🇰🇷';
      case '미국': return '🇺🇸';
      case '중국': return '🇨🇳';
      case '일본': return '🇯🇵';
      case '유럽': return '🇪🇺';
      default: return '-';
    }
  };



const SimPage = () => {
  const navigate = useNavigate();
  
  // 페이지 이동 함수
  const navigateTo = (path) => {
    console.log(`${path} clicked!`);
    navigate(path);
  };
  
  // 테이블 컴포넌트에 사용할 컬럼명
  const columns = React.useMemo(
    () => [
      { Header: '번호', accessor: 'number' },
      {
        Header: '국가',
        accessor: 'country',
        Cell: ({ value }) => <span style={{ fontSize: '27px' }}>{value}</span>,
      },
      { Header: '특허 이름', accessor: 'patentName' },
      { Header: '유사도', accessor: 'similarity' },
      { Header: '상세보기', accessor: 'detail'},
    ],
    []
  );

  // 임시 데이터
  const data = React.useMemo(
    () => [
      { number: '1', country: '한국', patentName: '개쩌는 선풍기', similarity: '98%', detail: '컬럼들' },
      { number: '2', country: '미국', patentName: '진짜 쩌는 선풍기', similarity: '75%', detail: '더 추가' },
      { number: '3', country: '??', patentName: '쩌는 선풍기', similarity: '60%', detail: '가능이염' },
      { number: '4', country: '일본', patentName: '굿이에요 선풍기', similarity: '40%', detail: '얏호!' },
      { number: '5', country: '유럽', patentName: '적당해요 선풍기', similarity: '20%', detail: '졸리당' }
    ].map(item => ({
      ...item,
      country: countryToEmoji(item.country), // 국가명에 따른 이모티콘으로 변환
    })),
    []
  );


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
          <HeaderText>All-in-one 특허 출원 보조 서비스</HeaderText>
        </LeftContainer>
        <RightContainer>
          <ClickableBoxNone onClick={() => navigateTo('/spec-page')}>
            <HeaderBoxTextNone>명세서 작성</HeaderBoxTextNone>
          </ClickableBoxNone>
          <ClickableBox onClick={() => navigateTo('/sim-page')}>
            <HeaderBoxText>유사도 분석</HeaderBoxText>
          </ClickableBox>
          <ClickableBoxNone onClick={() => navigateTo('/research-page-main')}>
            <HeaderBoxTextNone>연구동향</HeaderBoxTextNone>
          </ClickableBoxNone>
        </RightContainer>
      </Header>
      <Wrapper>
          <MainTitleText>🧐 <HighlightText>유사도 분석</HighlightText> 을 도와드릴게요</MainTitleText>
          <GuideText>* 현재 서비스는 한국/미국/중국/일본/유럽 다섯 국가의 특허 정보만 제공하고 있습니다</GuideText>
          <SecondWrapper>
            <CustomTextInput placeholder="텍스트를 입력해주세요"/>
            <CustomButton title='🔍' onClick={handleButtonClick} /> {/* 버튼 클릭 이벤트 핸들러 연결 */}
            {isLoading && <LoadingOverlay />}
          </SecondWrapper>
          <ThirdWrapper>
            <SubText>당신의 아이디어를 분석한 결과, 유사한 특허는 아래와 같아요</SubText>
            <Table columns={columns} data={data} />
          </ThirdWrapper>
      </Wrapper>
    </div>
  );
};

export default SimPage;

