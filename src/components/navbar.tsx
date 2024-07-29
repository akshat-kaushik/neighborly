"use client";
import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { HeartHandshake } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const page=window.location.pathname;
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`z-50 flex justify-center w-full ${
        scrolled ? "fixed top-0 mt-0" : ""
      }  ${page == "/" ? "bg-sky-200" : "bg-gray-100"}`}
    >
      <nav
        className={`flex relative items-center h-20 justify-between shadow-2xl p-4 bg-teal-600 transition-all duration-500 ease-in-out ${
          scrolled
            ? "w-full rounded-none"
            : "w-11/12 md:w-9/12 rounded-full mt-5"
        }`}
      >
        <div className="flex space-x-4 items-center">
          <FaBars className="text-xl md:hidden" />
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input className="w-full" type="text" placeholder="Search" />
          </div>
        </div>
        <div className="absolute flex left-1/2 -translate-x-1/2">
          <HeartHandshake size={36} />
          <h1 className="ml-2 text-2xl md:text-4xl font-bold text-center">
            GooDeeD
          </h1>
        </div>

        <div className="flex space-x-4 text-lg items-center">
          <a href="/crowdfunding" className="hidden md:inline-block">
            Crowdfunding
          </a>
          <a href="/volunteering" className="hidden md:inline-block">
            Volunteering
          </a>
          <a href="/sign-in">
            <Button>Login</Button>
          </a>
        </div>
      </nav>
    </div>
  );
}
