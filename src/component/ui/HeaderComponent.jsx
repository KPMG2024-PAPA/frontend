// HeaderComponent.js
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  color: white;
`;

const LeftContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 180px;
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 180px;
`;

const HeaderLogo = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 100px;
  cursor: pointer;
`;

const ClickableBoxLogo = styled(HeaderLogo)`
  cursor: pointer;
`;

const HeaderLogoImage = styled.img`
  height: 40px;
  width: auto;
  object-fit: contain;
`;

const HeaderText = styled.p`
  font-size: 12px;
  color: #252a2f;
  margin-left: 5px;
  font-family: 'Pretendard-ExtraBold';
`;

const HeaderComponent = ({ children }) => {
  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <Header>
      <LeftContainer>
        <ClickableBoxLogo onClick={() => navigateTo('/')}>
          <HeaderLogoImage src={process.env.PUBLIC_URL + '/logo/logoimg.png'}/>
        </ClickableBoxLogo>
        <HeaderText>Patent Assistant Productivity Accelerator</HeaderText>
      </LeftContainer>
      <RightContainer>
        {children} {/* RightContainer의 내용을 동적으로 받아서 렌더링 */}
      </RightContainer>
    </Header>
  );
};

export default HeaderComponent;
