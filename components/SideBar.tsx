"use client";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import NewChat from "./NewChat";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "@/firebase";
import { query, collection, orderBy } from "firebase/firestore";
import ChatRow from "./ChatRow";
import ModelSelection from "./ModelSelection";

function SideBar() {
  const { data: session } = useSession();
  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );

  return (
    <div className="p-2 flex flex-col h-screen md:flex-col md:flex">
      <div className="flex-1">
        <div>
          {/* New chat   */}
          <NewChat />
          <div className="hidden sm:inline">
            <ModelSelection />
          </div>

          <div className="flex flex-col space-y-2">
            {loading && (
              <div className="animate-pulse text-center text-white">
                <p>Loading Chats...</p>
              </div>
            )}
            {/* Map through chat rows */}
            {chats?.docs.map((chat) => (
              <ChatRow key={chat.id} id={chat.id} />
            ))}
          </div>
        </div>
      </div>
      {session && (
        <div className="flex flex-row border-t-[1px] pt-2 justify-between border-gray-700  items-center gap-3 text-white">
          <Image
            src={session.user?.image!}
            width={30}
            height={30}
            className="rounded-full cursor-pointer hover:opacity-50"
            alt="image"
          />
          <p className="hidden md:block">{session.user?.email}</p>
          <button onClick={() => signOut()}>
            <ArrowLeftOnRectangleIcon className="h-6 w-6" />
          </button>
        </div>
      )}
    </div>
  );
}

export default SideBar;
