'use client'
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from "react";

import { RevealWrapper } from 'next-reveal';

export default function Service({ data }) {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto pt-20 pb-28">
        <RevealWrapper>
          <h1 className="text-5xl text-theme-blue text-center font-bold">
            Our Service
          </h1>

          <p className="font-light text-lg text-gray-400 text-center mb-12">
            We are ready to scale up your business with our great service.
          </p>
        </RevealWrapper>

        <div className="grid grid-rows-3 px-10 gap-8 sm:grid-cols-3 sm:grid-rows-1 sm:gap-6 xl:gap-16">
          {data.map((item, index) => (
            <RevealWrapper key={index}>
              <div>
                <div className="bg-white group rounded-2xl shadow-2xl border border-light-theme-purple transform transition duration-500 hover:scale-105">
                  <img
                    src={item.imageUrl}
                    alt="Service"
                    className="w-full rounded-t-2xl"
                    fetchPriority="high"
                  />
                  <h2 className="text-theme-blue text-center text-xl py-7 rounded-b-2xl">
                    {item.title}
                  </h2>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </div>
  );
}
