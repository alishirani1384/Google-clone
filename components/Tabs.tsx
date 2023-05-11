"use client"
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react'
import {
  AiOutlineSearch,
  AiOutlineFileImage,
  AiOutlineMore,
} from "react-icons/ai";

function Tabs() {
  const searchParams = useSearchParams();
  function handleClick(e: any) {
    document.querySelector(".tab-active")?.classList.remove("tab-active");
    e.target.classList.add("tab-active");
  }
  return (
    <div className="tabs container dark:bg-[#262626] bg-white mx-auto px-4 tabs-boxed">
      <Link onClick={handleClick} href={`/search?${searchParams.toString()}`} className="tab dark:text-white gap-1 text-black tab-active">
        <AiOutlineSearch /> All
      </Link>
      <Link
        onClick={handleClick}
        href={`/search/images?${searchParams.toString()}`}
        className="tab dark:text-white gap-1 text-black">
        <AiOutlineFileImage /> Images
      </Link>
      <a className="tab dark:text-white gap-1 text-black">
        <AiOutlineMore /> More
      </a>
    </div>
  );
}

export default Tabs