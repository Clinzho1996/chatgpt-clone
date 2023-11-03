import SideBar from "@/components/SideBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SessionProvider } from "@/components/SessionProvider";
import { getServerSession } from "next-auth";
import Login from "@/components/Login";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import ClientProvider from "@/components/ClientProvider";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex flex-col md:flex md:flex-row overflow-y-hidden h-screen">
              <div className="bg-[#202123] hidden md:block max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
                {/* Sidebar */}
                <SideBar />
              </div>
              <div className="bg-[#202123] p-3 md:hidden block">
                <Navbar />
              </div>

              {/* Notification */}
              <ClientProvider />
              <div className="bg-[#343541] flex-1">{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
