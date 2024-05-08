/* eslint-disable react/prop-types */
import PostItem from "./PostItem";

function PostList({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <PostItem user={user} key={user.id} />
      ))}
    </ul>
  );
}

export default PostList;
