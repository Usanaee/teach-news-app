import React from "react";
import { useGlobalContext } from '@/store/StoreContext';
function Searchbar() {
const {query,searchNews} = useGlobalContext()

  return (
    <div className="max-sm:w-full bg-transparent px-4 py-1 rounded-full border border-slate-500 flex justify-between items-center mr-4">
      <form>
        <input
          type="text"
          placeholder="Get News"
          className="w-full px-2 py-2  text-black rounded bg-transparent outline-none "
          value={query}
          onChange={(e) => searchNews(e.target.value)}
        />
      </form>
      <button className="text-slate-600 hover:text-slate-900">Search</button>
    </div>
  );
}

export default Searchbar;
