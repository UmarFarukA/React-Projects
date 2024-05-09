/* eslint-disable react/prop-types */
import UserItem from "./UserItem";

function UserList({ users, searchTerm }) {
  let records;
  if (searchTerm !== "") {
    records = users.filter((user) => user.name.includes(searchTerm));
  } else {
    records = users;
  }

  return (
    <ul>
      {records.map((record) => (
        <UserItem user={record} key={record.id} />
      ))}
    </ul>
  );
}

export default UserList;
