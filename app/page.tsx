import { Metadata } from "next";
import CountryCards from "./components/CountryCards";
import CountryFilter from "./components/CountryFilter";
import Search from "./components/Search";
import { getData } from "./actions";
import { Country } from "./types/Country";
import { Suspense } from "react";
import LoadingCard from "./components/LoadingCard";

export const metadata: Metadata = {
  title: "Where in the world?",
  description: "Countries with their population, region and capital",
};

export default async function Home() {
  let countries = await getData();
  countries = countries.sort((c1: Country, c2: Country) =>
    c1.name.common.localeCompare(c2.name.common)
  );
  return (
    <main>
      <div className="lg:flex items-center mt-10 justify-between mb-6 space-y-6 lg:space-y-0">
        <Suspense fallback={<p>Loading...</p>}>
          <Search />
        </Suspense>
        <Suspense fallback={<p>Loading...</p>}>
          <CountryFilter />
        </Suspense>
      </div>
      <Suspense
        fallback={
          <div className="grid place-items-center sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-12 xl:grid-cols-4 p-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <LoadingCard key={"Loading card " + index} />
            ))}
          </div>
        }
      >
        <CountryCards countriesData={countries} />
      </Suspense>
    </main>
  );
}
