import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import "./chat.css";
const Chat = () => {
  const [showEmoji, setShowEmoji] = useState(false);
  const [text, setText] = useState("");
  const endRef = React.useRef(null);

  React.useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleEmojiClick = (event) => {
    setText((prev) => prev + event.emoji);
    setShowEmoji(false);
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src={"./avatar.png"} alt="" />
          <div className="texts">
            <span>John Doe</span>
            <p>Lorem ipsum dolor, sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="phone" />
          <img src="./video.png" alt="video" />
          <img src="./info.png" alt="info" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="avatar" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              alias deleniti numquam, asperiores deserunt adipisci veniam quia
              quae dolorem, commodi ex, tenetur ratione possimus odit quaerat.
              Explicabo quis excepturi eum vero odit debitis deleniti quam?
            </p>
            <span>2 minutes ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              alias deleniti numquam, asperiores deserunt adipisci veniam quia
              quae dolorem, commodi ex, tenetur ratione possimus odit quaerat.
              Explicabo quis excepturi eum vero odit debitis deleniti quam?
            </p>
            <span>2 minutes ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="avatar" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              alias deleniti numquam, asperiores deserunt adipisci veniam quia
              quae dolorem, commodi ex, tenetur ratione possimus odit quaerat.
              Explicabo quis excepturi eum vero odit debitis deleniti quam?
            </p>
            <span>2 minutes ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img
              src="https://images.pexels.com/photos/30086775/pexels-photo-30086775/free-photo-of-close-up-of-eastern-gray-squirrel-on-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              alias deleniti numquam, asperiores deserunt adipisci veniam quia
              quae dolorem, commodi ex, tenetur ratione possimus odit quaerat.
              Explicabo quis excepturi eum vero odit debitis deleniti quam?
            </p>
            <span>2 minutes ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="avatar" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              alias deleniti numquam, asperiores deserunt adipisci veniam quia
              quae dolorem, commodi ex, tenetur ratione possimus odit quaerat.
              Explicabo quis excepturi eum vero odit debitis deleniti quam?
            </p>
            <span>2 minutes ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="attach" />
          <img src="./camera.png" alt="attach" />
          <img src="./mic.png" alt="attach" />
        </div>
        <input
          type="text"
          placeholder="Type your message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt="emoji"
            onClick={() => setShowEmoji((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={showEmoji} onEmojiClick={handleEmojiClick} />
          </div>
        </div>
        <button disabled className="sendButton">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
