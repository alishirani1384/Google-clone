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

async function page({
  searchParams,
}: {
  searchParams: { q: string; page: string };
}) {
  const url = `https://g-search.p.rapidapi.com/search?q=${searchParams.q}&num=12`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "436a2fee38msh16b72c7bf3ef475p1ca5e8jsn868f2489df15",
      "X-RapidAPI-Host": "g-search.p.rapidapi.com",
    },
  };
  const response = await fetch(url, options);
  const data = await response.json();

  return (
    <div className="dark:text-white container flex flex-col px-4 py-6 mx-auto">
      <p className="text-sm font-semibold">{data.data.result_stat}</p>
      <div className="flex flex-col gap-3 my-10 xl:w-2/3">
        <b className="text-lg">{data.data.knowledge_graph.description}</b>
        <ul className="hidden md:flex gap-8">
          {data.data.knowledge_graph.informations?.map(
            (
              d: {
                value: {
                  title:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | React.ReactFragment
                    | React.ReactPortal
                    | null
                    | undefined;
                  desc:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | React.ReactFragment
                    | React.ReactPortal
                    | null
                    | undefined;
                };
              },
              i: React.Key | null | undefined
            ) => (
              <li key={i} className="flex flex-col text-sm">
                {d.value.title} : <b>{d.value.desc}</b>
              </li>
            )
          )}
        </ul>
      </div>

      <div className="flex flex-col mt-5 gap-5">
        {data.data.organic_results?.map(
          (
            s: {
              url: string | undefined;
              title: string | undefined;
              desc: string | undefined;
            },
            i: React.Key | null | undefined
          ) => {
            return (
              <div key={i}>
                <h2 className="text-lg font-semibold">
                  <a href={s.url} target="_block">
                    {s.title}
                  </a>
                </h2>
                <small className="dark:text-gray-300">{s.url}</small>
                <p className="text-sm">{s.desc}</p>
              </div>
            );
          }
        )}
        {data.message && <h3>{data.message}</h3>}
      </div>
    </div>
  );
}

export default page;
