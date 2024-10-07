"use client";

import { useSearchParams } from "next/navigation";
import CountryCard from "../components/CountryCard";
import { Country } from "../types/Country";
import { useEffect, useState } from "react";
import Link from "next/link";

interface CountryCardsProps {
  countriesData: Country[];
}

export default function CountryCards({ countriesData }: CountryCardsProps) {
  const [countries] = useState<Country[]>(countriesData);
  const [filteredCountries, setFilteredCountries] =
    useState<Country[]>(countriesData);
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search");
  const regionQuery = searchParams.get("region");

  useEffect(() => {
    let filteredC = countries;

    if (searchQuery) {
      filteredC = filteredC.filter((country: Country) => {
        return country.name.common
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
      });
    }
    if (regionQuery) {
      filteredC = filteredC.filter((country: Country) => {
        return country.region.toLowerCase() === regionQuery?.toLowerCase();
      });
    }
    setFilteredCountries(filteredC);
  }, [searchQuery, regionQuery, countries]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     let data = await getData();
  //     data = data.sort((c1: Country, c2: Country) =>
  //       c1.name.common.localeCompare(c2.name.common)
  //     );
  //     setCountries(data);
  //     setFilteredCountries(data);
  //     setLoading(false);
  //   };

  //   // fetchData();
  // }, []);

  // if (loading) {
  //   return (
  //     <div className="grid place-items-center sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-12 xl:grid-cols-4 p-6">
  //       {Array.from({ length: 8 }).map((_, index) => (
  //         <LoadingCard key={"Loading card " + index} />
  //       ))}
  //     </div>
  //   );
  // }

  return (
    <div className="grid place-items-center sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-12 xl:grid-cols-4 p-6">
      {filteredCountries.map((country: Country) => (
        <Link
          href={`/${country.name.common}`}
          key={country.name.common + " card"}
        >
          <CountryCard
            img={country.flags.png}
            country={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital?.[0] ?? "N/A"}
          />
        </Link>
      ))}
    </div>
  );
}
