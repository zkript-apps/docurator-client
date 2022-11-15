import React from "react";

export const GlobalFilter = ({ filter, setFilter }) => {

    return (
        <div className="flex w-full mx-auto mt-5 text-gray-400 focus-within:text-gray-600 drop-shadow max-lg:px-4 ">
            <input
                id="search-field"
                className="h-full py-2 pr-3 text-gray-900 placeholder-gray-500 border-gray-300 rounded-lg w-72 border-1 focus:ring-2 focus:ring-indigo-500 focus:placeholder-gray-400 sm:text-sm"
                placeholder="Search"
                type="search"
                name="search"
                value={filter}
                onChange={(e) => {
                    setFilter(e.target.value);
                }}
            />
        </div>
    );
};