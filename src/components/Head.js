import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions,setSuggestions] = useState([]);
  const [showSuggestions,setShowSuggestions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 200);
    return () => {
      clearTimeout(timer);
    };
  },[searchQuery]);

  const getSearchSuggestions = async () => {
    console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1])
    // console.log(json)
  };
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col shadow-lg p-5 m-2">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer "
          alt="hamberger"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
        />
        <a href="/">
          <img
            className="h-8 mx-2"
            alt="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzs7d1nlxerknIa7Ajtp1dwrRknLGo-4oZ7A&usqp=CAU"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
      <div className="w-full absolute">

        <input
          className=" w-1/2  border border-gray-400 px-5 py-2 rounded-l-full"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={()=>setShowSuggestions(true)}
          onBlur={()=>setShowSuggestions(false)}
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
          🔍
        </button>
      </div>
      {showSuggestions && <div className="absolute mt-12 bg-white bg-opacity-80  w-[28.3rem] border border-gray-200 rounded-2xl">
      <ul>
        {suggestions.map((s)=><li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">🔍{s}</li>
      )}
      </ul>

      </div>}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user-logo"
          src="data:image/png;base64,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"
        />
      </div>
    </div>
  );
};

export default Head;
