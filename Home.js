import React from "react";
// import {ethers} from ethers;

// const provider = new ethers.providers.Web3Provider(window.ethereum);

function Home() {
  return (
    <>
      <div className="w-4/6 h-48 mx-auto mt-9 rounded-3xl shadow-xl content-center bg-gradient-to-t from-rose-500 to-fuchsia-500">
        <h1 className="text-7xl flex p-11 content-center place-content-center">
          Music Industry
        </h1>
      </div>

      <div className="w-1/2 h-54 flex m-auto ">
        <div className="text-5xl w-1/2 h-4/5 p-9 py-14 m-8  rounded-3xl shadow-2xl bg-gradient-to-t from-rose-500 to-fuchsia-500 ">
          Artist
        </div>
        <div className="text-5xl w-1/2 h-full p-8 m-8  rounded-3xl shadow-2xl bg-gradient-to-t from-rose-500 to-fuchsia-500 ">
          Music Producer
        </div>
      </div>
    </>
  );
}
export default Home;
