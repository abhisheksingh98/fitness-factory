import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Button from '../Button/Button';
import styles from './Join.module.scss';
import { IJoinProps } from './Join.props';

function Join(props: IJoinProps) {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    formRef.current &&
      emailjs
        .sendForm('service_ml0djte', 'template_wkt8ttc', formRef.current, 'b7IKRAe3D4lM6UqL5')
        .then(
          (result) => {
            formRef.current && formRef.current.reset();
          },
          (error) => {
            console.log(error.text);
          },
        );
  };

  return (
    <div className={styles.join} id="join-us">
      <div className={styles.leftJ}>
        <hr />
        <div>
          <span>Ready to</span>
          <span>Level up</span>
        </div>
        <div>
          <span>Your body</span>
          <span>with us?</span>
        </div>
      </div>
      <div className={styles.rightJ}>
        <form action="" className={styles.emailContainer} ref={formRef} onSubmit={sendEmail}>
          <input type="email" name="user_email" placeholder="Enter your email adress" />
          <Button className={styles.btnJ}>Join Now</Button>
        </form>
      </div>
    </div>
  );
}

export default Join;
