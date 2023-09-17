const Notification = (props) => {
  //  Write your code here.
  const { classValue, message, icon } = props;
  return (
    <div className={classValue}>
      <img src={icon} className="icon" />
      <p>{message}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div class="notification-container">
    <h1 class="main-head">Notifications</h1>
    <Notification
      classValue="info card"
      message="Information Message"
      icon="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
    />
    <Notification
      classValue="success card"
      message="Success Message"
      icon="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
    />
    <Notification
      classValue="warning card"
      message="Warning Message"
      icon="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
    />
    <Notification
      classValue="error card"
      message="Error Message"
      icon="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
