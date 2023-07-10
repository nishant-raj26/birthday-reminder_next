"use client";
import React, { useState } from "react";
import myData from "../data";
import Image from "next/image";
const page = () => {
  const [people, setPeople] = useState(myData);
  return (
    <div className="bg-pink-500 h-screen flex justify-center items-center">
      <div className="bg-white h-auto w-96 rounded-sm ">
        <div className="mt-10 text-lg text-black font-semibold ml-10">
          {people.length} birthdays today
        </div>
        <div className="mt-6 ml-10 text-black font-semibold text-3xl">
          {people.map((person) => {
            const { id, name, age, image } = person;
            return (
              <article key={id} className="grid-cols-1 divide-y flex ">
                <Image
                width={500}
                height={500}
                quality={100}
                  src={image}
                  alt={name}
                  className="w-20 h-20 bg-cover rounded-full"
                />
                <div>
                  <h1 className="text-xl">{name}</h1>
                  <p className="text-sm">{age} Years</p>
                </div>
              </article>
            );
          })}
        </div>
        <div className=" relative border m-10 bg-pink-500 text-white flex justify-center text-xl p-3 rounded-xl cursor-pointer">
          <button className="" onClick={() => setPeople([])}>
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
