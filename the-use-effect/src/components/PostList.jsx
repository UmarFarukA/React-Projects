/* eslint-disable react/prop-types */
import PostItem from "./PostItem";

function PostList({ users, searchTerm }) {
  let records;
  if (searchTerm !== "") {
    records = users.filter((user) => user.name.includes(searchTerm));
  } else {
    records = users;
  }

  return (
    <ul>
      {records.map((record) => (
        <PostItem user={record} key={record.id} />
      ))}
    </ul>
  );
}

export default PostList;
