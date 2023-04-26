"use client"
import Image from "next/image";
import React, { useCallback } from "react";
import SearchIcon from "../assets/search.png"
import GoogleIcon from "../assets/google.png"
import { useSearch } from "@/store/search";
import { shallow } from 'zustand/shallow'
import { useRouter,useSearchParams } from "next/navigation";

function SearchInput() {
  const router = useRouter();
  const searchParams=useSearchParams()

  const { search, setSearch } = useSearch(
  (state) => ({ search: state.search, setSearch: state.setSearch }),
  shallow
  )

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  
  function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault()
    if (search) {
      router.push("/search"+"?"+createQueryString("q",search)+"&"+createQueryString("page","0"))
    } else {
      return false
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className="relative md:w-3/4 xl:w-1/2 w-full px-4">
      <input
        type="search"
        placeholder="Search Google"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        className="input input-lg caret-black dark:caret-white dark:text-white pl-14 placeholder:text-[#595959] placeholder:font-semibold gr focus:outline-none shadow-md w-full"
      />
      <Image
        src={SearchIcon}
        alt="icon"
        width={35}
        height={35}
        className="absolute left-8 top-1/2 -translate-y-1/2"
      />
      <Image
        src={GoogleIcon}
        alt="icon"
        width={30}
        height={30}
        className="absolute right-8 top-1/2 -translate-y-1/2"
      />
    </form>
  );
}

export default SearchInput;
