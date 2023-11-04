"use client";
import { db } from "@/firebase";
import { PlusIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function NewChat() {
  const { data: session } = useSession();
  const router = useRouter();
  const createNewChat = async () => {
    const doc = await addDoc(
      collection(db, "users", session?.user?.email!, "chats"),
      {
        userId: session?.user?.email!,
        createdAt: serverTimestamp(),
      }
    );

    router.push(`/chat/${doc.id}`);
  };
  return (
    <div
      onClick={createNewChat}
      className="bg-[#1187D6] chatRow hover:bg-[#7928fd]"
    >
      <PlusIcon className="h-4 w-4 text-white" />
      <p className="flex md:block text-[12px] md:text-[1rem] text-white">
        {" "}
        New Chat
      </p>
    </div>
  );
}

export default NewChat;
