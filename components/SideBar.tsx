"use client";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import NewChat from "./NewChat";
import { signOut, useSession } from "next-auth/react";
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
        <div className="flex flex-row border-t-[1px] pt-2 justify-between border-gray-700  items-center gap-3 text-white">
          <Image
            src={session.user?.image!}
            width={30}
            height={30}
            className="rounded-full"
            alt="image"
          />
          <p>{session.user?.email}</p>
          <button onClick={() => signOut()}>
            <ArrowLeftOnRectangleIcon className="h-6 w-6" />
          </button>
        </div>
      )}
    </div>
  );
}

export default SideBar;
