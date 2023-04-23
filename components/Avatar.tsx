import React from 'react'


function Avatar({user}:{user:string|undefined|null}) {
  
  return (
    <div className="avatar !bg-white rounded-full dark:bg-neutral online placeholder">
      <div className="w-12 h-12 rounded-full bg-neutral flex items-center justify-center">
        <span className="text-3xl uppercase dark:text-white font-bold text-black">{user}</span>
      </div>
    </div>
  );
}

export default Avatar