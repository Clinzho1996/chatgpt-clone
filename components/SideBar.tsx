"use client";
import NewChat from "./NewChat";
import { useSession } from "next-auth/react";
import Image from "next/image";

function SideBar() {
  const { data: session } = useSession();

  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          {/* New chat   */}
          <NewChat />
          <div>{/* Model selection */}</div>

          {/* Map through chat rows */}
        </div>
      </div>
      {session && (
        <div className="flex flex-row items-center gap-3 text-white">
          <Image
            src={session.user?.image!}
            width={30}
            height={30}
            className="rounded-full"
            alt="image"
          />
          <p>{session.user?.email}</p>
        </div>
      )}
    </div>
  );
}

export default SideBar;
