"use client";
import Link from "next/link";
import React from "react";

interface Props {
  countryName: string;
}

export default function BorderCountryBtn({ countryName }: Props) {
  return (
    <Link href={`/${countryName}`}>
      <button className="white-bg-shadow-btn">{countryName}</button>
    </Link>
  );
}
