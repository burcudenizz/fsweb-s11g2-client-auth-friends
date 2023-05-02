import React, { useState } from "react";

export default function AddFriend() {
  const [friendData, setFriendData] = useState({
    name: "",
    email: "",
  });

  function handleChange(event) {
    setFriendData({
      ...friendData,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div>
      <div>
        <h1>ADD FRIEND</h1>
        <form>
          <label>
            {" "}
            FRIEND NAME
            <input
              type="text"
              name="name"
              value={friendData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            {" "}
            FRIEND EMAIL
            <input
              type="email"
              name="email"
              value={friendData.email}
              onChange={handleChange}
            />
          </label>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}
