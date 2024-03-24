"use client";

import { useRef, useState } from "react";
import { useCursorContext } from "../context/Context";
import Icon from "./GoogleIcon";

const ContactFormEN = () => {
  const { setHoverLink } = useCursorContext();
  const submitRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [validEmail, setValidEmail] = useState(true);
  const [nameError, setNameError] = useState(false);
  const [surNameError, setSurNameError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const data = { name, surName, email, subject, message };

  function ValidateEmail(input: string) {
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (input.match(validRegex)) {
      setValidEmail(true);
      return true;
    } else {
      setValidEmail(false);
      return false;
    }
  }

  return (
    <div className="form-wrapper">
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          console.log("not ready to send yet");

          if (data.name.length === 0) {
            setError(true);
            setNameError(true);
          } else {
            setNameError(false);
          }

          if (data.surName.length === 0) {
            setError(true);
            setSurNameError(true);
          } else {
            setSurNameError(false);
          }

          if (data.email.length === 0) {
            setError(true);
            ValidateEmail(data.email);
          } else {
            ValidateEmail(data.email);
          }

          if (data.subject.length === 0) {
            setError(true);
            setSubjectError(true);
          } else {
            setSubjectError(false);
          }

          if (data.message.length === 0) {
            setError(true);
            setMessageError(true);
          } else {
            setMessageError(false);
          }

          if (
            data.name.length > 0 &&
            data.surName.length > 0 &&
            data.subject.length > 0 &&
            data.message.length > 0 &&
            ValidateEmail(data.email) === true
          ) {
            setError(false);
            console.log("message sent successfully");
            fetch("/contacto/api", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            });
          }
        }}
        className="contact-form"
      >
        <div className="field-list">
          <fieldset>
            <legend className="title">
              <span>Name</span>
              <span className="label-secondary">(required)</span>
            </legend>
            <div className="form-field-container">
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input
                  className={nameError ? "error-field" : ""}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  id="name"
                />
              </div>
              <div className="form-field">
                <label htmlFor="surname">Surname</label>
                <input
                  className={surNameError ? "error-field" : ""}
                  onChange={(e) => setSurName(e.target.value)}
                  type="text"
                  id="surname"
                />
              </div>
            </div>
          </fieldset>
          <div className="form-item">
            <label htmlFor="email">
              <span>Email</span>
              <span className="label-secondary">(required)</span>
            </label>
            <input
              className={!validEmail ? "error-email" : ""}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
            {!validEmail ? (
              <div style={{ marginTop: "0px" }} className="error-msg-wrapper">
                <div>
                  <h3 className="error-msg">
                    <div className="error-icon">
                      <span>!</span>
                    </div>
                    Please enter a valid email address.
                  </h3>
                </div>
              </div>
            ) : null}
          </div>
          <div className="form-item">
            <label htmlFor="subject">
              <span>Subject</span>
              <span className="label-secondary">(required)</span>
            </label>
            <input
              className={subjectError ? "error-field" : ""}
              onChange={(e) => setSubject(e.target.value)}
              type="text"
              id="subject"
            />
          </div>
          <div className="form-item">
            <label htmlFor="message">
              <span>Message</span>
              <span className="label-secondary">(required)</span>
            </label>
            <textarea
              className={messageError ? "error-field" : ""}
              onChange={(e) => setMessage(e.target.value)}
              id="message"
            />
          </div>
        </div>
        {error ? (
          <div className="error-msg-wrapper">
            <div>
              <h3 className="error-msg">
                <div className="error-icon">
                  <span>!</span>
                </div>
                Please fill the required fields.
              </h3>
            </div>
          </div>
        ) : null}

        {success ? (
          <div className="success-msg-wrapper">
            <div>
              <h3 className="success-msg">
                <div className="success-icon">
                  <Icon icon="check" />
                </div>
                Mensaje enviado correctamente.
              </h3>
            </div>
          </div>
        ) : null}

        <div className="form-btn-wrapper">
          <input
            ref={submitRef}
            onMouseEnter={() => {
              setHoverLink(true);
            }}
            onMouseLeave={() => {
              setHoverLink(false);
            }}
            type="submit"
            name="submit"
            className="form-submit"
            id="submit"
            value="Enviar"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactFormEN;
