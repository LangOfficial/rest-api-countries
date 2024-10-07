export interface CountryCardProps {
  img: string,
  country: string,
  population: number,
  region: string,
  capital: string
}

export interface Country {
  name: {
    common: string,
    nativeName: {
      [key: string]: {
        official: string,
        common: string
      }
    }
  },
  population: number,
  region: string,
  tld: string[],
  currencies: {[key: string]: {
    name: string,
    symbol: string,
  }}
  languages: {[key: string]: string}
  subregion: string;
  capital: string[],
  flags: {
    png: string
  },
  borders: string[],
  cca3: string
}