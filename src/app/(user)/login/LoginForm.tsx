"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const DOMIAN = "http://localhost:3000";

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "") return toast.error("Email is Required");
    if (password === "") return toast.error("Password is Required");

    try {
      await axios.post(`${DOMIAN}/api/users/login`, { email, password });
      router.replace("/");
    } catch (err: any) {
      toast.error(err?.responss.data.message);
      console.log(err);
    }
  };
  return (
    <form onSubmit={formSubmitHandler} className="flex flex-col">
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
        className="text-2xl text-white bg-black slate-900 p-2 rounded"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
