"use client";

import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Appbar = () => {
  const session = useSession();
  return (
    <div className="flex justify-between px-20 w-full">
      <div className="text-lg font-bold flex flex-col justify-center text-white">
        Muzer
      </div>
      <div>
        {session.data?.user && (
          <Button
            className="bg-purple-600 text-white hover:bg-purple-700 "
            onClick={() => signOut()}
          >
            LogOut
          </Button>
        )}    
        {!session.data?.user && (
          <Button
            className="bg-purple-600 text-white hover:bg-purple-700  "
            onClick={() => signIn()}
          >
            Signin
          </Button>
        )}
      </div>
    </div>
  );
};

export default Appbar;
