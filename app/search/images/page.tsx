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

  return (
    <div className="container mx-auto grid gap-4">
      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-1 gap-4">
        {data.items?.map(
          (
            item: {
              image: {
                thumbnailLink: string;
                height: number;
                width: number;
              };
              title: string;
            },
            i: React.Key | null | undefined
          ) => (
            <div key={i}>
              <Image
                className="h-full max-w-full rounded-lg object-cover"
                src={item.image.thumbnailLink}
                width={item.image.width}
                height={item.image.height}
                alt=""
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default page;
