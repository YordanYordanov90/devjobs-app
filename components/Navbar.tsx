// components/Navbar.jsx
import Link from "next/link";
import React from "react";
import SearchForm from "./SearchForm";
import SignIn from "./SignIn";
import { SignedIn, SignedOut } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <header className="bg-violet-600 h-[160px] mx-auto">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between p-10 items-center">
          <Link className="text-white font-semibold text-3xl" href="/">
            DevJobs
          </Link>

          <div className="flex items-center space-x-6">
            <SignedOut>
              <Link className="text-white hover:underline" href="/sign-in">
                Sign In
              </Link>
            </SignedOut>
            <SignedIn>
              <Link className="text-white hover:underline" href="/job-listings">
                All Jobs
              </Link>
            </SignedIn>
            <SignIn />
          </div>
        </div>
        <SearchForm />
      </div>
    </header>
  );
};

export default Navbar;
