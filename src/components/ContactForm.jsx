import { useState } from "react";
import { AwesomeButton, AwesomeButtonProgress, AwesomeButtonSocial } from 'react-awesome-button';
import styles from 'react-awesome-button/src/styles'

const FORM_ENDPOINT = "https://public.herotofu.com/v1/0d857dd0-4742-11ee-afc4-2f612dbc7441";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Form response was not ok');
        }

        setSubmitted(true);
      })
      .catch((err) => {
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <>
        <div className="formComplete">
            <h2>Thanks!</h2>
            <p>I appricate you reaching out! I will try to get back to you as soon as I can :)</p>
        </div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
    >
      <div>
        <input type="text" placeholder="Your name" name="name" required />
      </div>
      <div>
        <input type="email" placeholder="Your Email" name="email" required />
      </div>
      <div>
        <textarea type="text"placeholder="Your idea" name="message" required />
      </div>
      <div>
      <AwesomeButtonProgress
      type="secondary"
      size="medium"
      cssModule={styles}
      >
        Primary
      </AwesomeButtonProgress>
      </div>
    </form>
  );
};

export default ContactForm;