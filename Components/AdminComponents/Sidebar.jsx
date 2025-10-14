"use client";
import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const navItems = [
  {
    href: "/admin/addProduct",
    label: "Add blogs",
    icon: assets.add_icon,
  },
  {
    href: "/admin/blogList",
    label: "Blog lists",
    icon: assets.blog_icon,
  },
  {
    href: "/admin/subscriptions",
    label: "Subscriptions",
    icon: assets.email_icon,
  },
];

const baseClasses =
  "mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 shadow-[-5px_5px_0px_#000000] transition-colors";
const activeClasses =
  "bg-black text-white shadow-none translate-x-[2px] translate-y-[2px]";
const inactiveClasses = "bg-white hover:bg-slate-200";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col bg-slate-100">
      <div className="px-2 sm:pl-14 py-3 border border-black">
        <Image src={assets.logo} width={120} alt="" />
      </div>
      <div className="w-28 sm:w-80 h-[100vh] relative py-12 border border-black">
        <div className="w-[50%] sm:w-[80%] absolute right-0">
          {navItems.map(({ href, label, icon }) => {
            const isActive = pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={`${baseClasses} ${
                  isActive ? activeClasses : inactiveClasses
                }`}
              >
                {/* Make icon white on active (black background) by inverting colors */}
                <Image
                  src={icon}
                  width={28}
                  alt=""
                  className={isActive ? "invert" : ""}
                  aria-hidden
                />
                <p>{label}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
