import Chat from "@/components/Chat";
import ChatInput from "@/components/ChatInput";
import Head from "next/head";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

function ChatPage({ params: { id } }: Props) {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Head>
        <title>Clinton&apos;s AI </title>
        <link rel="icon" href="/bot.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Clinton's AI" />

        <meta
          key="metaname"
          itemProp="name"
          name="title"
          content="Clinton's AI"
        />
        <meta
          key="metadescription"
          itemProp="description"
          name="description"
          content="AI chat app developed by Confidence Emonena | Dev-Clinton"
        />
        <meta
          name="keywords"
          content="ai, chat, confidence, emonena, communication, dashboard, website, mobile app, freelance developer"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      </Head>
      <Chat chatId={id} />
      <ChatInput chatId={id} />
    </div>
  );
}

export default ChatPage;
