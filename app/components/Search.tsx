"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, ChangeEvent, useEffect } from "react";
import { useDebounce as useDbounce } from "use-debounce";

export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [inputValue, setValue] = useState("");
  const debouncedValue = useDbounce(inputValue, 500);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (inputValue) {
      params.set("search", inputValue);
    } else {
      params.delete("search");
    }

    router.push(`?${params.toString()}`);
  }, [debouncedValue, router]);

  return (
    <div className="px-5 mt-8 lg:mt-0 w-[30rem]">
      <label className="input shadow-md rounded-md flex items-center gap-2 py-7">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="w-4 text-dark-gray"
        />
        <input
          type="text"
          className="pl-3 grow"
          placeholder="Search for a country..."
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

