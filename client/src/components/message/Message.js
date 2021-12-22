import { format } from "timeago.js";
import "./message.css";

export default function Message({ message, own }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          alt="messageim"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4FRdJhLdEEhFbcIuR-DEGYsFMjn-6QUGZ7A&usqp=CAU"
        />
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  );
}
