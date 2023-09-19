import "./notification.css";

interface Props {
  message: string;
  isError: boolean;
  isDisplayed: boolean;
}

const Notification = ({ message, isError, isDisplayed }: Props) => {
  enum NotificationTypes {
    ERROR = "error",
    SUCCESS = "success",
  }

  const error = (
    <div className={NotificationTypes.ERROR}>
      <p>{message}</p>
    </div>
  );

  const success = (
    <div className={NotificationTypes.SUCCESS}>
      <p>{message}</p>
    </div>
  );

  if (!isDisplayed) {
    return null;
  } else {
    return isError ? error : success;
  }
};

export default Notification;
