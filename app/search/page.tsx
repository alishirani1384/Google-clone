import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Pagination from "@/components/Pagination";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  return {
    title: `Google v2 - You searched for ${searchParams.q}`,
  };
}

async function page({
  searchParams,
}: {
  searchParams: { q: string; page: string };
}) {
  const url = `https://www.googleapis.com/customsearch/v1?q=${searchParams.q}&key=${process.env.GOOGLE_KEY}&cx=${process.env.GOOGLE_CX}&alt=json`;
  const response = await fetch(url);
  const data = await response.json();

  return (
    <div className="dark:text-white container flex flex-col px-4 py-6 mx-auto">
      <p className="text-sm font-semibold">
        About {data.searchInformation.formattedTotalResults} results (
        {data.searchInformation.formattedSearchTime} seconds)
      </p>
      <div className="flex flex-col mt-5 gap-5">
        {data.items?.map(
          (
            s: {
              link: string | undefined;
              title: string | undefined;
              displayLink: string | undefined;
              snippet: string | undefined;
            },
            i: React.Key | null | undefined
          ) => {
            return (
              <div key={i}>
                <h2 className="text-lg font-semibold">
                  <a href={s.link} target="_block">
                    {s.title}
                  </a>
                </h2>
                <small className="dark:text-gray-300">{s.displayLink}</small>
                <p className="text-sm">{s.snippet}</p>
              </div>
            );
          }
        )}
        {data.message && <h3>{data.message}</h3>}
      </div>
      <Pagination />
    </div>
  );
}

export default page;
