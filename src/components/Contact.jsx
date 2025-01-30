import React, { useState } from "react";
import emailjs from "emailjs-com";
import axios from "axios";
import.meta.env;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateEmailWithZeroBounce = async (email) => {
    try {
      const response = await axios.get(
        `https://api.zerobounce.net/v2/validate?api_key=${
          import.meta.env.VITE_ZEROBOUNCE_API_KEY
        }&email=${email}`
      );
      return response.data.status === "valid"; // Only proceed if email is valid
    } catch (error) {
      console.error("ZeroBounce Validation Error:", error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatusMessage("Validating email...");
    const isValidEmail = await validateEmailWithZeroBounce(formData.email);

    if (!isValidEmail) {
      setStatusMessage("Invalid or undeliverable email address.");
      return;
    }

    setIsSending(true);
    setStatusMessage("");

    emailjs
      .sendForm(
        `${import.meta.env.VITE_EMAILJS_SERVICE_ID}`,
        `${import.meta.env.VITE_EMAILJS_TEMPLATE_ID}`,
        e.target,
        `${import.meta.env.VITE_EMAILJS_USER_ID}`
      )
      .then(
        () => {
          setIsSending(false);
          setStatusMessage("Message sent successfully!");
        },
        () => {
          setIsSending(false);
          setStatusMessage("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="container my-5">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            className="form-control"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required></textarea>
        </div>
        <button type="submit" className="btn btn-primary" disabled={isSending}>
          {isSending ? "Sending..." : "Send"}
        </button>
      </form>
      {statusMessage && <p>{statusMessage}</p>}
    </section>
  );
};

export default Contact;
