"use client";

import axios from "axios";
import { DOMAIN } from "@/app/utils/constant";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { LogOut } from "lucide-react";

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
    <DropdownMenuItem
      onClick={logOutHandler}
      className="flex gap-3  items-center focus:bg-destructive/30 group py-3 px-6 text-sm font-medium cursor-pointer transition-all duration-500"
    >
      <LogOut
        size={16}
        className="group-hover:rotate-180 dark:text-white transition-all duration-300"
      />
      Sign Out
    </DropdownMenuItem>
  );
};

export default LogOutButton;
