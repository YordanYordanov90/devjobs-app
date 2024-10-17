
import { MagnifyingGlassIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { Button } from "./ui/button";
const SearchForm = () => {
  return (
    <form className="flex items-center bg-white text-black shadow-md rounded-lg p-4 h-20 w-[1110px] mx-auto space-x-4">
        {/* Search Input */}
        <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg flex-1">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none ml-2 w-full"
          />
        </div>

        {/* Location Select */}
        <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg">
          <MapPinIcon className="h-5 w-5 text-gray-500" />
          <select className="bg-transparent outline-none ml-2">
            <option value="">Filter by location</option>
            <option value="new-york">New York</option>
            <option value="san-francisco">San Francisco</option>
            <option value="london">London</option>
          </select>
        </div>

        {/* Full Time Checkbox */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="full-time"
            className="form-checkbox text-blue-600 h-5 w-5"
          />
          <label htmlFor="full-time" className="ml-2 text-gray-700">
            Full Time Only
          </label>
        </div>

        {/* Search Button */}
        <Button variant={"default"} type="submit" className="">
          Search
        </Button>
      </form>
  )
}

export default SearchForm