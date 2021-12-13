import emailjs from "emailjs-com";
import { useState, useRef } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const nameInputRef = useRef();
  const subjectInputRef = useRef();
  const emailInputRef = useRef();
  const textareaRef = useRef();
  const formRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    if (
      !nameInputRef.current.value ||
      !subjectInputRef.current.value ||
      !emailInputRef.current.value ||
      !textareaRef.current.value
    ) {
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <h1>
          Let's discuss
          <br /> your project.
        </h1>
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <div className="formHeader">
          <h4>
            What is your story?
            <small>
              Get in touch. Always available for freelancing if the right
              project comes along with me.
            </small>
          </h4>
        </div>
        <form onSubmit={submitHandler} ref={formRef}>
          <input
            type="text"
            placeholder="Name"
            name="user_name"
            ref={nameInputRef}
          />
          <input
            type="text"
            placeholder="Subject"
            name="user_subject"
            ref={subjectInputRef}
          />
          <input
            type="text"
            placeholder="Email"
            name="user_email"
            ref={emailInputRef}
          />
          <textarea placeholder="Message" name="message" ref={textareaRef} />
          <button type="submit">Send</button>
          {message && <span>Thanks, I will reply ASAP ;)</span>}
        </form>
      </div>
    </div>
  );
}
