import Image from "next/image";
import React from "react";
import SearchIcon from "../assets/search.png"
import GoogleIcon from "../assets/google.png"

function SearchInput() {
  return (
    <form className="relative md:w-3/4 xl:w-1/2 w-full px-4">
      <input
        type="search"
        placeholder="Search Google"
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
