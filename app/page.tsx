import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen  text-center gap-4 p-8">
      <h1 className="text-5xl font-bold text-violet-600 mb-4">
        Welcome to DevJobs
      </h1>
      <p className="text-lg text-white/90 mb-8">
        Discover your next career opportunity in tech. Browse hundreds of job
        listings from top companies around the world.
      </p>

      <SignedOut>
        <Link
          className="bg-violet-600 text-white px-8 py-3 rounded-full transition hover:bg-violet-700"
          href="/sign-in"
        >
          Get Started
        </Link>
      </SignedOut>

      <SignedIn>
        <Link
          className="bg-violet-600 text-white px-8 py-3 rounded-full transition hover:bg-violet-700"
          href="/job-listings"
        >
          Go to Job Listings
        </Link>
      </SignedIn>
    </main>
  );
}
