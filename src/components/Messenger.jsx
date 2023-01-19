import React from 'react'
import {FaEdit, FaEllipsisH, FaSearch, FaSistrix} from "react-icons/fa"
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
                <div className="icons">
                  <div className="icon">
                    <FaEllipsisH />
                  </div>
                  <div className="icon">
                    <FaEdit />
                  </div>

                </div>
              </div>
              <div className='friend-search'>
                    <div className='search'>
                       <button><FaSistrix/></button>
                       <input type="text" placeholder='Search' className='form-control'/>  
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messenger