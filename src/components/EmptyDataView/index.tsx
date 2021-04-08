import React from 'react';
import Container from 'react-bootstrap/Container';
import { Search } from 'styled-icons/material-rounded';

interface Props {
  text: string;
  centered?: boolean;
}

const EmptyDataView = ({ text, centered = false }: Props) => (
  <Container className={`d-flex h-100 flex-column ${centered ? 'justify-content-center' : ''} align-items-center`}>
    <Search size={50} className="my-2" />
    <h5>{text}</h5>
  </Container>
);

export default EmptyDataView;
