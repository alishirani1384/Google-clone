import React from "react";
import { Metadata } from "next";
import Link from "next/link";

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

async function page({ searchParams }: { searchParams: { q: string } }) {
  const url = `https://google-search72.p.rapidapi.com/search?query=${searchParams.q}&start=0`;
  const options = {
    method: "GET",
    headers: {
      "content-type": "application/octet-stream",
      "X-RapidAPI-Key": "436a2fee38msh16b72c7bf3ef475p1ca5e8jsn868f2489df15",
      "X-RapidAPI-Host": "google-search72.p.rapidapi.com",
    },
  };
  const response = await fetch(url, options);
  const data = await response.json();

  return (
    <div className="dark:text-white container flex flex-col px-4 py-6 mx-auto">
      <p className="text-sm font-semibold">
        About {data.estimatedResultCount} results
      </p>
      <div className="flex flex-col mt-5 gap-5">
        {data.items.map((s: { link: string | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; displayLink: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; snippet: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }, i: React.Key | null | undefined) => {
          return (
            <div key={i}>
              <h2 className="text-lg font-semibold"><a href={s.link} target="_block">{s.title}</a></h2>
              <small className="dark:text-gray-300">{s.displayLink}</small>
              <p className="text-sm">{s.snippet}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default page;
