import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="container my-5">
      <h2>Contact Me</h2>
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Your Message"
            required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
