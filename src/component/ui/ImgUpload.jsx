import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex; // Flex 컨테이너로 설정
  width: 85%;
  align-items: flex-start; // 아이템들을 상단 정렬
  gap: 20px; // 아이템 간 간격 설정
`;

const UploadArea = styled.div`
  border: 2px dashed #e8e8e8;
  border-radius: 15px;
  display: flex;
  cursor: pointer;
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #dcdcdc;
  }
  min-width: 50%;
  height: 100px;
  box-sizing: border-box;
`;

const HiddenInput = styled.input`
  display: none;
`;

const PreviewContainer = styled.div`
  display: flex; // Flex 컨테이너로 설정
  flex-direction: column; // 아이템들을 세로로 배치
  align-items: center; // 가운데 정렬
  //gap: 10px; // 아이템 간 간격 설정
  width: 50%;
`;

const PreviewImage = styled.img`
  max-width: 300px; // 이미지 최대 너비 조정
  max-height: 200px; // 이미지 최대 높이 조정
  border-radius: 10px; // 이미지 둥근 모서리 추가
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3); /* 그림자 효과 추가 */
`;

const FileName = styled.p`
  font-size: 10px;
  color: #333;
`;

const ImgUpload = ({ onFileSelect }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState('');
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0] || event.dataTransfer.files[0];
    if (file) {
      setSelectedFile(file);
      setFileName(file.name);
      onFileSelect(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewURL(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    handleFileChange(event);
  };

  return (
    <Container>
      <UploadArea onClick={handleClick} onDrop={handleDrop} onDragOver={handleDragOver}>
        {selectedFile ? '✅ 이미지가 업로드 되었습니다' : '클릭 또는 드래그하여 업로드'}
      </UploadArea>
      <HiddenInput
        type="file"
        onChange={handleFileChange}
        ref={fileInputRef}
      />
      {previewURL && (
        <PreviewContainer>
          <PreviewImage src={previewURL} alt="Preview" />
          <FileName>{fileName}</FileName>
        </PreviewContainer>
      )}
    </Container>
  );
};

export default ImgUpload;
