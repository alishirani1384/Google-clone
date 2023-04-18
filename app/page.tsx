import Image from "next/image";
import Logo from "../assets/google_logo.svg";
import Avatar from "@/components/Avatar";
import ThemeBtn from "@/components/buttons/ThemeBtn";
import SearchInput from "@/components/SearchInput";
import VoiceBtn from "@/components/buttons/VoiceBtn";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div className="w-full h-screen flex flex-col">
      <header className="py-6 px-4 border-b-2 dark:border-[#3C3C3C]">
        <div className="flex items-center justify-between container mx-auto">
          <ThemeBtn />
          <Avatar session={session} />
        </div>
      </header>
      <main className="flex container mx-auto items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-col gap-10">
        <Image src={Logo} alt="logo" />
        <SearchInput />
        <VoiceBtn />
      </main>
      <footer className="border-t-2 hidden lg:block dark:border-[#3C3C3C] mt-auto w-full">
        <div className="mx-auto container py-4 px-4 flex items-center justify-between">
          <div className="flex items-center gap-8 dark:text-gray-400">
            <p className="link link-hover uppercase font-bold text-lg">gmail</p>
            <p className="link link-hover uppercase font-bold text-lg">
              images
            </p>
          </div>
          <div className="flex items-center gap-8 dark:text-gray-400">
            <p className="link text-lg">Help</p>
            <p className="link text-lg">Privacy</p>
            <p className="link text-lg">Terms</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
