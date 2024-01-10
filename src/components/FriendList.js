import React, { useEffect } from "react";
import '../styles/FriendsList.css';

const FriendList = (props) => {
  const { liste } = props;

  useEffect(() => {
    console.log("FriendList : ", liste);
  }, []);

  return (
    <div className="friend-list">
      <div className="liste">
        <h2>FRIENDS LIST</h2>
        <ul>
          {liste !== null &&
            liste.length > 0 &&
            liste.map((friend, index) => {
              return (
                <li key={index}>
                  <span>-</span>
                  <span>{friend.name.toUpperCase()}</span> <span> - </span>
                  <span>{friend.email.toUpperCase()}</span>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default FriendList;