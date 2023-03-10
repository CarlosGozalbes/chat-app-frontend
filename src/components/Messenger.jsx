import React from "react";
import { FaEdit, FaEllipsisH, FaSearch, FaSistrix } from "react-icons/fa";
import ActiveFriend from "./ActiveFriend";
import Friends from "./Friends";
import RightSide from "./RightSide";
function Messenger() {
  return (
    <div className="messenger">
      <div className="row">
        <div className="col-3">
          <div className="left-side">
            <div className="top">
              <div className="image-name">
                <div className="image">
                  <img src="/image/avatarHolder.jpg" alt="" />
                </div>
                <div className="name">
                  <h3> Hi Carlos</h3>
                </div>
                
                </div>
                <div className="icons">
                  <div className="icon">
                    <FaEllipsisH />
                  </div>
                  <div className="icon">
                    <FaEdit />
                  </div>
              </div>
            </div>
            <div className="friend-search">
              <div className="search">
                <button>
                  <FaSistrix />
                </button>
                <input
                  type="text"
                  placeholder="Search"
                  className="form-control"
                />
              </div>
            </div>
            <div className="active-friends">
              <ActiveFriend />
              <ActiveFriend />
              <ActiveFriend />
              <ActiveFriend />
            </div>
            <div className="friends">
              <div className="hover-friend">
                <Friends />
              </div>
              <div className="hover-friend">
                <Friends />
              </div>
              <div className="hover-friend">
                <Friends />
              </div>
            </div>
          </div>
        </div>
        <RightSide/>
      </div>
    </div>
  );
}

export default Messenger;
