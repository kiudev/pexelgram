import { FormEvent } from "react";
import { Search } from "lucide-react";
import { FormProps } from "../types";
import { useSearchContext } from "../context";

export default function Form({ onSearch }: FormProps) {
  const { searchValue, handleSearchChange, photosRef } = useSearchContext();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchValue) return;

    if (searchValue) {
      if (photosRef?.current) {
        photosRef.current.className += " w-full min-h-screen";
      }

      onSearch?.(searchValue);

      if (photosRef?.current) {
        photosRef.current.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <h1 className="text-mixed-500 text-6xl">
        Search for <span className="brightness-150">beautiful images.</span>
      </h1>

      <div className="relative m-auto mt-5 [animation-timeline:scroll()] animate-resize">
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent w-full px-10 py-3 text-2xl text-mixed-600 placeholder:text-mixed-600 border-2 border-mixed-600 focus:outline-none"
          value={searchValue}
          onChange={handleSearchChange}
        />

        <button className="bg-transparent text-mixed-600 text-xl absolute right-4 top-2">
          <Search color="white" size={40} />
        </button>
      </div>
    </form>
  );
}
