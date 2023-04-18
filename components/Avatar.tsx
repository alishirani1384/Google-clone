"use client"
import React from 'react'
import AvatarImg from "../assets/avatar.jpg";
import Image from 'next/image';
import { signIn } from "next-auth/react";
import { Session } from 'next-auth';


function Avatar({ session }: { session: Session | null }) {
  return (
    <div className="avatar online" onClick={() => signIn("google")}>
      <div className="w-12 h-12 rounded-full">
        <Image src={AvatarImg} alt="profile" className="object-cover" />
        <p>{session?.user?.name}</p>
      </div>
    </div>
  );
}

export default Avatar