import { SunIcon } from "@heroicons/react/20/solid";
import { BoltIcon } from "@heroicons/react/24/outline";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import React from "react";
import Bot from "../public/bot.png";
import Image from "next/image";
import Head from "next/head";

function HomePage() {
  return (
    <div className="text-white flex flex-col items-center justify-center h-screen px-2">
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
      <div className="flex flex-row align-middle mb-20 items-center gap-2">
        <Image src={Bot} alt="bolt" className="h-20 w-20" />
        <h1 className="text-4xl font-bold items-center">Clinton&apos;s AI</h1>
      </div>
      <div className="flex flex-row space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* sun icon */}
            <SunIcon className="h-10 w-10 bg-[#1187D6] rounded-full p-2 mb-4" />
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">Explain something to me</p>
            <p className="infoText">
              &quot;What is the difference between a dog and a cat?&quot;
            </p>
            <p className="infoText">
              &quot;What is the color of the sun?&quot;
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* sun icon */}
            <BoltIcon className="h-10 w-10 bg-[#1187D6] rounded-full p-2 mb-4" />
            <h2>Capabilities</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">
              Change the Clinton&apos;s AI Model to use
            </p>
            <p className="infoText">
              Messages are stored in Firebase&apos;s firestore
            </p>
            <p className="infoText">
              Hot Toast notifications when Clinton&apos;s AI is thinking!
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* sun icon */}
            <ExclamationTriangleIcon className="h-10 w-10 bg-[#1187D6] rounded-full p-2 mb-4" />
            <h2>Limitations</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">
              May occassionally generate incorrect information
            </p>
            <p className="infoText">
              May occassionally produce harmful instructions or biased content
            </p>
            <p className="infoText">
              Limited knowledge of world and events after 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
