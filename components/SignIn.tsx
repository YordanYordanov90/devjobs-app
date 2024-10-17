// components/SignIn.jsx
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import React from 'react';

const SignIn = () => {
  return (
    <div className="flex items-center space-x-4">
      <SignedOut>
        <SignInButton>
          <button className="bg-white text-violet-600 border border-violet-600 px-5 py-2 rounded-full transition hover:bg-violet-700 hover:text-white">
            Sign In
          </button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton
          appearance={{
            elements: {
              userButtonAvatarBox: 'w-10 h-10',
              userButtonTrigger: 'rounded-full border border-white hover:border-violet-400 transition',
            },
          }}
        />
      </SignedIn>
    </div>
  );
};

export default SignIn;
