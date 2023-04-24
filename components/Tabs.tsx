import React from 'react'
import {
  AiOutlineSearch,
  AiOutlineFileImage,
  AiOutlineMore,
} from "react-icons/ai";

function Tabs() {
  return (
    <div className="tabs container dark:bg-[#262626] bg-white mx-auto px-4 tabs-boxed">
      <a className="tab dark:text-white gap-1 text-black tab-active">
        <AiOutlineSearch /> All
      </a>
      <a className="tab dark:text-white gap-1 text-black">
        <AiOutlineFileImage /> Images
      </a>
      <a className="tab dark:text-white gap-1 text-black">
        <AiOutlineMore /> More
      </a>
    </div>
  );
}

export default Tabs