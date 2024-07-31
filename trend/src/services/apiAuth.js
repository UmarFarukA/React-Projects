import { getUser } from "./apiUsers";

export async function Login({ username, password }) {
  try {
    const user = await getUser(username);

    if (!user) {
      throw new Error("Invalid username");
    }

    if (user.password === password) {
      user.isAuthenticated = true;
      localStorage.setItem("user", user);
      return user;
    } else {
      throw new Error("Invalid username or password");
    }
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function getCurrentUser() {
  try {
    const user = localStorage.getItem("user") || null;

    if (user?.isAuthenticated) {
      return user;
    } else {
      throw new Error("Error");
    }
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}
