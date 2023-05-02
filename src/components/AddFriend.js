import React, { useState } from "react";
import { axiosWithAuth } from "./AxiosAuth";
import { useHistory } from "react-router-dom";
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
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    axiosWithAuth()
      .post(`/api/friends`, friendData)
      .then((response) => {
        console.log("friendData ulaştı", response.data);
        setFriendData({ name: "", email: "" });
        history.push("/friendlist");
      })
      .catch((err) => console.log("Error!", err));
    setFriendData({ name: "", email: "" });
  }

  return (
    <div>
      <div>
        <h1>ADD FRIEND</h1>
        <form onSubmit={handleSubmit}>
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
