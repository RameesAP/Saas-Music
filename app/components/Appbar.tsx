"use client";

import { signIn, signOut, useSession } from "next-auth/react";

const Appbar = () => {
  const session = useSession();

  return (
    <div className="flex justify-between">
      <div className="">Muzi</div>
      <div className="">
        {session.data?.user && (
          <button
            className="m-2 p-2 bg-blue-400 rounded-lg"
            onClick={() => signOut()}
          >
            LogOut
          </button>
        )}
        {!session.data?.user && (
          <button
            className="m-2 p-2 bg-blue-400 rounded-lg"
            onClick={() => signIn()}
          >
            Signin
          </button>
        )}
      </div>
    </div>
  );
};

export default Appbar;
