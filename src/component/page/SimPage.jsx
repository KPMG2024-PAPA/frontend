import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { useState, useEffect } from 'react';
import Dialog from '../ui/Dialog';

import TextInput from '../ui/TextInput';
import Button from '../ui/Button';
import Table from '../ui/Table';
import HeaderComponent from '../ui/HeaderComponent'
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
  height: 1000px;
`;

const SecondWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 130px;
  padding-top: 60px;
  gap: 20px;
  ${animationMixin};
`;

const ThirdWrapper = styled.div`
  padding: 60px;
  display: flex;
  width: 100%; 
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  ${({ isVisible }) => isVisible && animationMixin}; // isVisible이 true일 때만 애니메이션 적용
`;

const FourthWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
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
`;

const HeaderBoxTextNone = styled.p`
  font-size: 16px;
  text-align: center;
  color: #8c8c8c;
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
  ${animationMixin};
`;

const CustomTextInput = styled(TextInput)`
    height: 100%;
    box-sizing: border-box; // padding을 포함한 높이로 설정
    ${animationMixin}
`;

/* 본문 하단 */
const SubText = styled.p`
  font-size: 20px;
  padding-bottom: 20px;
  text-align: center;
  color: #252a2f;
  font-family: 'Pretendard-ExtraBold';
  ${animationMixin};
`;

const DefaultText = styled.div`
  font-size: 20px;
  padding-top: 10px;
  padding-bottom: 15px;
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
  box-shadow: inset 0px 0px 3px rgba(0, 0, 0, 0.1);

  @keyframes fadeInOut {
    0%, 100% { opacity: 0; }
    50% { opacity: 1; }
  }
