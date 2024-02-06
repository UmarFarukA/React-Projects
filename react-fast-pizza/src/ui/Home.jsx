import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="flex flex-col items-center text-xl">
      <h1 className=" text-stone-700 font-semibold flex flex-col items-center gap-1 py-8 sm:py-16">
        <span>The best pizza.</span>
        
        <span className="text-yellow-300">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
