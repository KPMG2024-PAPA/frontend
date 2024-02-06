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
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
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


const SpecPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <AllGlobalStyle />
      <Header></Header>
      <Wrapper>
          <MainTitleText>✍🏻 <HighlightText>명세서 작성</HighlightText> 을 도와드릴게요</MainTitleText>
          <SecondWrapper>
            <ThirdWrapper>
              <GuideText> ☝🏻 이미지를 업로드해주세요 </GuideText>
                <ImgUpload onFileSelect={(file) => console.log(file)} />
              <GuideText> ✌🏻 발명품에 대한 설명을 해주세요 </GuideText>
                <TextInput></TextInput>
              <ButtonContainer>
                <Button title = '작성하기'/> 
              </ButtonContainer>
            </ThirdWrapper>
            <ThirdWrapper>

            </ThirdWrapper>
          </SecondWrapper>
      </Wrapper>
    </div>
  );
};

export default SpecPage;

