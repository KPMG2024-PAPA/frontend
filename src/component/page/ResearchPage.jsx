import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

// componenet 임포트


const AllGlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard';
    src: url('/font/Pretendard-ExtraBold.ttf') format('truetype');
  }
    body {
    font-family: 'Pretendard', sans-serif;
    }
 `;

 
// 전체적인 레이아웃을 담당하는 코드
const Wrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  height: auto;
  padding-top: 50px;
`;

const SecondWrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: row; /* Change from 'column' to 'row' */
  justify-content: space-around; /* Adjust horizontal alignment as needed */
  height: auto;
  padding-top: 30px;
`;

const Header = styled.p`
  height: 60px;
  background-color: #252a2f;
  color: white;
  background-color: #252a2f;
  justify-content: center;
  //align-items: left;
  `;

const Icon = styled.img`
  margin-left: 0px;
  max-width: 100px;
`;

// 제목 담당
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

const SubTitleText = styled.p`
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    margin-bottom: -5px;
    padding-bottom: 60px;
`;

const BoxText = styled.p`
  font-size: 20px;
  text-align: center;
`;


const Box = styled.div`
    padding-bottom: 30px;
    background-color: white;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 400px;
    min-width: 420px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1); /* 그림자 효과 추가 */
`;

const ClickableBox = styled(Box)`
  cursor: pointer;
  transition: background-color 0.3s ease; // 배경 색상 변화에 애니메이션 효과를 추가합니다.
  &:hover {
    background-color: #dcdcdc; // 여기서 원하는 색상으로 바꿉니다.
  }
`;


const ResearchPage = () => {
  const navigate = useNavigate();

  const handleBoxClick = (boxNumber) => {
    console.log(`Box ${boxNumber} clicked!`);
    navigate('second-page'); // 페이지 이동시 사용
  };

  return (
    <div>
      <AllGlobalStyle />
      <Header></Header>
      <Wrapper>
          <MainTitleText>여기는 <HighlightText>유사도 분석</HighlightText> 페이지</MainTitleText>
      </Wrapper>
    </div>
  );
};

export default ResearchPage;

