import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { createGlobalStyle} from 'styled-components';
import HeaderComponent from '../ui/HeaderComponent';

const AllGlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard-ExtraBold';
    src: url('/font/Pretendard-ExtraBold.ttf') format('truetype');
    font-family: 'Pretendard-SemiBold';
    src: url('/font/Pretendard-SemiBold.ttf') format('truetype');
  }
    body {
    font-family: 'Pretendard-ExtraBold', sans-serif;
    }
 `;
 
// 전체적인 레이아웃을 담당하는 코드
const Wrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
`;

const SecondWrapper = styled.div`
  padding-left: 18px;
  padding-right: 18px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: auto;
  padding-top: 30px;
  gap: 80px;
`;

// 제목 담당
const MainTitleText = styled.p`
    font-size: 46px;
    font-weight: bold;
    text-align: center;
    padding-top: 30px;
    font-family: 'Pretendard-ExtraBold';
`;

const HighlightText = styled.span`
    color: #FFFFFF;
    background: linear-gradient(to right, #9dbdeb, #7f85d8);
    border-radius: 15px;
    padding-left: 10px;
    padding-right: 10px;
    font-family: 'Pretendard-ExtraBold';
`;

const SubTitleText = styled.p`
    color: #252a2f;
    font-size: 23px;
    font-weight: bold;
    text-align: center;
    padding-top: 30px;
`;


const BoxText = styled.p`
  font-size: 23px;
  text-align: center;
`;


const Box = styled.div`
    font-size: 30px;
    background-color: white;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1); /* 그림자 효과 추가 */
    font-family: 'Pretendard-ExtraBold';
`;

const ClickableBox = styled(Box)`
  cursor: pointer;
  transition: background-color 0.3s ease; // 배경 색상 변화에 애니메이션 효과를 추가합니다.
  &:hover {
    background-color: #f8f8ef; // 여기서 원하는 색상으로 바꿉니다.
  }
`;


const MainPage = () => {
  const navigate = useNavigate();

  //페이지 이동 함수
  const navigateTo = (path) => {
    console.log(`${path} clicked!`);
    navigate(path);
  };

  return (
    <div>
      <AllGlobalStyle />
      <HeaderComponent />
      <Wrapper>
          <MainTitleText>
            <>
            <div>안녕하세요,</div>
            <div style={{paddingTop: '15px'}}>All-in-one 특허 출원 보조 서비스 </div>
            <div style={{paddingTop: '15px'}}><HighlightText>PAPA</HighlightText> 입니다</div>
            </>
          </MainTitleText>
          <SubTitleText>원하시는 서비스를 클릭해주세요</SubTitleText>
        <SecondWrapper>
          <ClickableBox onClick={() => navigateTo('/spec-page')}>
            <BoxText>✍🏻 명세서 작성 보조 서비스</BoxText>
          </ClickableBox>
          <ClickableBox onClick={() => navigateTo('/sim-page')}>
            <BoxText>🧐 국내/해외 특허 유사도 분석 서비스</BoxText>
          </ClickableBox>
          <ClickableBox onClick={() => navigateTo('/research-page-main')}>
            <BoxText>🔬 연구 동향 자동 리서치 서비스</BoxText>
          </ClickableBox>
        </SecondWrapper>
      </Wrapper>
    </div>
  );
};

export default MainPage;

