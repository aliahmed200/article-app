"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { DOMAIN } from "@/app/utils/constant";
import axios from "axios";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const formSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (data.username === "") toast.error("User name is Required");
    if (data.email === "") toast.error("Email is Required");
    if (data.password === "") toast.error("Password is Required");
    try {
      setLoading(true);
      await axios.post(`${DOMAIN}/api/users/register`, {
        username: data.username,
        email: data.email,
        password: data.password,
      });
      router.replace("/");
      setLoading(false);
      router.refresh();
    } catch (err: any) {
      toast.error(err?.response?.data.message);
      setLoading(false);
      console.log(err);
    }
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
          value={data.username}
          onChange={(e) => setData({ ...data, username: e.target.value })}
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
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
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
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
      </div>

      <button
        type="submit"
        className="text-2xl text-white bg-black p-2 rounded"
      >
        {loading ? "Loading..." : "Register"}
      </button>
    </form>
  );
};

export default RegisterForm;
