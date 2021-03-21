import React, { ReactNode } from 'react';
import LayoutHeader from 'components/Layout/Header';
import Sidebar from 'components/Layout/Sidebar';
import { Card } from 'react-bootstrap';

interface Props {
  children: ReactNode;
  className?: string;
}

const LayoutContainer = ({ children, className = '' }: Props) => {
  return (
    <div className="d-flex flex-column h-100">
      <LayoutHeader />
      <div className="d-flex flex-row content w-100">
        <Sidebar />
        <div className="d-flex flex-column p-2 h-100 w-100 ">
          <Card className={`${className} d-flex rounded bg-light overflow-auto`}>{children}</Card>
        </div>
      </div>
    </div>
  );
};

export default LayoutContainer;
