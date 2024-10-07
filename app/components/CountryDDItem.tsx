"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

interface Props {
  regionName: string;
  regionQuery: string;
}

export default function CountryDDItem({ regionName, regionQuery }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleClick = () => {
    const params = new URLSearchParams(searchParams);
    params.set("region", regionQuery);
    router.push(`?${params.toString()}`);
  };

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <li onClick={handleClick} className="font-semibold">
        <p>{regionName}</p>
      </li>
    </Suspense>
  );
}
