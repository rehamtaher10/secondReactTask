import React, { useEffect, useState } from "react";
import { posts } from "../data/data";

export default function Posts({ searchVal, selectedType }) {
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [activePostId, setActivePostId] = useState(null); // Track active post ID

  useEffect(() => {
    let filtered = posts;

    // Apply search filter
    if (searchVal.length > 0) {
      filtered = filtered.filter((ele) =>
        ele.title.toLowerCase().includes(searchVal.toLowerCase())
      );
    }

    // Apply type filter
    if (selectedType) {
      filtered = filtered.filter((ele) => ele.type === selectedType);
    }

    setFilteredPosts(filtered);
  }, [searchVal, selectedType]);

  return (
    <div className="posts_container">
      {filteredPosts.map((ele) => (
        <div
          key={ele.id}
          onClick={() => setActivePostId(ele.id)} // Set active post ID on click
          className={`post ${activePostId === ele.id ? "isActive" : "inActive"}`}
        >
          <h2>{ele.title}</h2>
          <span
            className={`type ${
              ele.type === "Blog"
                ? "blogBadge"
                : ele.type === "Article"
                ? "articalBadge"
                : "postBadge"
            }`}
          >
            {ele.type}
          </span>
        </div>
      ))}
    </div>
  );
}

