import React from 'react';
import styles from './Contact.module.css';
import { ReactComponent as Person } from '../assets/person.svg';
import { ReactComponent as Location } from '../assets/location.svg';
import { ReactComponent as Email } from '../assets/email.svg';
import useForm from '../hooks/useForm';

const Contact = () => {
  const [name, setName] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const formName = useForm();
  const formSubject = useForm();
  const formEmail = useForm('email');
  const formText = useForm();
  const { validate, onBlur } = useForm();

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeSubject = (event) => {
    setSubject(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = '/willianmaziero';
  };

  return (
    <section className={styles.grid}>
      <div className={styles.title}>
        <h1>Contact</h1>
      </div>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h3>Message me</h3>
          <div className={styles.inputContainer}>
            <label htmlFor="name">Name</label>
            <input
              value={name}
              id="name"
              type="text"
              onChange={handleChangeName}
              name="formName"
              onBlur={onBlur}
              {...formName}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="subject">Subject</label>
            <input
              value={subject}
              type="text"
              id="subject"
              onChange={handleChangeSubject}
              name="formSubject"
              {...formSubject}
            />
          </div>
          <div className={`${styles.inputFullRow} ${styles.inputContainer}`}>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              type="email"
              onChange={handleChangeEmail}
              name="formEmail"
              onBlur={onBlur}
              {...formEmail}
            />
          </div>
          <div className={`${styles.inputFullRow} ${styles.inputContainer}`}>
            <label></label>
            <textarea
              placeholder="Send your message.."
              value={message}
              id="message"
              cols="30"
              rows="5"
              onChange={handleChangeMessage}
              name="formText"
              {...formText}
            ></textarea>
          </div>
          <div className={styles.btn}>
            <button type="submit">Send Message</button>
          </div>
        </form>
        <div className={styles.containerContactMain}>
          <div className={styles.contactMain}>
            <h3 className={styles.titleContact}>Contact Information</h3>
            <p>We can work and build amazing things together</p>
          </div>
          <div className={styles.containerContact}>
            <div>
              <Person />
              <div>
                <h3>Name</h3>
                <p>Willian Maziero</p>
              </div>
            </div>
            <div>
              <Location />
              <div>
                <h3>Location</h3>
                <p>London, Ontario</p>
              </div>
            </div>
            <div>
              <Email />
              <div>
                <h3>Email</h3>
                <p>willian.maziero@hotmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
