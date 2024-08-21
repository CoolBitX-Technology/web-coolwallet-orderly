import React from 'react';
import styled from 'styled-components';

type NotificationProps = {
    message: string;
    startDate: Date;
    endDate: Date;
    onClose: () => void;
};

const NotificationView: React.FC<NotificationProps> = ({ message, startDate, endDate, onClose }) => {
    const currentDate = new Date()
    if (currentDate.getTime() >= startDate.getTime() && currentDate.getTime() <= endDate.getTime() && !!message) {
        return (
            <Container>
                <Message>{message}</Message>
                <CloseButton onClick={onClose}><img src="/closeBtn.svg" alt="" /></CloseButton>
            </Container>
        );
    } else {
        return null
    }
};

const Container = styled.div`
  background-color: #B43C3C;
  color: white;
  padding: 12px;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

const Message = styled.p`
font-size: 16px
 
`
const CloseButton = styled.button`
  cursor: pointer;
  width: 20px;
  height: 20px;
  align-items: center;
  margin-left: 16px;
`;

export default NotificationView;
