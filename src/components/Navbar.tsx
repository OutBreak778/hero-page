"use client"

import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="sticky h-16 inset-x-0 top-0 z-30 w-full border-x border-b border-gray-200 bg-white/15 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-12 items-center justify-between ">
          <Link href="/" className="flex z-40">
            <div className="w-fit flex mt-4">
              <svg
                viewBox="0 0 32 32"
                fill="none"
                aria-hidden="true"
                className="h-8 w-auto text-blue-600 "
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M31.75 18h-8.13a8 8 0 01-15.5 0H0a16 16 0 0031.75 0zm0-4h-8.13a8 8 0 00-15.5 0H0a16 16 0 0131.75 0z"
                  fill="url(#:S2:-g)"
                ></path>
                <path
                  d="M31.75 18l1 .12.13-1.12h-1.13v1zm-8.13 0v-1h-.77l-.2.75.97.25zm-15.5 0l.98-.25-.2-.75h-.77v1zM0 18v-1h-1.13l.14 1.12L0 18zm23.62-4l-.96.25.19.75h.77v-1zm8.13 0v1h1.13l-.14-1.12-.99.12zM8.13 14v1h.77l.2-.75-.97-.25zM0 14l-1-.12-.13 1.12H0v-1zm31.75 3h-8.13v2h8.13v-2zm-9.1.75A7 7 0 0115.89 23v2a9 9 0 008.71-6.75l-1.93-.5zM15.89 23a7 7 0 01-6.78-5.25l-1.94.5A9 9 0 0015.88 25v-2zm-7.75-6H0v2h8.13v-2zm7.75 14A15 15 0 01.99 17.88l-1.98.24A17 17 0 0015.88 33v-2zm14.88-13.12A15 15 0 0115.88 31v2a17 17 0 0016.86-14.88l-1.98-.24zM23.62 15h8.13v-2h-8.13v2zm-7.74-6a7 7 0 016.78 5.25l1.93-.5A9 9 0 0015.88 7v2zM9.1 14.25A7 7 0 0115.88 9V7a9 9 0 00-8.72 6.75l1.94.5zM0 15h8.13v-2H0v2zm1-.88A15 15 0 0115.87 1v-2A17 17 0 00-1 13.88l1.98.24zM15.87 1a15 15 0 0114.88 13.12l1.98-.24A17 17 0 0015.88-1v2z"
                  fill="#fff"
                  fillOpacity="0.2"
                  mask="url(#:S2:-m)"
                ></path>
                <defs>
                  <linearGradient
                    id=":S2:-g"
                    x1="15.88"
                    y1="0"
                    x2="15.88"
                    y2="32"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#07a3e6"></stop>
                    <stop offset="1" stopColor="#07a3e6"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <h1 className="ml-3 hidden md:block font-semibold text-2xl capitalize">
                OUTBREAK
              </h1>
            </div>
          </Link>
          <div className="items-center mt-4 text-slate-800 space-x-4 sm:flex">
            <>
              <Button variant="default" size="default"
              >
                Account
              </Button>

            </>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
