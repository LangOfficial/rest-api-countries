import { CountryCardProps } from "../types/Country";
export default function CountryCard({
  img,
  country,
  population,
  region,
  capital,
}: CountryCardProps) {
  return (
    <div>
      <div className="card bg-base-100 shadow-md rounded-md overflow-hidden w-full">
        <img src={img} alt="Shoes" className="max-h-56 min-h-56 shadow-md w-80" />
        <article className="p-6 pb-10">
          <h2 className="font-bold mb-3 card-title">{country}</h2>
          <div className="space-y-1">
            <div>
              <span className="font-semibold">Population: </span>
              <span>{population.toLocaleString()}</span>
            </div>
            <div>
              <span className="font-semibold">Region: </span>
              <span>{region}</span>
            </div>
            <div>
              <span className="font-semibold">Capital: </span>
              <span>{capital}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
