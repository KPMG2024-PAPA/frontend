import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const UploadArea = styled.div`
  border: 2px dashed #e8e8e8;
  border-radius: 15px;
  padding: 50px;
  text-align: center;
  cursor: pointer;
  //background-color: white;
  transition: background-color 0.3s;
  min-width: 500px;
  height: 10px;

  &:hover {
    background-color: #e8e8e8;
  }
`;

const HiddenInput = styled.input`
  display: none;
`;

const ImgUpload = ({ onFileSelect }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState('');
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0] || event.dataTransfer.files[0];
    if (file) {
      setSelectedFile(file);
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
    <div>
      <UploadArea onClick={handleClick} onDrop={handleDrop} onDragOver={handleDragOver}>
        Click or Drag your Image File
      </UploadArea>
      <HiddenInput
        type="file"
        onChange={handleFileChange}
        ref={fileInputRef}
      />
    </div>
  );
};

export default ImgUpload;
