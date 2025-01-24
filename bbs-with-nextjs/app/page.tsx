
import BBSCardList from "@/app/components/BBSCardList";
import React from "react";
import { BBSdata } from "@/app/types/types";

async function getBBSALLDate() {
  const response = await fetch("http://localhost:3000/api/post", {
    cache: "no-store" ,
  });
  const bbsALLData = await response.json();
  return bbsALLData;
}

export default async function Home() {
  const bbsALLData = await getBBSALLDate();
  return (
    <main>
      <BBSCardList bbsALLData={bbsALLData}/>
    </main>
  );
}
