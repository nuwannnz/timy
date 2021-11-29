import { Spin } from "antd";
import React from "react";
import "./loadingSpinner.css";

interface Props {
  tip: string;
}
const LoadingSpinner: React.FC<Props> = ({ tip }) => {
  return (
    <div className="loading-spinner">
      <Spin tip={tip} />
    </div>
  );
};

export default LoadingSpinner;
