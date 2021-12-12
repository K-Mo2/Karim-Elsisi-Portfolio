import { useState, useRef } from "react";
import "./contact.scss";
export default function Contact() {
  const [message, setMessage] = useState(false);
  const nameInputRef = useRef();
  const subjectInputRef = useRef();
  const emailInputRef = useRef();
  const textareaRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    if (
      !nameInputRef.current.value ||
      !subjectInputRef.current.value ||
      !emailInputRef.current.value ||
      !textareaRef
    ) {
      return;
    }
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
        <form onSubmit={submitHandler}>
          <input type="text" placeholder="Name" ref={nameInputRef} />
          <input type="text" placeholder="Subject" ref={subjectInputRef} />
          <input type="text" placeholder="Email" ref={emailInputRef} />
          <textarea placeholder="Message" ref={textareaRef} />
          <button type="submit">Send</button>
          {message && <span>Thanks, I will reply ASAP ;)</span>}
        </form>
      </div>
    </div>
  );
}
