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
  // const navigate = useNavigate();
  // const handleButtonClick = async () => {
  //   try {
  //     const response = await axios.post('서버 엔드포인트 지정', { user_input: textValue });
  //   } catch (error) {
  //     console.error('Error sending data to server:', error);
  //   }
  // };
  const CopyToClipboardButton = ({ text }) => {
    const copyTextToClipboard = async (text) => {
      if ('clipboard' in navigator) {
        try {
          await navigator.clipboard.writeText(text);
          alert('Text copied to clipboard');
        } catch (err) {
          console.error('Failed to copy: ', err);
        }
      } else {
        console.log('Clipboard API not available');
      }
    };
  
    return (
      <button onClick={() => copyTextToClipboard(text)}>Copy Text</button>
    );
  };



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
                <Button title = '작성 요청하기'/> 
              </ButtonContainer>
            </ThirdWrapper>
            <FourthWrapper>
              <GuideText>📝 PAPA가 작성한 초안이에요</GuideText>
              <Box>
                <BoxText>여기에 이제 반환받은명세서를 넣을거에요 미친것....</BoxText>
              </Box>
              <button onClick={() => copyTextToClipboard(text)}>Copy Text</button>
            </FourthWrapper>
          </SecondWrapper>
      </Wrapper>
    </div>
  );
};

// return (
//   <div>
//     <AllGlobalStyle />
//     <Header></Header>
//     <Wrapper>
//         <MainTitleText>✍🏻 <HighlightText>명세서 작성</HighlightText> 을 도와드릴게요</MainTitleText>
//         <SecondWrapper>
//           <ThirdWrapper>
//             <GuideText> ☝🏻 이미지를 업로드해주세요 </GuideText>
//               <ImgUpload onFileSelect={(file) => console.log(file)} />
//             <GuideText> ✌🏻 발명품에 대한 설명을 해주세요 </GuideText>
//               <TextInput></TextInput>
//             <ButtonContainer>
//               <Button title = '작성 요청하기' onClick = {handleButtonClick}/> 
//             </ButtonContainer>
//           </ThirdWrapper>
//           <ThirdWrapper>
//             <GuideText>📝 PAPA가 작성한 초안이에요</GuideText>
//           </ThirdWrapper>
//         </SecondWrapper>
//     </Wrapper>
//   </div>
// );

export default SpecPage;

