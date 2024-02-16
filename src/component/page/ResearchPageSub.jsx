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

const SecondWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  padding-top: 30px;
`;

const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-bottom: 30px;
  width: 100%;
  ${animationMixin};
`;

const PaperWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  width: 100%;
  ${animationMixin};
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



const ResearchPageSub = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { message } = location.state || {}; // Default to an empty object if state is undefined
  const [fetchedNews, setFetchedNews] = useState([]);
  const [papersData, setPapersData] = useState([]);



  useEffect(() => {
    // Send a request to the backend to fetch NEWS
    const fetchNewsData = async () => {
      try {
        const keywordsArray = JSON.parse(message);

        const response = await fetch('http://localhost:8000/research-page-sub-news', {
          method: 'POST', // or 'GET', depending on your backend setup
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ inputValue: keywordsArray }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const news = await response.json();

        setFetchedNews(news.message);
      } catch (error) {
        console.error('Error from news endpoint:', error);
      }
    };


    // Send a request to the backend to fetch PAPERS
    const fetchPapersData = async () => {
      try {
        const keywordsArray = JSON.parse(message);

        const response = await fetch('http://localhost:8000/research-page-sub-papers', {
          method: 'POST', // or 'GET', depending on your backend setup
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ inputValue: keywordsArray }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const papersResponse = await response.json();
        if (typeof papersResponse.message === 'string') {
          const parsedPapers = JSON.parse(papersResponse.message);
          setPapersData(parsedPapers);
        } else {
          setPapersData(papersResponse.message);
        }
      } catch (error) {
        console.error('Error from papers endpoint:', error);
      }
    };



    // Check if message is not empty
    if (message) {
      fetchNewsData();
      fetchPapersData();
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
        <MainTitleText>🔥 참고하면 좋을 <HighlightText> 국내 논문/뉴스</HighlightText> Top 5 에요</MainTitleText>
        <SecondWrapper>
          <NewsWrapper>
            <SubText style={{ textAlign: 'left' }}>📰 국내 뉴스</SubText>
            <CustomTable columns={columns_news} data={data_news.slice(0, 5)} />
          </NewsWrapper>
          <PaperWrapper>
            <SubText style={{ textAlign: 'right' }}>📄 국내 논문</SubText>
            <CustomTable columns={columns_paper} data={data_paper.slice(0, 5)} />
          </PaperWrapper>
        </SecondWrapper>
      </Wrapper>
    </div>
  );
};

export default ResearchPageSub;

