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

function page() {
  return (
    <div className='text-white'>page</div>
  )
}

export default page