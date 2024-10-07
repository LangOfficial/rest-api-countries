"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function BackBtn() {
  return (
    <Link href="/">
      <button className="white-bg-shadow-btn mb-5">
        <FontAwesomeIcon icon={faArrowLeft} className="text-gray-800 mr-2" />
        <span>Back</span>
      </button>
    </Link>
  );
}
