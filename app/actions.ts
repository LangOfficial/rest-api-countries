'use server';

import { Country } from "./types/Country";

export async function getData(): Promise<Country[]> {
  const response = await fetch('https://restcountries.com/v3.1/all');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data: Country[] = await response.json();
  
  return data;
} 