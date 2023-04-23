import React from 'react'


function Avatar({user}:{user:string|undefined|null}) {
  
  return (
    <div className="avatar online placeholder">
      <div className="w-12 h-12 rounded-full bg-neutral">
        <span className="text-3xl uppercase text-white font-bold">{user}</span>
      </div>
    </div>
  );
}

export default Avatar