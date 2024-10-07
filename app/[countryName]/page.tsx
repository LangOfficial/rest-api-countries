import { getData } from "../actions";
import { Country } from "../types/Country";
import BackBtn from "./components/BackBtn";
import BorderCountryBtn from "./components/BorderCountryBtn";
import "./styles.css";
interface CountryDetailPageProps {
  params: {
    countryName: string;
  };
}

export function generateMetadata({
  params: { countryName },
}: CountryDetailPageProps) {
  return {
    title: `${countryName.replaceAll("%20", " ")} - Country Detail`,
    description: `Check out ${countryName}'s information, borders, and population`,
  };
}

export async function generateStaticParams() {
  const res = await fetch("https://restcountries.com/v3.1/all?fields=name");
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const countries = await res.json();

  return countries.map((country: Country) => ({
    params: { country: country.name.common }
  }));
}

export default async function CountryDetailPage({
  params: { countryName },
}: CountryDetailPageProps) {
  countryName = countryName.replaceAll("%20", " ");
  const countries = await getData();
  const country = countries.find(
    (country: Country) => country.name.common === countryName
  );
  // throw new Error("c")
  if (!country) {
    // 404?
    return (
      <div className="p-5">
        <BackBtn />
        <div> Country not found</div>
      </div>
    );
  }
  const borderCountries = countries
    .filter((c: Country) => {
      return country.borders?.includes(c.cca3);
    })
    .map((c: Country) => c.name.common);

  return (
    <main className="">
      {country && (
        <div className="mb-10 lg:mb-0">
          <div className="grid lg:grid-cols-2 lg:justify-items-center px-5 lg:mt-4 gap-x-6 ">
            <div className="my-5 lg:mb-0">
              <BackBtn />
              <img
                src={country.flags.png}
                alt={`${countryName}'s detail page`}
                className="shadow-md w-[40rem] min-h-[25rem] mt-10"
              />
            </div>
            <div className="lg:self-end">
              <h1 className="text-2xl font-bold mb-6 lg:text-3xl">
                {countryName}
              </h1>
              <div className="lg:flex lg:gap-x-10">
                <div className="space-y-4 mb-10">
                  <div>
                    <span className="font-semibold">Native Name: </span>
                    <span>
                      {country.name.nativeName
                        ? Object.values(country.name.nativeName)[0].common
                        : country.name.common}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold">Population: </span>
                    <span>{country.population.toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="font-semibold">Region: </span>
                    <span>{country.region ?? "N/A"}</span>
                  </div>
                  <div>
                    <span className="font-semibold">Sub Region: </span>
                    <span>{country.subregion ?? "N/A"}</span>
                  </div>
                  <div>
                    <span className="font-semibold">Capital: </span>
                    <span>{country.capital ?? "N/A"}</span>
                  </div>
                </div>
                <div className="space-y-4 mb-10">
                  <div>
                    <span className="font-semibold">Top Level Domain: </span>
                    <span>{country.tld}</span>
                  </div>
                  <div>
                    <span className="font-semibold">Currencies: </span>
                    <span className="space-x-1">
                      {country.currencies
                        ? Object.entries(country.currencies).map(
                            ([key, currency]) => (
                              <span key={key}>
                                {currency.name} ({currency.symbol})
                              </span>
                            )
                          )
                        : "N/A"}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold">Languages: </span>
                    <span>
                      {country.languages
                        ? Object.values(country.languages).sort().join(", ")
                        : "N/A"}
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-lg font-bold mb-6"> Border Countries:</p>
                <div className="flex flex-wrap gap-3">
                  {borderCountries.length > 0 ? (
                    borderCountries
                      .sort()
                      .map((country) => (
                        <BorderCountryBtn
                          key={`border country btn ${country}`}
                          countryName={country}
                        />
                      ))
                  ) : (
                    <p className="font-semibold">N/A</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
