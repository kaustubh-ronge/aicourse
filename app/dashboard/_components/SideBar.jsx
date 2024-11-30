"use client";

import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  HiOutlineHome,
  HiOutlineSquare3Stack3D,
  HiOutlineShieldCheck,
  HiOutlinePower,
} from "react-icons/hi2";

const SideBar = () => {
  const Menu = [
    {
      id: 1,
      name: "Home",
      icon: <HiOutlineHome />,
      path: "/dashboard",
    },
    {
      id: 2, // Fixed duplicate id
      name: "Explore",
      icon: <HiOutlineSquare3Stack3D />,
      path: "/dashboard/explore",
    },
    {
      id: 3, // Fixed duplicate id
      name: "Upgrade",
      icon: <HiOutlineShieldCheck />,
      path: "/dashboard/upgrade",
    },
    {
      id: 4, // Fixed duplicate id
      name: "Logout",
      icon: <HiOutlinePower />,
      path: "/dashboard/logout",
    },
  ];

  const path = usePathname();

  return (
    <div className="fixed h-full md:w-64 p-5 shadow-md">
      <Image src={"/logo.svg"} width={150} height={100} alt="image " />
      <hr className="my-5" />

      <ul>
        {Menu.map((item) => (
          <li key={item.id}> {/* Added key */}
            <Link href={item.path}>
              <div
                className={`flex items-center gap-2 text-gray-600 p-3 cursor-pointer hover:bg-gray-100 hover:text-black rounded-lg mb-3 ${
                  item.path === path && "bg-gray-100 text-black"
                }`}
              >
                <div className="text-2xl">{item.icon}</div>
                <h2>{item.name}</h2>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="absolute bottom-10 w-[80%]">
        <Progress value={32} />
        <h2 className="text-sm my-2">3 out of 5 courses created</h2>
        <h2 className="text-xs text-gray-500">
          Upgrade your plan for unlimited course generation
        </h2>
      </div>
    </div>
  );
};

export default SideBar;
