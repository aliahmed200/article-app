"use client";

import { useState } from "react";
import { toast } from "react-toastify";

const RegisterForm = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "") toast.error("User name is Required");
    if (email === "") toast.error("Email is Required");
    if (password === "") toast.error("Password is Required");
    console.log({ username, email, password });
  };
  return (
    <form onSubmit={formSubmitHandler} className="flex flex-col">
      <div className="flex flex-col gap-2.5">
        <label className="text-xl" htmlFor="">
          user name
        </label>
        <input
          className="mb-4 rounded border border-gray-400 p-2 text-xl"
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2.5">
        <label className="text-xl" htmlFor="">
          Email
        </label>
        <input
          className="mb-4 rounded border border-gray-400 p-2 text-xl"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2.5">
        <label className="text-xl" htmlFor="">
          Password
        </label>
        <input
          className="mb-4 rounded border border-gray-400 p-2 text-xl"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="text-2xl text-white bg-black p-2 rounded"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
