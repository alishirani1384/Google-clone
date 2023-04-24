import Image from "next/image";
import Logo from "../../assets/google_logo.svg"
import SearchInput from "@/components/SearchInput";
import Link from "next/link";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="dark:bg-[#262626] w-full min-h-screen">
        <header className="w-full border-b-2 dark:border-[#3C3C3C]">
          <div className="px-4 py-6 container mx-auto flex justify-between items-center">
            <Link href={"/"}>
            <Image src={Logo} alt="logo" width={100} />
            </Link>
            <SearchInput/>
          </div>
        </header>
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}
