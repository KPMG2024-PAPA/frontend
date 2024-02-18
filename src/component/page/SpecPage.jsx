import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { createGlobalStyle, keyframes } from 'styled-components';
import { useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import ImgUpload from '../ui/ImgUpload';
import TextInput from '../ui/TextInput';
import Button from '../ui/Button';
import HeaderComponent from '../ui/HeaderComponent';
import { animationMixin } from '../effect/Animation';
import Dialog from '../ui/Dialog';

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

const Wrapper = styled.div`
  padding-left: 180px;
  padding-right: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
`;

const ThirdWrapper = styled.div`
  display: flex;
  width: 50%; 
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
  ${animationMixin};
`;

const FourthWrapper = styled.div`
  display: flex;
  width: 50%;
  height: auto;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
  ${animationMixin};
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
    ${animationMixin};
`;

const HighlightText = styled.span`
    color: #252a2f;
    background: linear-gradient(to right, #d3e8f7, #e9dcf9);
    border-radius: 15px;
    padding-left: 10px;
    padding-right: 10px;
`;

const SecondWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 95%;
  padding-top: 60px;
  gap: 50px;
  ${animationMixin};
  padding-bottom: 200px;
`;

/* 본문 좌측 */
const GuideText = styled.p`
  font-size: 20px;
  text-align: center;
  //background-color: #252a2f;
  color: #252a2f;
  //border-radius: 15px;
  font-family: 'Pretendard-ExtraBold';
`;

const CustomTextInput = styled(TextInput)`
    white-space: pre-line; /* 이 속성을 추가 */
    white-space: pre-wrap;
    font-size: 18px;
    line-height: 1.5;
    height: 300px;
    box-sizing: border-box; // padding을 포함한 높이로 설정
`;

const ButtonContainer1 = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const CustomButton1 = styled(Button)`
  padding: 8px;
  color: #252a2f;
  height: auto;
  background: linear-gradient(to right, #d3e8f7, #e9dcf9);
  box-shadow: inset 0px 0px 3px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const GuideButton = styled(Button)`
  background-color: #252a2f;
  //height: auto;
  box-shadow: none;
  width: fit-content;
  //margin-top: 20px;
  font-size: 16px;
  box-shadow: inset 0px 0px 3px rgba(0, 0, 0, 0.1);
  padding:none;
  font-family: 'Pretendard-ExtraBold';
`;

const GuideContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;


const ButtonContainer2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  &:hover > .tooltip,
  &:active > .tooltip {
    display: block;
  }
`;

const tooltip = keyframes`
  0% { opacity: 0; }
  40% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 1;}
`;

const Content = styled.div`
  display: none;
  margin-top: 80px;
  font-size: 12px;
  position: absolute;
  color: #252a2f;
  background-color: #dbdbdb5e;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 5px;
  box-shadow: inset 0px 0px 3px rgba(0, 0, 0, 0.1);
  z-index: 200;
`;

const CustomButton2 = styled(Button)`
  //padding: 11px;
  color: #252a2f;
  height: auto;
  background: white;
  box-shadow: none;
  width: 25px;
  height: fit-content;
  margin-top: 20px;
  font-size: 23px;
`;


/* 본문 우측 */
const Box = styled.div`
    padding: 30px;
    background-color: white;
    border-radius: 15px;
    align-items: left;
    height: auto;
    width: 100%;
    box-shadow: inset 0px 0px 3px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
`;

 

const BoxText = styled.p`
  font-size: 18px;
  font-family: 'Pretendard-Medium';
  margin: 0;
  color: #252a2f;
  white-space: pre-line; /* 이 속성을 추가 */
  white-space: pre-wrap;
  line-height: 1.5;
`;

// 로딩화면 컴포넌트
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
  box-shadow: inset 0px 0px 3px rgba(0, 0, 0, 0.1);

  @keyframes fadeInOut {
    0%, 100% { opacity: 0; }
    50% { opacity: 1; }
  }
`;


const SpecPage = () => {
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [responseData, setResponseData] = useState('');
  const [modalVisible, setModalVisible] = useState(false);


  const Tooltip = ({children, message})=> {
    return (
      <ButtonContainer2>
        {children}
        <Content className="tooltip">{message}</Content>
      </ButtonContainer2>
    );
  }

  const handleGuideButtonClick = () => {
    setModalVisible(true);
  };
  

  const handleChange = (event) => {
    // 사용자 입력에 따라 텍스트를 업데이트합니다.
    setText(event.target.value);
  };

  const handleFileSelect = (file) => {
    console.log(file);
    setSelectedFile(file);
  };

  // 페이지 이동 함수
  const navigateTo = (path) => {
    console.log(`${path} clicked!`);
    navigate(path);
  };


  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 관리

  const handleSubmit = async (e) => {
    e?.preventDefault(); // Safely attempt to call preventDefault if e exists

    setIsLoading(true);

    // FormData can handle both files and text
    const formData = new FormData();
    if (selectedFile) {
      formData.append('file', selectedFile);
    }
    console.log();
    formData.append('text', text);

    try {
      const response = await fetch('http://localhost:8000/submit-spec', {
        method: 'POST',
        body: formData, // Send as multipart/form-data
        // 'Content-Type': 'multipart/form-data' is automatically set by the browser
      });

      const data = await response.json();
      console.log(data); // Process or navigate based on the response
      setIsLoading(false); // Ensure loading is stopped on success
      setResponseData(data.gpt_response);
    } catch (error) {
      console.error('Error:', error);
      setIsLoading(false); // Ensure loading is stopped on success
    }
  };

  const handleButtonClick = async () => {
    await handleSubmit(); // Call handleSubmit directly or modify to not use the event parameter
  };

  // 로딩 화면 컴포넌트
  const LoadingOverlay = () => {
    const messages = [
      <>
        <div style={{ fontSize: '50px', marginBottom: '5px', color: '#252a2f' }}>🤔</div>
        <div>작성해주신 내용을 이해하고 있어요</div>
      </>,
      <>
        <div style={{ fontSize: '50px', marginBottom: '5px', color: '#252a2f' }}>💡</div>
        <div>곧 명세서를 작성해드릴게요</div>
      </>,
      <>
        <div style={{ fontSize: '50px', marginBottom: '5px', color: '#252a2f' }}>⌛️</div>
        <div>최대 3분 정도 소요될 수 있어요</div>
      </>
    ];

    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
      }, 4000); // 메시지 변경 주기를 4초로 설정 (애니메이션 주기에 맞춤)

      return () => clearInterval(intervalId);
    }, []);

    return (
      <Overlay>
        <Message>{messages[currentMessageIndex]}</Message>
      </Overlay>
    );
  };


  return (
    <div>
      <AllGlobalStyle />
      <HeaderComponent>
        <ClickableBox onClick={() => navigateTo('/spec-page')}>
          <HeaderBoxText>명세서 작성</HeaderBoxText>
        </ClickableBox>
        <ClickableBox onClick={() => navigateTo('/sim-page')}>
          <HeaderBoxTextNone>유사도 분석</HeaderBoxTextNone>
        </ClickableBox>
        <ClickableBox onClick={() => navigateTo('/research-page-main')}>
          <HeaderBoxTextNone>연구동향</HeaderBoxTextNone>
        </ClickableBox>
      </HeaderComponent>
      <Wrapper>
        <MainTitleText>✍🏻 <HighlightText>명세서 작성</HighlightText> 을 도와드릴게요</MainTitleText>
        <SecondWrapper>
          <ThirdWrapper>
            <GuideText> ☝🏻 도면을 업로드해주세요 </GuideText>
            <ImgUpload onFileSelect={handleFileSelect} />
            <GuideText> ✌🏻 발명에 대한 설명을 해주세요 </GuideText>
            <CustomTextInput
              placeholder="특허 출원을 위한 당신의 '발명'에 대한 요약 설명을 작성해주세요! 발명의 요약에는 발명의 기술 분야와 구성을 간략하게 포함하고, 당신의 발명만의 특이한 효과도 기재해주시면 더 자세하고 정확한 명세서를 작성해드릴게요."
              value={text}
              onChange={handleChange}
            />
            <ButtonContainer1>
              <CustomButton1 title='작성 요청하기' onClick={handleButtonClick} /> {/* 버튼 클릭 이벤트 핸들러 연결 */}
              {/* 로딩 상태가 true일 때만 LoadingOverlay 컴포넌트를 렌더링 */}
            </ButtonContainer1>
          </ThirdWrapper>
          <FourthWrapper>
            <GuideContainer>
              <GuideText>📜 PAPA가 작성한 명세서 초안이에요</GuideText>
              <GuideButton title='💡 Guideline' onClick={handleGuideButtonClick} />
            </GuideContainer>
            <Box>
              <BoxText>{responseData || "명세서 초안이 여기에 작성됩니다"}</BoxText>
            </Box>
            <ButtonContainer2>
              <Tooltip message="Copy">
                <CopyToClipboard text={Object.values(responseData).join('')} onCopy={() => alert('클립보드에 복사되었습니다.')}>
                <CustomButton2 title='📋' /></CopyToClipboard> </Tooltip>
              <Tooltip message="Rewrite"> 
                <CustomButton2 title='🔃' onClick={handleButtonClick}/> </Tooltip>
            </ButtonContainer2>
          </FourthWrapper>
        </SecondWrapper>
      </Wrapper>
      {isLoading && <LoadingOverlay />}
      {modalVisible && (
        <Dialog
          title="모범 명세서 작성 가이드라인"
          onConfirm={() => setModalVisible(false)}
          visible={modalVisible}
          confirmText="닫기"
        >
          <p style={{ fontSize: '20px', fontFamily: 'Pretendard-ExtraBold' }}>발명의 명칭</p>
          <p>[발명의 명칭] 란에는 그 발명의 내용을 간명하게 표시할 수 있는 발명의 명칭을 기재하여야 하며, 영문 명칭을 &#123;&#125;안에 다음 예와 같이 입력하여야 합니다.</p>
          <p>[예] [발명의 명칭] 자동차용 범퍼&#123;AUTOMOBILE BUMPER&#125;</p>
          <p style={{ fontSize: '20px', fontFamily: 'Pretendard-ExtraBold' }}>발명의 상세한 설명</p>
          <p>[발명의 상세한 설명] 란은 원칙적으로[기술분야], [배경기술], [발명(고안)의 내용], [발명(고안)의 실시를 위한 구체적인 내용] 및 ([산업상 이용가능성])란으로 구분하여 기재하며, 그 내용은 그 발명이 속하는 기술분야에서 통상의 지식을 가진 자가 그 발명을 쉽게 이해하고 또한 쉽게 실시할 수 있도록 「특허법」제42조제3항 및 「특허법 시행규칙」 제21조제3항에 따라 명확하고 상세하게 기재합니다.</p>
          <p style={{ marginLeft: '15px' }}>﹒[기술분야] 란에는 특허(실용신안등록)를 받고자 하는 발명(고안)의 기술분야를 명확하고 간결하게 기재합니다.</p>
          <p style={{ marginLeft: '30px' }}>﹒[예] 본 발명은 ㆍㆍㆍ하기 위한 ㆍㆍㆍ에 관한 ㆍㆍㆍㆍㆍㆍ.</p>
          <p style={{ marginLeft: '15px' }}>﹒[배경기술] 란에는 발명(고안)의 이해, 조사 및 심사에 유용하다고 생각되는 종래의 기술을 명시하고, 특허(실용신안등록)를 받고자 하는 자가 종래기술의 문헌 정보를 알고 있는 때에는 그 문헌의 명칭, 발간일, 종래기술이 기재된 페이지 등의 정보를 기재합니다.</p>
          <p style={{ marginLeft: '15px' }}>﹒[발명(고안)의 내용] 란은 원칙적으로 [해결하고자 하는 과제], [과제의 해결 수단] 및 [효과] 란으로 구분하여 다음과 같이 기재합니다. 다만, 구분하여 기재하기 어려운 경우에는 별도로 나누어 기재하지 않아도 됩니다.</p>
          <p style={{ marginLeft: '30px' }}>(1) [해결하고자 하는 과제] 란에는 특허(실용신안등록)를 받고자 하는 발명(고안)이 과제로 하고 있는 종래 기술의 문제점 등을 기재합니다.</p>
          <p style={{ marginLeft: '30px' }}>(2) [과제의 해결 수단] 란에는 특허(실용신안등록)를 받고자 하는 발명(고안)에 의하여 어떻게 해당 과제가 해결되었는지를 기재합니다. 일반적으로는 청구항에 기재된 발명(고안) 그 자체가 해결수단이 되므로 청구항에 기재된 발명(고안)을 기재하면 됩니다.</p>
          <p style={{ marginLeft: '30px' }}>(3) [효과] 란에는 특허(실용신안등록)를 받고자 하는 발명(고안)이 종래의 기술과 비교하여 우수하다고 인정되는 사항을 기재합니다.</p>
          <p style={{ marginLeft: '15px'}}>﹒[발명(고안)을 실시하기 위한 구체적인 내용] 란에는 그 발명(고안)이 속하는 기술분야에서 통상의 지식을 가진 자가 그 발명(고안)이 어떻게 실시되는지를 쉽게 알 수 있도록 그 발명(고안)의 실시를 위한 구체적인 내용을 적어도 하나 이상, 가급적 여러 형태로 기재합니다. 필요한 경우에는[실시예] 란을 만들어 기재하고, 도면이 있으면 그 도면을 인용하여 기재합니다.</p>
          <p style={{ marginLeft: '15px'}}>﹒[산업상 이용가능성] 란은 특허(실용신안등록)를 받고자 하는 발명(고안)이 산업상 이용가능한 것인지 여부가 불분명할 때 그 발명(고안)의 산업상 이용방법, 생산방법 또는 사용방법 등을 기재합니다. 대부분의 경우 산업상 이용가능성은 명세서의 다른 기재 사항으로부터 충분히 유추가 가능하므로 별도의 기재는 필요하지 않습니다.</p>
          <p style={{ fontSize: '20px', fontFamily: 'Pretendard-ExtraBold' }}>특허청구범위</p>
          <p>[특허청구범위] 란은 다음과 같이 기재합니다.</p>
          <p style={{ marginLeft: '15px'}}>﹒[특허(실용신안등록)청구범위] 란의 [청구항] 란은 독립청구항(이하 “독립항”이라 함)을 기재하며, 그 독립항을 한정하거나 부가하여 구체화하는 종속청구항(이하 “종속항”이라 함)을 기재할 수 있습니다. 이 경우 필요한 때에는 그 종속항을 한정하거나 부가하여 구체화하는 다른 종속항을 기재할 수 있습니다.</p>
          <p style={{ marginLeft: '15px'}}>﹒청구항은 발명(고안)의 성질에 따라 적정한 수로 기재하여야 합니다.</p>
          <p style={{ marginLeft: '15px'}}>﹒종속항을 기재할 때에는 독립항 또는 다른 종속항 중에서 1 또는 2 이상의 항을 인용하여야 하며, 인용되는 항의 번호를 기재하여야 합니다.</p>
          <p style={{ marginLeft: '15px'}}>﹒2 이상의 항을 인용하는 청구항은 인용되는 항의 번호를 택일적으로 기재하여야 합니다.</p>
          <p style={{ marginLeft: '15px'}}>﹒2 이상의 항을 인용한 청구항에서 그 청구항의 인용된 항은 다시 2 이상의 항을 인용하는 방식을 사용하여서는 아니됩니다. 2 이상의 항을 인용한 청구항에서 그 청구항의 인용된 항이 다시 하나의 항을 인용한 후에 그 하나의 항이 결과적으로 2 이상의 항을 인용하는 방식에 대하여도 또한 같습니다.</p>
          <p style={{ marginLeft: '15px'}}>﹒인용되는 청구항은 인용하는 청구항보다 먼저 기재하여야 합니다.</p>
          <p style={{ marginLeft: '15px'}}>﹒각 청구항은 항마다 행을 바꾸어 기재하고, 그 기재하는 순서에 따라 아라비아숫자로 일련번호를 붙여야 합니다.</p>
          <p style={{ marginLeft: '15px'}}>﹒발명(고안)의 기술적 특징을 이해하기 위하여 필요한 경우에는 도면의 인용부호를 특허(실용신안등록)청구범위에 기재할 수 있습니다.</p>
          <p style={{ marginLeft: '15px'}}>﹒「특허법」제42조제5항 본문(「실용신안법」제8조제5항 본문)에 따라 특허(실용신안등록)청구범위를 기재하지 않는 경우에는 [특허(실용신안등록)청구범위] 및 [청구항] 식별항목을 삭제합니다.</p>
          <p style={{ fontSize: '20px', fontFamily: 'Pretendard-ExtraBold' }}>도면의 간단한 설명</p>
          <p>[도면의 간단한 설명] 란에는 첨부한 ‘도면’ 각각에 대하여 각 ‘도면’이 무엇을 표시한 것인가를 간단히 기재합니다. 다만, 발명의 설명에 ‘도면’이 필요하지 아니한 경우에는 [도면의 간단한 설명] 식별항목을 삭제하여야 합니다.</p>
          <p>[예] 제1도는 전체를 조립한 평명도, 제2도는 어느 부분을 보인 정면도, 제3도는 어느 부분의 종단면도 등</p>
        </Dialog>
      )}

    </div>
  );
};

export default SpecPage;