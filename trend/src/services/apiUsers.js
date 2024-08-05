const URL = "http://localhost:8000/users";

export async function getUsers() {
  try {
    const res = await fetch(URL);

    if (!res.ok) throw new Error("Error in fetching data");
    const data = await res.json();

    return data;
  } catch (error) {
    console.log("Something went wrong", error.message);
    return [];
  }
}

export async function getUser(username) {
  try {
    const users = await getUsers();

    if (!users) throw new Error("No users available");

    const user = users.find(
      (user) => user.username.toLowerCase() === username.toLowerCase()
    );

    // console.log(user);

    return user || null;
  } catch (error) {
    console.log("Error");
    return null;
  }
}

export async function getUserById(id) {
  try {
    const res = await fetch(`${URL}/${id}`);

    const user = await res.json();

    return user;
  } catch (error) {
    throw new Error("Something went wrong");
  }
}

export async function getSuggestedFriends() {
  try {
    const activeUser = JSON.parse(localStorage.getItem("user"));

    const followers = activeUser.followers;

    const following = activeUser.following;

    const ids = followers.filter((follower) => !following.includes(follower));

    let users_to_follow = [];

    for (let id of ids) {
      const user = await getUserById(id);
      users_to_follow.push(user);
      // console.log(users_to_follow);
    }
    // console.log(users_to_follow);
    return users_to_follow;
  } catch (error) {
    throw new Error("Something went wrong");
  }
}
