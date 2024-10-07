import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import CountryDDItem from "./CountryDDItem";
import DeleteFilter from "./DeleteFilter";

export default function CountryFilter() {
  return (
    <div className="px-5 flex items-center gap-x-2">
      <div className="dropdown dropdown-bottom w-60">
        <div tabIndex={0} role="button" className="bg-white shadow-md flex items-center cursor-pointer px-6 py-4 m-1 justify-between rounded-md">
          <p className="font-semibold"> Filter by Region</p>
          <FontAwesomeIcon icon={faAngleDown} className="text-dark-blue w-3" />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <CountryDDItem regionName="Africa" regionQuery="Africa" />
          <CountryDDItem regionName="America" regionQuery="Americas" />
          <CountryDDItem regionName="Asia" regionQuery="Asia" />
          <CountryDDItem regionName="Europe" regionQuery="Europe" />
          <CountryDDItem regionName="Oceania" regionQuery="Oceania" />
        </ul>
      </div>
      <DeleteFilter />
    </div>
  );
}
