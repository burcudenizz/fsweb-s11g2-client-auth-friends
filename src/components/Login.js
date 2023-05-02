import React from "react";
import { useState } from "react";
export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.value]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
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
