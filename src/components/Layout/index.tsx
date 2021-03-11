import React, { ReactNode } from 'react';
import LayoutHeader from 'components/Layout/Header';
import Sidebar from 'components/Layout/Sidebar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

interface Props {
  children: ReactNode;
}

const LayoutContainer = ({ children }: Props) => {
  return (
    <div className="full-height w-100">
      <LayoutHeader />
      <Row className="d-flex content m-0">
        <Col xs={3} className="p-0">
          <Sidebar />
        </Col>
        <Col xs={9} className="h-100">
          <Container className="d-flex justify-content-center my-4">{children}</Container>
        </Col>
      </Row>
    </div>
  );
};

export default LayoutContainer;
