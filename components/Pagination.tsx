"use client"
import React from 'react'

function Pagination() {

   function handleClick(){
        
    }
  return (
    <div className="btn-group grid grid-cols-2 mt-16 max-w-xl">
      <button className="btn btn-outline dark:text-white hover:border-none hover:bg-violet-500">
        Previous page
      </button>
      <button onClick={handleClick} className="btn btn-outline dark:text-white hover:border-none hover:bg-violet-500">
        Next
      </button>
    </div>
  );
}

export default Pagination