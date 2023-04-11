export const Messages = ({ messages, removeMessage }) => {
  return messages.map(({ id, text }) => {
    return (
      <div className="item" key={id}>
        <p className="btn" onClick={()=>removeMessage(id)}>
          C
        </p>
        <p>{text}</p>
      </div>
    );
  });
};
