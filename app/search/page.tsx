import React from 'react'
import { Metadata } from "next";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { searchParams }: Props): Promise<Metadata> {
  return {
    title: `Google v2 - You searched for ${searchParams.q}`,
  };
}

function page({ searchParams }:{searchParams:{q:string}}) {
  
  
  return (
    <div className='text-white container px-4 py-6 mx-auto'>{searchParams.q}</div>
  )
}

export default page