import React from 'react';
import Container from 'react-bootstrap/Container';
import { QuestionCircleFill } from '@styled-icons/bootstrap';

interface Props {
  text: string;
  centered?: boolean;
}

const EmptyDataView = ({ text, centered = false }: Props) => (
  <Container className={`d-flex h-100 flex-column ${centered ? 'justify-content-center' : ''} align-items-center`}>
    <QuestionCircleFill size={40} className="mb-2" />
    <h5>{text}</h5>
  </Container>
);

export default EmptyDataView;
