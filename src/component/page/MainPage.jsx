import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard';
    src: url('/font/Pretendard-Bold.ttf') format('truetype');
  }
    body {
    font-family: 'Pretendard', sans-serif;
    }
 `

 
// 전체적인 레이아웃을 담당하는 코드
const Wrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  height: auto;
  padding-top: 90px;
`;

const SecondWrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: row; /* Change from 'column' to 'row' */
  justify-content: space-around; /* Adjust horizontal alignment as needed */
  height: auto;
  padding-top: 90px;
`;

const Header = styled.div`
  height: 50px;
  background-color: #333333;
  color: white;
  justify-content: center;
  align-items: left;
  `;

const Icon = styled.img`
  margin-left: 0px;
  max-width: 100px;
`;

// 제목 담당
const MainTitleText = styled.p`
    font-size: 25px;
    font-weight: bold;
    text-align: center;
    margin-bottom: -5px;
    padding-bottom: 40px;
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
    min-height: 270px;
    max-height: 270px;
    min-width: 420px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1); /* 그림자 효과 추가 */
`;

const ClickableBox = styled(Box)`
  cursor: pointer;
`;



const MainPage = () => {
  const navigate = useNavigate();

  const handleBoxClick = (boxNumber) => {
    console.log(`Box ${boxNumber} clicked!`);
    navigate('second-page'); // 페이지 이동시 사용
  };

  return (
    <div>
      <GlobalStyle />
      <Header><Icon src={process.env.PUBLIC_URL + 'logo.png'} /></Header>
      <Wrapper>
          <MainTitleText>원하시는 서비스를 클릭해주세요</MainTitleText>
        <SecondWrapper>
          <ClickableBox onClick={() => handleBoxClick(1)}>
            <BoxText>✍🏻 명세서 작성 보조 서비스</BoxText>
          </ClickableBox>
          <ClickableBox onClick={() => handleBoxClick(2)}>
            <BoxText>🧐 국내/해외 특허 유사도 분석 서비스</BoxText>
          </ClickableBox>
          <ClickableBox onClick={() => handleBoxClick(3)}>
            <BoxText>🔬 연구 동향 자동 리서치 서비스</BoxText>
          </ClickableBox>
        </SecondWrapper>
      </Wrapper>
    </div>
  );
};

export default MainPage;

