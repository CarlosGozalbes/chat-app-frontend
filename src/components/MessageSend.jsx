import React from "react";
import {
  FaFileImage,
  FaGift,
  FaHeart,
  FaPaperPlane,
  FaPlusCircle,
  FaSmile,
} from "react-icons/fa";

function MessageSend() {
  const emojis = [
    "😀",
    "😃",
    "😄",
    "😁",
    "😆",
    "😅",
    "😂",
    "🤣",
    "😊",
    "😇",
    "🙂",
    "🙃",
    "😉",
    "😌",
    "😍",
    "😝",
    "😜",
    "🧐",
    "🤓",
    "😎",
    "😕",
    "🤑",
    "🥴",
    "😱",
  ];

  return (
    <div className="message-send-section">
      <input type="checkbox" name="" id="emoji" />
      <div className="file hover-attachment">
        <div className="add-attachment">Add Attachment</div>
        <FaPlusCircle />
      </div>
      <div className="file hover-image">
        <div className="add-image">Add image</div>
        <label htmlFor="pic">
          {" "}
          <FaFileImage />
        </label>
      </div>
      <div className="file hover-gift">
        <div className="add-gift">Add gift</div>
        <FaGift />
      </div>
      <div className="message-type">
        <input
          type="text"
          name="message"
          id="message"
          placeholder="Aa"
          className="form-control"
        />
        <div className="file hover-gift">
          <label htmlFor="emoji">
            <FaSmile/>
          </label>
        </div>
      </div>
      <div className="file">
        <FaHeart />
      </div>
      <div className="emoji-section">
        <div className="emoji">
          {emojis.map((e) => (
            <span>{e}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MessageSend;
