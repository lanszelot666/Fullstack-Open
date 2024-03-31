const Notification = ({ message, colorType }) => {
  const messageStyle = {
    color: colorType,
    background: "lightgrey",
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  };

  if (message === null) {
    return null;
  }

  return (
    <div>
      <div style={messageStyle}>{message}</div>
    </div>
  );
};

export default Notification;
