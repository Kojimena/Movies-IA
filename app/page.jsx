"use client";
import React, { useState } from "react";
import Image from "next/image";
import FormPerson from "@/components/FormPerson/FormPerson";
import FormMovie from "@/components/FormMovie/FormMovie";

export default function Home() {
  const [option, setOption] = useState(1);

  const handleOption = (value) => {
    console.log(value);
    setOption(value);
  };

  return (
    <main className="h-screen flex flex-col items-center justify-start p-24 gap-20">
      <h1 className="text-4xl font-bold text-center font-montserrat text-yellow">
        Movies4Everyone
      </h1>
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col items-center justify-start gap-4 w-1/2 h-96">
        <h2 className="text-2xl font-bold font-montserrat text-white">
          Choose an option
        </h2>
        <div className="flex flex-col items-center justify-center gap-4 pt-10">
          <button className="btn btn-neutral w-60" onClick={() => handleOption(1)}>Get a recommendation</button>
          <button className="btn btn-neutral w-60" onClick={() => handleOption(2)}>Add a movie rating</button>
        </div>
        </div>
        <div className="flex items-center justify-center w-1/2 h-96">
          {option === 1 ? (
            <FormPerson />
          ) : (
            <FormMovie />
          )}
        </div>
      </div>
    </main>
  );
}
