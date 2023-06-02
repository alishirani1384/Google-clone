import Image from "next/image";
import React from "react";

async function page({
  searchParams,
}: {
  searchParams: { q: string; start: string };
}) {
  const url = `https://www.googleapis.com/customsearch/v1?fields=searchInformation,queries,items&key=${process.env.GOOGLE_KEY}&cx=${process.env.GOOGLE_CX}&q=${searchParams.q}&start=${searchParams.start}&searchType=image`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.items);
  
  return (
    <div className="container py-4 mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {data.items?.map(
          (
            item: {
              link: string;
              image: {
                height: number;
                width: number;
              };
              title: string;
            },
            i: React.Key | null | undefined
          ) => (
            <div key={i}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="h-auto max-w-full rounded-lg"
                src={item.link}
                alt="image"
                loading="lazy"
              />
            </div>
          )
        )}
    </div>
  );
}

export default page;
