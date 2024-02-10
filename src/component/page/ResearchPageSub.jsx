import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import '../../App.css';
import Table from '../ui/Table';
import HeaderComponent from '../ui/HeaderComponent';

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
  width: 1800px;
  padding-top: 30px;
  gap: 20px;
`;

const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  width: 85%;
`;

const PaperWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  width: 85%;
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



/* 본문 */
const SubText = styled.p`
  font-size: 20px;
  text-align: center;
  color: #252a2f;
  font-family: 'Pretendard-ExtraBold';
`;

const CustomTable = styled(Table)`
  width: 100%;
  height: 200px;
`;



const ResearchPageSub = () => {
  const navigate = useNavigate();
  
  // 페이지 이동 함수
  const navigateTo = (path) => {
    console.log(`${path} clicked!`);
    navigate(path);
  };


    {/* 뉴스 테이블 컴포넌트에 사용할 컬럼명 */}
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
  
    {/* 뉴스 임시 데이터 */}
    const data_news = React.useMemo(
      () => [
        { number: '1', title_news: "“세게 때려라” KIA 21세 특급 좌완불펜은 이미 150km 정복했는데…약속의 땅, 호주 기운 ‘팍팍’[MD캔버라]", url_news: 'https://www.naver.com' },
        { number: '2', title_news: "‘KIA 82승 1위’ 귀신처럼 맞아온 데이터, 토종 최강 전력을 말하다 [SS포커스]", url_news: 'https://www.naver.com' },
        { number: '3', title_news: "정상 등반 나선 KIA 타이거즈, 시즌 출발하기도 전에 '날벼락'", url_news: 'https://www.naver.com' },
        { number: '4', title_news: "'팀 코리아' 예비엔트리 승선…김도영의 각오 '몸 상태 회복하면 출전 원한다'", url_news: 'https://www.naver.com' },
        { number: '5', title_news: "KIA 타이거즈, 2024시즌 미리보기", url_news: 'https://www.naver.com'}
      ],[]);

    {/* 논문 테이블 컴포넌트에 사용할 컬럼명 */}
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
    
    {/* 논문 임시 데이터 */}
    const data_paper = React.useMemo(
      () => [
        { number: '1', title_paper: "“세게 때려라” KIA 21세 특급 좌완불펜은 이미 150km 정복했는데…약속의 땅, 호주 기운 ‘팍팍’[MD캔버라]", url_paper: 'https://www.naver.com' },
        { number: '2', title_paper: "‘KIA 82승 1위’ 귀신처럼 맞아온 데이터, 토종 최강 전력을 말하다 [SS포커스]", url_paper: 'https://www.naver.com' },
        { number: '3', title_paper: "정상 등반 나선 KIA 타이거즈, 시즌 출발하기도 전에 '날벼락'", url_paper: 'https://www.naver.com' },
        { number: '4', title_paper: "'팀 코리아' 예비엔트리 승선…김도영의 각오 '몸 상태 회복하면 출전 원한다'", url_paper: 'https://www.naver.com' },
        { number: '5', title_paper: "KIA 타이거즈, 2024시즌 미리보기", url_paper: 'https://www.naver.com'}
      ],[]);


  return (
    <div>
      <AllGlobalStyle />
      <HeaderComponent>
        {/* HeaderComponent의 RightContainer에 들어갈 내용을 children으로 전달 */}
        <ClickableBoxNone onClick={() => navigateTo('/spec-page')}>
          <HeaderBoxTextNone>명세서 작성</HeaderBoxTextNone>
        </ClickableBoxNone>
        <ClickableBoxNone onClick={() => navigateTo('/sim-page')}>
          <HeaderBoxTextNone>유사도 분석</HeaderBoxTextNone>
        </ClickableBoxNone>
        <ClickableBox onClick={() => navigateTo('/research-page-main')}>
          <HeaderBoxText>연구동향</HeaderBoxText>
        </ClickableBox>
      </HeaderComponent>
      <Wrapper>
          <MainTitleText>🔥 참고하면 좋을 <HighlightText> 국내 논문/뉴스</HighlightText> Top 5 에요</MainTitleText>
          <SecondWrapper>
            <NewsWrapper>
              <SubText>📰 국내 뉴스</SubText>
              <CustomTable columns={columns_news} data={data_news} />
            </NewsWrapper>
            <PaperWrapper>
              <SubText>📄 국내 논문</SubText>
              <CustomTable columns={columns_paper} data={data_paper} />
            </PaperWrapper>
          </SecondWrapper>
      </Wrapper>
    </div>
  );
};

export default ResearchPageSub;

