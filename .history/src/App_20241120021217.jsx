import React, { useEffect, useState } from "react";
import Posts from "./components/Posts";
import { posts } from "./data/data";

export default function App() {
  const [searchVal, setSearchVal] = useState("");
  const [selectedType, setSelectedType] = useState("");

  // Get unique post types
  const uniquePosts = posts.reduce((acc, curr) => {
    const existing = acc.find((post) => post.type === curr.type);
    return existing ? acc : [...acc, curr];
  }, []);

  return (
    <>
      <input
        type="text"
        className="search"
        placeholder="Search.."
        onChange={(e) => setSearchVal(e.target.value)}
      />
      <div className="tabs">
        <span
          onClick={() => setSelectedType("")} // Clear filter when clicking "All"
          style={{ fontWeight: selectedType === "" ? "bold" : "normal" }}
        >
          All Types خب حخسفس
        </span>

        {/* Render a tab for each unique post type */}
        {uniquePosts.map((ele) => (
          <span
            key={ele.type}
            onClick={() => setSelectedType(ele.type)} // Set selected type on click
            style={{
              fontWeight: selectedType === ele.type ? "bold" : "normal",
            }}
          >
            {ele.type}
          </span>
        ))}
      </div>
      {/* Pass selectedType to Posts component */}
      <Posts searchVal={searchVal} selectedType={selectedType} />
    </>
  );
}
