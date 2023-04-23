import React from 'react'


function Avatar({user}:{user:string|undefined|null}) {
  
  return (
    <div className="avatar online">
      <div className="w-12 h-12 rounded-full">
        <span className="text-3xl">{user}</span>
      </div>
    </div>
  );
}

export default Avatar