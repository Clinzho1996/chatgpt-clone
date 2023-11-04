import SideBar from "@/components/SideBar";
import "./globals.css";
import { Inter } from "next/font/google";
import { SessionProvider } from "@/components/SessionProvider";
import { getServerSession } from "next-auth";
import Login from "@/components/Login";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import ClientProvider from "@/components/ClientProvider";
import Navbar from "@/components/Navbar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "  Clinton's AI - Chatbot created by Dev-Clinton",
  description: "Developed by Confidence Emonena Ochuko",
  keywords:
    "ai, chat, confidence, emonena, communication, dashboard, website, mobile app, freelance developer",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
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
      <body className={inter.className}>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex flex-col md:flex md:flex-row">
              <div className="bg-[#00082F] hidden md:block border-r-[1px] border-[#AFBDFF] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
                {/* Sidebar */}
                <SideBar />
              </div>
              <div className="bg-[#202123] p-3 md:hidden block">
                <Navbar />
              </div>

              {/* Notification */}
              <ClientProvider />
              <div className="bg-[#00082F] flex-1">{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
