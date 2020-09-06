import React from 'react';

import { Container } from './styles';

import { ToastMessage } from '../../hooks/toast';

import Toast from './Toast';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToasContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  return (
    <Container>
      {messages.map((message: ToastMessage) => (
        <Toast key={message.id} message={message} />
      ))}
    </Container>
  );
};

export default ToasContainer;
