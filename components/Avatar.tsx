"use client"
import React from 'react'
import AvatarImg from "../assets/avatar.jpg";
import Image from 'next/image';
import { signIn } from "next-auth/react";


function Avatar() {
  
  return (
    <div
      className="avatar online">
      <div className="w-12 h-12 rounded-full">
        <Image src={AvatarImg} alt="profile" className="object-cover" />
      </div>
    </div>
  );
}

export default Avatar