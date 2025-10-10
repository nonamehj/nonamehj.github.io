import "./LoadingStyle.css";
const Loading = () => {
  return (
    <section className="section loading-section">
      <div className="loading-wrapper">
        <div className="loading"></div>
        <h2>로딩중...</h2>
      </div>
    </section>
  );
};

export default Loading;
