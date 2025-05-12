"use client";

import axios from "axios";
import { DOMAIN } from "@/app/utils/constant";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const LogOutButton = () => {
  const router = useRouter();
  const logOutHandler = async () => {
    try {
      await axios.get(`${DOMAIN}/api/users/logout`);
      router.push("/");
      router.refresh();
    } catch (err) {
      toast.warning("someting went wrong");
      console.log(err);
    }
  };
  return (
    <button className="cursor-pointer" onClick={logOutHandler}>
      Logout
    </button>
  );
};

export default LogOutButton;
