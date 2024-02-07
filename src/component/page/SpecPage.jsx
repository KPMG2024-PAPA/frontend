import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import ImgUpload from '../ui/ImgUpload';
import TextInput from '../ui/TextInput';
import Button from '../ui/Button';

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
  padding-top: 20px;
`;

const SecondWrapper = styled.div`
  display: flex;
  flex-direction: row;
  //justify-content: space-around; /* Adjust horizontal alignment as needed */
  height: auto;
  padding-top: 60px;
  padding-left: 60px;
`;

const ThirdWrapper = styled.div`
  display: flex;
  width: 45%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const FourthWrapper = styled.div`
  display: flex;
  width: 45%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 30px;
`;


const Header = styled.div`
  display: flex;
  justify-content: space-between; /* 왼쪽과 오른쪽 컨테이너 사이의 공간을 최대로 확장 */
  align-items: center;
  height: 60px;
  background-color: #252a2f;
  color: white;
`;

const LeftContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 10px;
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;


const HeaderLogo = styled.div`
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 40px; /* 높이 조정 */
    width: 100px;
    background: linear-gradient(to right, #9dbdeb, #7f85d8);
    margin-left: 5px;
    margin-right: 5px;
`;

const HeaderLogoText = styled.p`
  font-size: 27px;
`;

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


const HeaderBoxText = styled.p`
  font-size: 16px;
  text-align: center;
  color: #252a2f;
  /* justify-content와 align-items 제거 */
`;

const HeaderBoxTextNone = styled.p`
  font-size: 16px;
  text-align: center;
  color: #8c8c8c;
  /* justify-content와 align-items 제거 */
`;


const ClickableBox = styled(HeaderBox)`
  cursor: pointer;
  transition: background-color 0.3s ease; // 배경 색상 변화에 애니메이션 효과를 추가합니다.
  &:hover {
    background-color: #9dbdeb; // 여기서 원하는 색상으로 바꿉니다.
  }
`;

const ClickableBoxNone = styled(HeaderBoxNone)`
  cursor: pointer;
  transition: background-color 0.3s ease; // 배경 색상 변화에 애니메이션 효과를 추가합니다.
  &:hover {
    background-color: #dcdcdc; // 여기서 원하는 색상으로 바꿉니다.
  }
`;

const ClickableBoxLogo = styled(HeaderLogo)`
  cursor: pointer;
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

const GuideText = styled.p`
  font-size: 20px;
  text-align: center;
  //background-color: #252a2f;
  color: #252a2f;
  //border-radius: 15px;
`;

const ButtonContainer = styled.p`
  padding-top: 5px;
  justify-content: right;
  align-items: right;
`;


const Box = styled.div`
    font-size: 30px;
    padding-left: 15px;
    background-color: white;
    border-radius: 15px;
    //display: flex;
    //flex-direction: column;
    //justify-content: center;
    align-items: left;
    min-height: 400px;
    width: 100%;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1); /* 그림자 효과 추가 */
`;

const BoxText = styled.p`
  font-size: 16px;
  text-align: left;
  font-family: 'Pretendard-Medium';
`;


const SpecPage = () => {
  const navigate = useNavigate();

  const handleBoxClick0 = () => {
    console.log(`MainPage clicked!`);
    navigate('/');
  };

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
      <Header>
        <LeftContainer>
          <ClickableBoxLogo onClick={handleBoxClick0}>
            <HeaderLogoText>PAPA</HeaderLogoText>
          </ClickableBoxLogo>
        </LeftContainer>
        <RightContainer>
          <ClickableBox onClick={handleBoxClick1}>
            <HeaderBoxText>명세서 작성</HeaderBoxText>
          </ClickableBox>
          <ClickableBoxNone onClick={handleBoxClick2}>
            <HeaderBoxTextNone>유사도 분석</HeaderBoxTextNone>
          </ClickableBoxNone>
          <ClickableBoxNone onClick={handleBoxClick3}>
            <HeaderBoxTextNone>연구동향</HeaderBoxTextNone>
          </ClickableBoxNone>
        </RightContainer>
      </Header>
      <Wrapper>
          <MainTitleText>✍🏻 <HighlightText>명세서 작성</HighlightText> 을 도와드릴게요</MainTitleText>
          <SecondWrapper>
            <ThirdWrapper>
              <GuideText> ☝🏻 이미지를 업로드해주세요 </GuideText>
                <ImgUpload onFileSelect={(file) => console.log(file)} />
              <GuideText> ✌🏻 발명품에 대한 설명을 해주세요 </GuideText>
                <TextInput></TextInput>
              <ButtonContainer>
                <Button title = '작성 요청하기'/> {/* 분석 버튼을 누를 경우 Imagefile과 TextInput 백에 전달 */}
              </ButtonContainer>
            </ThirdWrapper>
            <FourthWrapper>
              <GuideText>📝 PAPA가 작성한 초안이에요</GuideText>
              <Box>
                <BoxText>여기에 이제 반환받은명세서를 넣을거에요 미친것....</BoxText>
              </Box>
            </FourthWrapper>
          </SecondWrapper>
      </Wrapper>
    </div>
  );
};

export default SpecPage;

