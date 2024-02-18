import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import '../../App.css';
import Table from '../ui/Table';
import HeaderComponent from '../ui/HeaderComponent';
import { animationMixin } from '../effect/Animation';
// ${animationMixin}; -> 애니메이션 효과를 위한 코드

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
  ${animationMixin};
`;

const FirstWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-bottom: 100px;
  `;

const SecondWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  margin-top: 0px;
  box-sizing: border-box;
  justify-content: center;
  gap: 20px;
`;

const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${animationMixin};
`;

const PaperWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${animationMixin};
`;

const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  gap: 20px;
  box-sizing: border-box;
  `;


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
`;

const HighlightText = styled.span`
    color: #252a2f;
    background: linear-gradient(to right, #d3e8f7, #e9dcf9);
    border-radius: 15px;
    padding-left: 10px;
    padding-right: 10px;
    font-family: 'Pretendard-ExtraBold';
`;



/* 본문 */
const SubText = styled.p`
  font-size: 20px;
  //text-align: center;
  color: #252a2f;
  font-family: 'Pretendard-ExtraBold';
`;

const CustomTable = styled(Table)`
  width: 100%;
  height: 200px;
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



const ResearchPageSub = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { message } = location.state || {}; // Default to an empty object if state is undefined
  const [fetchedNews, setFetchedNews] = useState([]);
  const [papersData, setPapersData] = useState([]);
  const [chartImage, setChartImage] = useState('');
  const [chartImage2, setChartImage2] = useState('');

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


  useEffect(() => {
    // 초기 로딩 상태를 true로 설정하여 로딩 시작
    setIsLoading(true);
  
    const fetchData = async () => {
      try {
        const keywordsArray = JSON.parse(message);
  
        // News 데이터 가져오기
        const fetchNewsData = fetch('http://localhost:8000/research-page-sub-news', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ inputValue: keywordsArray }),
        });
  
        // Papers 데이터 가져오기
        const fetchPapersData = fetch('http://localhost:8000/research-page-sub-papers', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ inputValue: keywordsArray }),
        });
  
        // Chart 데이터 가져오기
        const fetchChartData = fetch('http://localhost:8000/research-page-sub-dashboards', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ inputValue: keywordsArray }),
        });
  
        // 모든 프로미스가 완료될 때까지 기다림
        const [newsResponse, papersResponse, chartDataResponse] = await Promise.all([fetchNewsData, fetchPapersData, fetchChartData]);
  
        if (!newsResponse.ok || !papersResponse.ok || !chartDataResponse.ok) {
          throw new Error('One of the network responses was not ok');
        }
  
        // JSON으로 변환
        const news = await newsResponse.json();
        const papers = await papersResponse.json();
        const chartData = await chartDataResponse.json();
  
        // 상태 업데이트
        setFetchedNews(news.message);
        setPapersData(typeof papers.message === 'string' ? JSON.parse(papers.message) : papers.message);
        setChartImage(chartData.ipc_category_graph_image);
        setChartImage2(chartData.ipc_subcategory_graph_image);
  
        // 모든 데이터 가져오기가 완료되면 로딩 상태를 false로 설정
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false); // 에러 발생 시에도 로딩 상태를 false로 설정하여 사용자가 에러를 인지할 수 있도록 함
      }
    };
  
    // 메시지가 비어있지 않은 경우 데이터를 가져옴
    if (message) {
      fetchData();
    }
  }, [message]);
  

  // 페이지 이동 함수
  const navigateTo = (path) => {
    console.log(`${path} clicked!`);
    navigate(path);
  };


  /* 뉴스 테이블 컴포넌트에 사용할 컬럼명 */
  const columns_news = React.useMemo(
    () => [
      { Header: '번호', accessor: 'number' },
      {
        Header: '기사 제목',
        accessor: 'title_news',
        Cell: ({ row }) => (
          <a href={row.original.url_news} target="_blank" rel="noopener noreferrer" className="link-style">
            {row.values.title_news}
          </a>
        )
      }
    ],
    []
  );

  /* 뉴스 데이터 */
  const data_news = React.useMemo(() => {
    return fetchedNews.map((item, index) => ({
      number: (index + 1).toString(),
      title_news: item[0],
      url_news: item[1]
    }));
  }, [fetchedNews]);

  /* 논문 테이블 컴포넌트에 사용할 컬럼명 */
  const columns_paper = React.useMemo(
    () => [
      { Header: '번호', accessor: 'number' },
      {
        Header: '논문 제목',
        accessor: 'title_paper',
        Cell: ({ row }) => (
          <a href={row.original.url_paper} target="_blank" rel="noopener noreferrer" className="link-style">
            {row.values.title_paper}
          </a>
        )
      }
    ],
    []
  );

  /* 논문 임시 데이터 */
  const data_paper = React.useMemo(() => {
    return papersData.map((item, index) => ({
      number: (index + 1).toString(),
      title_paper: item[0], // Assuming this is the title
      url_paper: item[3] // Assuming this is the URL
    }));
  }, [papersData]);


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
        <MainTitleText>🕵🏻 작성해주신 아이디어의 <HighlightText> 리서치 대시보드</HighlightText> 에요</MainTitleText>
        <FirstWrapper>
          <ChartWrapper style={{ gap: '20px', padding: '10px', width: '500px', objectFit: 'contain', borderRadius: '15px', boxShadow: 'inset 0px 0px 3px rgba(0, 0, 0, 0.15)' }}>
          <SubText style={{ textAlign: 'center', marginBottom: '0px'}}>📊 특허 출원추이 차트</SubText>
              {chartImage && (
              <img style={{ width: '100%'}}
                src={`data:image/png;base64,${chartImage}`} // Base64 인코딩된 이미지 데이터를 src 속성에 설정
                alt="Chart"
              />
              )}
              {chartImage2 && (
                <img style={{ width: '100%'}}
                  src={`data:image/png;base64,${chartImage2}`} // Base64 인코딩된 이미지 데이터를 src 속성에 설정
                  alt="Chart"
                />
              )}
          </ChartWrapper>
          <SecondWrapper style={{ padding: '20px', width: '890px', objectFit: 'contain', borderRadius: '15px', boxShadow: 'inset 0px 0px 3px rgba(0, 0, 0, 0.15)' }}>
          <NewsWrapper>
            <SubText style={{ textAlign: 'center' }}>📰 국내 뉴스</SubText>
            <CustomTable columns={columns_news} data={data_news.slice(0, 5)} />
          </NewsWrapper>
          <PaperWrapper>
            <SubText style={{ textAlign: 'center' }}>📄 국내 논문</SubText>
            <CustomTable columns={columns_paper} data={data_paper.slice(0, 5)} />
          </PaperWrapper>
        </SecondWrapper>
        </FirstWrapper>
      </Wrapper>
      {isLoading && <LoadingOverlay />}
    </div>
  );
};

export default ResearchPageSub;
