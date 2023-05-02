import React from "react";
import { useState, useEffect } from "react";
import { axiosWithAuth } from "./AxiosAuth";

export default function FriendList() {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get(`/api/friends`)
      .then((response) => {
        setFriends(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
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
