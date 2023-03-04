import React from "react";
import { FaPhoneAlt, FaRocketchat, FaVideo } from "react-icons/fa";
import FriendInfo from "./FriendInfo";
import Message from "./Message";
import MessageSend from "./MessageSend";

function RightSide() {
  return (
    <div className="col-9">
      <div className="right-side">
        <input type="checkbox" name="" id="dot" />
        <div className="row">
          <div className="col-8">
            <div className="message-send-show">
              <div className="header">
                <div className="image-name">
                  <div className="image">
                    <img src="/image/avatarHolder.jpg" alt="" />
                  </div>
                  <div className="name">
                    <h3>Carlos Gozalbes</h3>
                  </div>
                </div>
                <div className="icons">
                  <div className="icon">
                    <FaPhoneAlt />
                  </div>
                  <div className="icon">
                    <FaVideo />
                  </div>
                  <div className="icon">
                    <label htmlFor="dot"> <FaRocketchat /></label>
                  </div>
                </div>
              </div>
              <Message />
              <MessageSend />
            </div>
          </div>
          <div className="col-4"> <FriendInfo/> </div>
        </div>
      </div>
    </div>
  );
}

export default RightSide;
