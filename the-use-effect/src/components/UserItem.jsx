/* eslint-disable react/prop-types */
function UserItem({ user }) {
  //   const { name, username } = user;
  return (
    <li className="p-2 bg-slate-200 rounded-md mb-3">
      {user.name} - {user.username}
    </li>
  );
}

export default UserItem;
