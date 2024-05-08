import { useEffect, useState } from "react";
import PostList from "./PostList";

function Post() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  useEffect(function () {
    const getPost = async () => {
      await fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => setData(json));
    };

    getPost();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <div className="flex items-center gap-4 mb-6">
        <input
          className="px-2 py-3 rounded-md text-stone-700 bg-gray-300"
          type="text"
          value={search}
          placeholder="Search User"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="bg-green-600 text-slate-50 rounded-md px-3 py-2">
          Search
        </button>
      </div>
      <div>
        <PostList users={data} />
      </div>
    </div>
  );
}

export default Post;
