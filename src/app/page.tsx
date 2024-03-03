import Image from "next/image";
import Germany from "./assets/germany.png";
import USA from "./assets/usa.png";
import Brazil from "./assets/brazil.png";
import Iceland from "./assets/iceland.png";
import Afghanistan from "./assets/afghanistan.png";
import Islands from "./assets/islands.png";
import Albania from "./assets/albania.png";
import Algeria from "./assets/algeria.png";

export default function Home() {
  return (
    <div className="">
      <div className="flex items-center justify-between py-10">
        <form action="">
          <input
            className="shadow-md border px-10 py-3"
            type="text"
            placeholder="Search for a country..."
          />
        </form>
        <div>
          <label className="mx-4 text-sm font-normal" htmlFor="region">
            Filter by Region:
          </label>
          <select
            className="border px-5 py-3 text-sm font-normal"
            name="region"
            id="region"
          >
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="shadow-lg w-1/5 rounded-lg">
          <Image src={Germany} alt="" width="300" />
          <h3 className="text-lg font-extrabold my-2 mx-3">Germany</h3>
          <div className="text-sm flex items-center justify-left mx-3">
            <p className="font-semibold my-1">Population:</p>
            <p className="font-light mx-2">81,770,900</p>
          </div>
          <div className="text-sm flex items-center justify-left mx-3">
            <p className="font-semibold my-1">Region:</p>
            <p className="font-light mx-2">Europe</p>
          </div>
          <div className="text-sm flex items-center justify-left mx-3">
            <p className="font-semibold my-1">Capital:</p>
            <p className="font-light mx-2">Berlin</p>
          </div>
        </div>
        <div className="shadow-lg w-1/5 rounded-lg">
          <Image src={USA} alt="" width="300" />
          <h3 className="text-lg font-extrabold my-2 mx-3 dark:text-white">
            United States of America
          </h3>
          <div className="text-sm flex items-center justify-left mx-3 dark:text-white">
            <p className="font-semibold my-1">Population:</p>
            <p className="font-light mx-2">323,947,000</p>
          </div>
          <div className="text-sm flex items-center justify-left mx-3 dark:text-white">
            <p className="font-semibold my-1">Region:</p>
            <p className="font-light mx-2">America</p>
          </div>
          <div className="text-sm flex items-center justify-left mx-3 dark:text-white">
            <p className="font-semibold my-1">Capital:</p>
            <p className="font-light mx-2">Washington</p>
          </div>
        </div>
        <div className="shadow-lg w-1/5 rounded-lg">
          <Image src={Brazil} alt="" width="300" />
          <h3 className="text-lg font-extrabold my-2 mx-3 dark:text-white">
            Brazil
          </h3>
          <div className="text-sm flex items-center justify-left mx-3 dark:text-white">
            <p className="font-semibold my-1">Population:</p>
            <p className="font-light mx-2">206,135,893</p>
          </div>
          <div className="text-sm flex items-center justify-left mx-3 dark:text-white">
            <p className="font-semibold my-1">Region:</p>
            <p className="font-light mx-2">America</p>
          </div>
          <div className="text-sm flex items-center justify-left mx-3 dark:text-white">
            <p className="font-semibold my-1">Capital:</p>
            <p className="font-light mx-2">Brasilia</p>
          </div>
        </div>
        <div className="shadow-lg w-1/5 rounded-lg">
          <Image src={Iceland} alt="" width="300" />
          <h3 className="text-lg font-extrabold my-2 mx-3 dark:text-white">
            Iceland
          </h3>
          <div className="text-sm flex items-center justify-left mx-3 dark:text-white">
            <p className="font-semibold my-1">Population:</p>
            <p className="font-light mx-2">334,300</p>
          </div>
          <div className="text-sm flex items-center justify-left mx-3 dark:text-white">
            <p className="font-semibold my-1">Region:</p>
            <p className="font-light mx-2">Europe</p>
          </div>
          <div className="text-sm flex items-center justify-left mx-3 dark:text-white">
            <p className="font-semibold my-1">Capital:</p>
            <p className="font-light mx-2">Reykjavik</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between my-10">
        <div className="shadow-lg w-1/5 rounded-lg">
          <Image src={Afghanistan} alt="" width="300" />
          <h3 className="text-lg font-extrabold my-2 mx-3 dark:text-white">
            Afghanistan
          </h3>
          <div className="text-sm flex items-center justify-left mx-3 dark:text-white">
            <p className="font-semibold my-1">Population:</p>
            <p className="font-light mx-2">27,657,145</p>
          </div>
          <div className="text-sm flex items-center justify-left mx-3 dark:text-white">
            <p className="font-semibold my-1">Region:</p>
            <p className="font-light mx-2">Asia</p>
          </div>
          <div className="text-sm flex items-center justify-left mx-3 dark:text-white">
            <p className="font-semibold my-1">Capital:</p>
            <p className="font-light mx-2">Kabul</p>
          </div>
        </div>
        <div className="shadow-lg w-1/5 rounded-lg">
          <Image src={Islands} alt="" width="300" />
          <h3 className="text-lg font-extrabold my-2 mx-3 dark:text-white">
            Aland Islands
          </h3>
          <div className="text-sm flex items-center justify-left mx-3 dark:text-white">
            <p className="font-semibold my-1">Population:</p>
            <p className="font-light mx-2">28,875</p>
          </div>
          <div className="text-sm flex items-center justify-left mx-3 dark:text-white">
            <p className="font-semibold my-1">Region:</p>
            <p className="font-light mx-2">Europe</p>
          </div>
          <div className="text-sm flex items-center justify-left mx-3 dark:text-white">
            <p className="font-semibold my-1">Capital:</p>
            <p className="font-light mx-2">Mariehamn</p>
          </div>
        </div>
        <div className="shadow-lg w-1/5 rounded-lg">
          <Image src={Albania} alt="" width="300" />
          <h3 className="text-lg font-extrabold my-2 mx-3 dark:text-white">
            Albania
          </h3>
          <div className="text-sm flex items-center justify-left mx-3 dark:text-white">
            <p className="font-semibold my-1">Population:</p>
            <p className="font-light mx-2">2,886,026</p>
          </div>
          <div className="text-sm flex items-center justify-left mx-3 dark:text-white">
            <p className="font-semibold my-1">Region:</p>
            <p className="font-light mx-2">Europe</p>
          </div>
          <div className="text-sm flex items-center justify-left mx-3 dark:text-white">
            <p className="font-semibold my-1">Capital:</p>
            <p className="font-light mx-2">Tirana</p>
          </div>
        </div>
        <div className="shadow-lg w-1/5 rounded-lg">
          <Image src={Algeria} alt="" width="300" />
          <h3 className="text-lg font-extrabold my-2 mx-3 dark:text-white">
            Algeria
          </h3>
          <div className="text-sm flex items-center justify-left mx-3 dark:text-white">
            <p className="font-semibold my-1">Population:</p>
            <p className="font-light mx-2">40,400,000</p>
          </div>
          <div className="text-sm flex items-center justify-left mx-3 dark:text-white">
            <p className="font-semibold my-1">Region:</p>
            <p className="font-light mx-2">Africa</p>
          </div>
          <div className="text-sm flex items-center justify-left mx-3 dark:text-white">
            <p className="font-semibold my-1">Capital:</p>
            <p className="font-light mx-2">Algiers</p>
          </div>
        </div>
      </div>
    </div>
  );
}
