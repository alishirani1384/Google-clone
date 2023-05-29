import React from 'react'
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function loading() {
  return (
    <div className="container mx-auto hidden lg:flex">
      <div className="mt-5 flex flex-wrap gap-5 w-full justify-between">
        <Skeleton count={4} width={350} height={350} />
      </div>
      <div className="mt-5 flex-wrap flex gap-5 w-full justify-between">
        <Skeleton count={4} width={350} height={350} />
      </div>
      <div className="mt-5 flex-wrap flex gap-5 w-full justify-between">
        <Skeleton count={4} width={350} height={350} />
      </div>
    </div>
  );
}

export default loading