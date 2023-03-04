import React from 'react'

function Message() {
  return (
    <div className="message-show">
      <div
        className="my-message d-flex flex-column justify-content-end
"
      >
        <div className="image-message">
          <div className="my-text">
            <p className="message-text">How are you?</p>
          </div>
        </div>
        <div className="time">2 Jan 2022</div>
      </div>

      <div className="fd-message">
        <div className="image-message-time">
          <img src="/image/avatarHolder.jpg" alt="" />
          <div className="message-time">
            <div className="fd-text">
              <p className="message-text">I am fine</p>
            </div>
            <div className="time">3 Jan</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message