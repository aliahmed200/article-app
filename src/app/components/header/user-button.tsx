"use client";
import Image from "next/image";
import { Moon, Settings, Sun, Truck } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { User } from "@/app/utils/types";
import { Switch } from "@/components/ui/switch";
import LogOutButton from "./LogOutButton";
interface Props {
  user: User;
}
const UserButton = ({ user }: Props) => {
  const { setTheme, theme } = useTheme();
  const [checked, setChecked] = useState(false);
  const router = useRouter();

  return (
    <div className="flex-shrink-0 z-50">
      {user.id && (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image
              className={`rounded-lg cursor-pointer p-1 inline `}
              src={user?.image}
              alt={`avatar`}
              width={45}
              height={45}
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="z-10 w-7" align="end">
            <div className=" m-4  px-12  py-4 rounded-lg flex flex-col gap-4 items-center bg-primary/25">
              <Image
                className={` cursor-pointer p-1 rounded-full inline `}
                src={user?.image}
                alt={`avatar`}
                width={80}
                height={80}
              />
              <div className="flex flex-col justify-center items-center">
                <p className="text-sm font-semibold">{user.email}</p>
                <p className="text-sm font-medium">{user.username}</p>
              </div>
            </div>{" "}
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => router.push("/dashboard/orders")}
              className="group py-3 px-6 font-medium cursor-pointer  mt-2"
            >
              <Truck className="dark:text-white group-hover:translate-x-1 transition-all duration-300" />
              My Order
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => router.push("/dashboard/settings")}
              className="group py-3 px-6 font-medium cursor-pointer "
            >
              <Settings className="dark:text-white group-hover:rotate-180 transition-all duration-300" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem className="group py-3 px-6 font-medium cursor-pointer ">
              <div
                onClick={(e) => e.stopPropagation()}
                className="flex items-center group"
              >
                <div className="relative flex mr-3">
                  <Sun className="  group-hover:text-yellow-600 absolute dark:scale-0 dark:rotate-90 group-hover:rotate-180 transition-all duration-500 ease-in-out" />
                  <Moon className=" group-hover:text-blue-400 dark:scale-100 scale-0 group-hover:scale-2 transition-all duration-500 ease-in-out" />
                </div>

                <p>
                  Theme <span className="dark:text-blue-400">{theme}</span>
                </p>
                <Switch
                  className="scale-75 ml-2"
                  checked={checked}
                  onCheckedChange={(e) => {
                    setChecked((prev) => !prev);
                    if (e) setTheme("dark");
                    if (!e) setTheme("light");
                  }}
                />
              </div>
            </DropdownMenuItem>
            <LogOutButton />
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
};

export default UserButton;
