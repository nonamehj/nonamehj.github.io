import "./ContactFormStyle.css";
const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.currentTarget.reset();
  };
  return (
    <section className="section contact-section">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
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
            <input type="text" id="subject" name="subject" />
          </div>

          <div className="form-row">
            <label htmlFor="message">메시지</label>
            <textarea
              id="message"
              rows="6"
              name="message"
              placeholder="메시지를 입력하세요"
            />
          </div>
          <button className="btn form-btn">제출</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
