import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="fixed top-0 ">
      <nav>
        <link  href="/"/>
        <Image/>
      </nav>
      {/* <header className="flex justify-end items-center p-4 gap-4 h-16"> */}
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      {/* </header> */}
    </div>
  );
};

export default Header;
