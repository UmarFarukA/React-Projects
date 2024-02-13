import { useState } from "react";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateName } from "./userSlice";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const activeUser = useSelector((store) => store.user.username);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateName(username));
    navigate("/menu");
  }

  return (
    <form onSubmit={handleSubmit} className="pb-8 flex flex-col items-center">
      <p className="mb-2 text-stone-600 text-xl">
        👋 Welcome! Please start by telling us your name:
      </p>

      {activeUser === "" ? (
        <div className="w-full sm:w-7/12 mx-auto mb-4 mt-4">
          <input
            type="text"
            placeholder="Your full name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input focus:outline-none focus:ring focus:ring-yellow-200"
          />
        </div>
      ) : (
        <Button type="primary" to="/menu">
          Go to Menu
        </Button>
      )}

      {username !== "" && <Button type="primary">Start ordering</Button>}
    </form>
  );
}

export default CreateUser;
