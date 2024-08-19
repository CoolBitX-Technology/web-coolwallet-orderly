import React from 'react';
import styled from 'styled-components';

type NotificationProps = {
    message: string;
    startTime: Date;
    endTime: Date;
    onClose: () => void;
};

const NotificationView: React.FC<NotificationProps> = ({ message, startTime, endTime, onClose }) => {
    const currentDate = new Date()
    if (currentDate >= startTime && currentDate <= endTime && message !== "") {
        return (
            <Container>
                <Message>{message}</Message>
                <CloseButton onClick={onClose}>X</CloseButton>
            </Container>
        );
    } else {
        return null
    }


};

const Container = styled.div`
  background-color: #B43C3C;
  color: white;
  padding: 10px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
`;

const Message = styled.span`
  flex: 1;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin-left: 16px;
`;

export default NotificationView;
