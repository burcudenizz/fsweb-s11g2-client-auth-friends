import React from "react";
import { useState } from "react";

export default function FriendList() {
  const [friends, setFriends] = useState([]);

  return (
    <div>
      <h1>FRIEND LIST</h1>
      <div>
        <ul>
          {friends.map((person) => (
            <li key={person.id}>
              {person.name} - {person.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
