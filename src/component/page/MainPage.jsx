import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';


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
  align-items: left;
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
  font-size: 25px;
  text-align: center;
`;


const Box = styled.div`
    font-size: 30px;
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


const MainPage = () => {
  const navigate = useNavigate();

  const handleBoxClick1 = () => {
    console.log(`Specification Page clicked!`);
    navigate('/spec-page');
  };

  const handleBoxClick2 = () => {
    console.log(`Simularity Analysis Page clicked!`);
    navigate('/sim-page');
  };

  const handleBoxClick3 = () => {
    console.log(`Research Page clicked!`);
    navigate('/research-page');
  };

  return (
    <div>
      <AllGlobalStyle />
      <Header></Header>
      <Wrapper>
          <MainTitleText>안녕하세요, <HighlightText>PAPA</HighlightText> 입니다</MainTitleText>
          <SubTitleText>원하시는 서비스를 클릭해주세요</SubTitleText>

        <SecondWrapper>
          <ClickableBox onClick={handleBoxClick1}>
            <BoxText>✍🏻 명세서 작성 보조 서비스</BoxText>
          </ClickableBox>
          <ClickableBox onClick={handleBoxClick2}>
            <BoxText>🧐 국내/해외 특허 유사도 분석 서비스</BoxText>
          </ClickableBox>
          <ClickableBox onClick={handleBoxClick3}>
            <BoxText>🔬 연구 동향 자동 리서치 서비스</BoxText>
          </ClickableBox>
        </SecondWrapper>
      </Wrapper>
    </div>
  );
};

export default MainPage;

