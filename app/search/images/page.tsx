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
  console.log(data);

  return (
    <div className="container mx-auto grid grid-cols-2 lg:grid-cols-5 gap-4 box-border">
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
          <div key={i} className="shadow-lg h-fit whitespace-pre-wrap">
            <Image
              src={item.image.thumbnailLink}
              alt={item.title}
              width={400}
              height={250}
              className="object-cover rounded-lg"
            />
          </div>
        )
      )}
    </div>
  );
}

export default page;
