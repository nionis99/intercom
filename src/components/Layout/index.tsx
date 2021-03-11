import React, { ReactNode } from 'react';
import LayoutHeader from 'components/Layout/Header';
import Sidebar from 'components/Layout/Sidebar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';

interface Props {
  children: ReactNode;
  className?: string;
}

const LayoutContainer = ({ children, className = '' }: Props) => {
  return (
    <div className="vh-100 w-100 content overflow-hidden">
      <LayoutHeader />
      <Row className="content d-flex m-0">
        <Col xs={3} className="p-0">
          <Sidebar />
        </Col>
        <Col xs={9} className="d-flex content m-0 overflow-auto p-2">
          <Card className={`${className} d-flex h-100 w-100 rounded  bg-light overflow-auto`}>{children}</Card>
        </Col>
      </Row>
    </div>
  );
};

export default LayoutContainer;
