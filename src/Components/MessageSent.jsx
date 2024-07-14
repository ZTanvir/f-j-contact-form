import iconSuccess from "../assets/images/icon-success-check.svg";
import styles from "../styles/messagesent.module.css";

const MessageSent = ({}) => {
  return (
    <div className={styles.messageSentContainer}>
      <p className={styles.messageSentTitle}>
        <span>
          <img src={iconSuccess} alt="check mark icon" />
        </span>
        <span>Message Sent!</span>
      </p>
      <p>Thanks for completing the form.We'll be in touch soon!</p>
    </div>
  );
};
export default MessageSent;
