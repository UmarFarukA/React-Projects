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
    console.log("searching for: ", username);

    const users = await getUsers();

    if (!users) throw new Error("No users available");

    const user = users.find(
      (user) => user.username.toLowerCase() === username.toLowerCase()
    );

    console.log("Found user:", user); // Debug log
    return user || null;
  } catch (error) {
    console.log("Error");
    return null;
  }
}
