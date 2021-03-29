import React from 'react';
import Loading from './Spinner';

interface Props {
  className?: string;
  text?: boolean;
}

const LoadingView = ({ className, text }: Props) => (
  <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
    <Loading className={className} text={text} />
  </div>
);

export default LoadingView;
