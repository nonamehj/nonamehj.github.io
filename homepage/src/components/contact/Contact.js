import "./ContactStyle.css";
const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.currentTarget.reset();
  };
  return (
    <section className="section contact-section">
      <div className="form-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="contact-row-wrapper">
            <div className="form-row">
              <label htmlFor="name">이름</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="form-row">
              <label htmlFor="email">이메일</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-row">
              <label htmlFor="subject">제목</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input"
              />
            </div>
            <div className="form-row">
              <label htmlFor="message">메시지</label>
              <textarea
                id="message"
                name="message"
                rows="10"
                placeholder="메시지를 입력하세요"
              />
            </div>
          </div>
          <button className="btn form-btn">제출</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
