import React from "react";
import { Link } from "react-router-dom";
import "./ErrorStyle.css";
const Error = () => {
  return (
    <section className="section error-section">
      <div className="error-wrapper">
        <h2>
          찾을 수 없는 페이지입니다. 입력하신 주소를 확인하거나, 아래 버튼으로
          홈으로 돌아가세요.
        </h2>
        <Link to="/">홈으로 돌아가기</Link>
      </div>
    </section>
  );
};

export default Error;
