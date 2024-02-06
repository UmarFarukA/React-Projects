import { useState } from "react";
import Button from "../../ui/Button";

function CreateUser() {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="pb-8 flex flex-col items-center">
      <p className="mb-2 text-stone-600 text-xl">
        👋 Welcome! Please start by telling us your name:
      </p>

      <div className="w-full sm:w-7/12 mx-auto mb-4">
        <input
          type="text"
          placeholder="Your full name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input"
        />
      </div>

      {username !== "" && (
        <Button>Start ordering</Button>
      )}
      
    </form>
  );
}

export default CreateUser;
