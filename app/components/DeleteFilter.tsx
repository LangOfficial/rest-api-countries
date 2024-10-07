"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
export default function DeleteFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [hidden, setHidden] = useState(true);

  const handleDeleteFilter = () => {
    const params = new URLSearchParams(searchParams);
    const regionParam = params.get("region");
    if (regionParam) {
      params.delete("region");
      router.push(`?${params.toString()}`);
    }
  };

  useEffect(() => {
    const regionParam = searchParams.get("region");
    if (regionParam) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  }, [searchParams]);
  return (
    <div>
      <FontAwesomeIcon
        icon={faTrashCan}
        onClick={handleDeleteFilter}
        className={`hover:text-red-500 cursor-pointer text-dark-gray ${hidden && 'hidden'}`}
      />
    </div>
  );
}