`;

  /* 국가명에 따른 이모티콘 반환 함수 */
  const countryToEmoji = (country) => {
    switch (country) {
      case 'KR': return '🇰🇷';
      case 'US': return '🇺🇸';
      case 'CN': return '🇨🇳';
      case 'JP': return '🇯🇵';
      case 'EP': return '🇪🇺';
      case 'WO': return '🌐';
      default: return '-';
    }
  };



const SimPage = () => {
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false); // Dialog 표시 상태
  const [text, setText] = useState('');
  const [domesticData, setDomesticData] = useState([]); // 국내 특허 데이터 상태
  const [internationalData, setInternationalData] = useState([]); // 해외 특허 데이터 상태
  const [selectedItemDetails, setSelectedItemDetails] = useState('');
  const hasData = domesticData.length > 0 || internationalData.length > 0;
  
  
  // 페이지 이동 함수
  const navigateTo = (path) => {
    console.log(`${path} clicked!`);
    navigate(path);
  };

  // Dialog를 열기 위한 함수
  const openDialog = () => {
    setIsDialogOpen(true);
  };

  // Dialog를 닫기 위한 함수
  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const handleChange = (event) => {
    // 사용자 입력에 따라 텍스트를 업데이트합니다.
    setText(event.target.value);
  };

    // 테이블 컴포넌트에 사용할 임시
  const columns = React.useMemo(
    () => [
        // 컬럼 정의 업데이트
      { Header: '번호', accessor: 'number' },
      { Header: '국가', accessor: 'country', Cell: ({ value }) => (
        <span style={{ fontSize: '24px' }}>{countryToEmoji(value)}</span> // 폰트 크기를 24px로 조정
      )},
      { Header: '출원 번호', accessor: 'id' },
      { Header: '발명의 명칭', accessor: '발명의명칭'},
      { Header: '대표 분류 코드', accessor: 'IPC_code_only' },
      { Header: '유사도', accessor: 'distance' },
      {
        Header: '요약',
        accessor: 'details',
        // Use a custom cell renderer
        Cell: ({ row }) => (
          <button style={{ cursor: 'pointer', backgroundColor: 'transparent', border: 'none' }} onClick={() => openDetailsDialog(row.original)}>
            🔎
          </button>
        ),
      },
    ],
    []
  );

  const handleSubmit = async (e) => {
    e?.preventDefault(); // 폼 제출 방지

    setIsLoading(true);

    const requestBody = { query: text, n_results: 10 };

    try {
      const response = await fetch('http://localhost:8000/similarity-check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const responseData = await response.json(); // 서버 응답을 JSON 형태로 변환

      const transformedDomesticData = responseData.korean_results.results.map((item, index) => {
        return {
          number: index + 1,
          id: item.id,
          country: 'KR',
          발명의명칭: item.발명의명칭,
          distance: (1 - item.distance).toFixed(2),
          IPC_code_only: [...new Set(item.IPC_code_only.replace(/[\[\]']+/g, '').split(','))].join(', '), // 배열 표현을 문자열로 변환
          details: item.요약,
        };
      });
      setDomesticData(transformedDomesticData);
  
      const transformedInternationalData = responseData.foreign_results.results.map((item, index) => ({
        number: index + 1,
        id: item.id,
        country: item.국가,
        발명의명칭: item.발명의명칭,
        distance: (1 - item.distance).toFixed(2),
        IPC_code_only: item.ipc_category.replace(/[\[\]']+/g, ''), // 배열 표현을 문자열로 변환
        details: item.요약,
      }));
      setInternationalData(transformedInternationalData);

    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false); // 로딩 상태 종료
    }
  };

  const openDetailsDialog = (item) => {
    setSelectedItemDetails(item.details); // Assume 'details' contains the summary text
    setIsDialogOpen(true);
  };
  

  const handleButtonClick = async () => {
    await handleSubmit(); // Call handleSubmit directly or modify to not use the event parameter
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
      <div>최대 1분 정도 소요될 수 있어요</div>
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

  

  return (
    <div>
      <AllGlobalStyle />
      <HeaderComponent>
        {/* HeaderComponent의 RightContainer에 들어갈 내용을 children으로 전달 */}
        <ClickableBox onClick={() => navigateTo('/spec-page')}>
          <HeaderBoxTextNone>명세서 작성</HeaderBoxTextNone>
        </ClickableBox>
        <ClickableBox onClick={() => navigateTo('/sim-page')}>
          <HeaderBoxText>유사도 분석</HeaderBoxText>
        </ClickableBox>
        <ClickableBox onClick={() => navigateTo('/research-page-main')}>
          <HeaderBoxTextNone>연구동향</HeaderBoxTextNone>
        </ClickableBox>
      </HeaderComponent>
      <Wrapper>
          <MainTitleText>📈 <HighlightText>유사도 분석</HighlightText> 을 도와드릴게요</MainTitleText>
          <GuideText>* 현재 서비스는 한국/미국/중국/일본/유럽 다섯 국가의 특허 정보만 제공하고 있습니다</GuideText>
          <SubText style={{marginTop: '40px', marginBottom:'-50px'}}>아이디어를 입력해주시면, 한 번에 국내외 유사 특허를 보여드려요</SubText>
          <SecondWrapper>
            <CustomTextInput 
              placeholder={"분석할 아이디어를 입력해주세요"}
              value={text}
              onChange={handleChange}
            />
            <CustomButton title='🔍' onClick={handleButtonClick} /> {/* 버튼 클릭 이벤트 핸들러 연결 */}
          </SecondWrapper>
          {hasData && (
          <ThirdWrapper isVisible={hasData}>
            <SubText>당신의 아이디어를 분석한 결과, 유사한 특허는 아래와 같아요</SubText>
            <FourthWrapper>
              <DefaultText>🇰🇷 국내 특허</DefaultText>
              <Table columns={columns} data={domesticData} />
            </FourthWrapper>
            <FourthWrapper>
              <DefaultText>🌎 해외 특허</DefaultText>
              <Table columns={columns} data={internationalData} />
            </FourthWrapper>
          </ThirdWrapper>
          )}
      </Wrapper>
      {isLoading && <LoadingOverlay />}
      {isDialogOpen && (
        <Dialog
          title="발명 요약 정보"
          confirmText="확인"
          onCancel={() => setIsDialogOpen(false)}
          onConfirm={() => setIsDialogOpen(false)}
          visible={isDialogOpen}
        >
          {selectedItemDetails}
        </Dialog>
      )}
    </div>
  );
};

export default SimPage;