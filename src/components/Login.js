import React from "react";
import { useState } from "react";
import { axiosWithAuth } from "./AxiosAuth";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "workintech",
    password: "wecandoit",
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    axiosWithAuth()
      .post(`/api/login`, formData)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        history.push("/friends");
        console.log("formData ulaştı", response.data);
      })
      .catch((err) => console.log("Error!", err));
  }

  return (
    <div className="flex flex-col">
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <label>
          {" "}
          USERNAME
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <label>
          {" "}
          PASSWORD
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <button className="bg-black text-white p-8 m-4" type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
}
