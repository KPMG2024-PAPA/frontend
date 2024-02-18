import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { useEffect, useState } from 'react';


import HeaderComponent from '../ui/HeaderComponent';
import { animationMixin } from '../effect/Animation';


const AllGlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard-ExtraBold';
    src: url('/font/Pretendard-ExtraBold.ttf') format('truetype');
  }
    body {
    font-family: 'Pretendard-ExtraBold';
    }
  @font-face {
    font-family: 'Pretendard-SemiBold';
    src: url('/font/Pretendard-SemiBold.ttf') format('truetype');;
  }
 `;


// 전체적인 레이아웃을 담당하는 코드
const Wrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  ${animationMixin};
`;


const SecondWrapper = styled.div`
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: auto;
  padding-top: 50px;
  gap: 80px;
`;

// 제목 담당
const MainTitleText = styled.p`
    font-size: 46px;
    font-weight: bold;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 30px;
    font-family: 'Pretendard-ExtraBold';
    color: #252a2f;
`;

const HighlightText = styled.span`
    color: #252a2f;
    background: linear-gradient(to right, #d3e8f7, #e9dcf9);
    border-radius: 15px;
    padding-left: 10px;
    padding-right: 10px;
`;



const Box = styled.div`
    font-size: 30px; /* 초기 폰트 크기 설정, 필요에 따라 조정 */
    border-radius: 15px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    height: auto; /* 고정 대신 자동 높이로 변경 */
    width: 100%; /* 박스 너비를 부모에 맞게 조정 */
    max-width: 400px; /* 최대 너비 설정 */
    box-shadow: inset 0px 0px 3px rgba(0, 0, 0, 0.1);
    font-family: 'Pretendard-ExtraBold';
    box-sizing: border-box; /* 패딩과 테두리 포함 */
    ${animationMixin}
`;

const BoxText = styled.p`
  font-size: clamp(16px, 2vw, 20px); /* 최소 크기, 뷰포트 기반 크기, 최대 크기 */
  margin: 0;
  color: #252a2f;
  word-wrap: break-word; /* 필요시 단어 단위로 줄바꿈 */
  @media (max-width: 768px) {
  .BoxText {
    font-size: clamp(14px, 4vw, 18px); /* 화면이 작을 때 폰트 크기 조정 */
  }
}
`;


const ClickableBox = styled(Box)`
  ${animationMixin};
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #f8f8ef;
  }
`;



const MainPage = () => {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);

  //페이지 이동 함수
  const navigateTo = (path) => {
    console.log(`${path} clicked!`);
    navigate(path);
  };

  useEffect(() => {
    // 컴포넌트가 마운트된 후 애니메이션 상태를 true로 설정
    setAnimate(true);
  }, []);

  return (
    <div>
      <AllGlobalStyle />
      <HeaderComponent />
      <Wrapper>
          <MainTitleText>
            <>
            <div>안녕하세요,</div>
            <div style={{paddingTop: '15px'}}>All-In-One 특허 출원 보조 서비스 </div>
            <div style={{paddingTop: '15px'}}><HighlightText>PAPA</HighlightText> 입니다</div>
            </>
          </MainTitleText>
        <SecondWrapper>
          <ClickableBox style={{backgroundColor: '#fdf3f1'}} onClick={() => navigateTo('/spec-page')}>
            <BoxText>
              <>
                <div>명세서 작성 보조 서비스</div>
                <div style={{fontSize: '23px', textAlign: 'right', marginTop: '20px'}}> 복잡하고 어려운 명세서 작성,</div>
                <div style={{fontSize: '23px', textAlign: 'right'}}> AI가 전문성을 담아 작성해줘요</div>
                <div style={{fontSize: '18px', color: '#8f96a0', textAlign: 'right', marginTop: '20px'}}> 무려, 3분 안에 ✍🏻</div>
              </>
            </BoxText>
          </ClickableBox>
          <ClickableBox style={{backgroundColor: '#f8f8ef'}} onClick={() => navigateTo('/sim-page')}>
            <BoxText>
              <>
              <div>국내외 특허 유사도 분석 서비스</div>
                <div style={{fontSize: '23px', textAlign: 'right', marginTop: '20px'}}> 클릭 한-번에 해외 특허까지</div>
                <div style={{fontSize: '23px', textAlign: 'right'}}> 통합 검색할 수 있어요 </div>
                <div style={{fontSize: '18px', color: '#8f96a0', textAlign: 'right', marginTop: '20px'}}> 빠르게 분석해줘요 💬</div>
              </>
            </BoxText>
          </ClickableBox>
          <ClickableBox style={{backgroundColor: '#eff7fd'}} onClick={() => navigateTo('/research-page-main')}>
            <BoxText>
              <>
              <div>연구동향 리서치 서비스</div>
                <div style={{fontSize: '23px', textAlign: 'right', marginTop: '20px'}}> 어떤 단어로 검색할 지 고민되시죠?</div>
                <div style={{fontSize: '23px', textAlign: 'right'}}> 꼭 간결하지 않아도 돼요</div>
                <div style={{fontSize: '18px', color: '#8f96a0', textAlign: 'right', marginTop: '20px'}}> 긴 문장으로 검색하세요 🔍</div>
              </>
            </BoxText>
          </ClickableBox>
        </SecondWrapper>
      </Wrapper>
    </div>
  );
};

export default MainPage;

