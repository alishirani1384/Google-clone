import Image from "next/image";
import Logo from "../../assets/google_logo.svg";
import SearchInput from "@/components/SearchInput";
import Link from "next/link";
import Tabs from "@/components/Tabs";


export default function SearchLayout({
  children,
}: {
    children: React.ReactNode;
  }) {
  
  return (
    <>
      <header className="w-full border-b-2 dark:border-[#3C3C3C]">
        <div className="px-4 py-6 container mx-auto flex justify-between items-center">
          <Link href={"/"}>
            <Image src={Logo} alt="logo" width={100} />
          </Link>
          <SearchInput />
        </div>
        <Tabs />
      </header>
      <main className="w-full">{children}</main>
    </>
  );
}
