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

  return <div>page</div>;
}

export default page;
