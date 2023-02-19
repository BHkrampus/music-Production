import "./App.css";
import React, { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import "tailwindcss/tailwind.css";
import Artist from "./Artist";
import Home from "./Home";
import Music from "./Music";
import ConnectWallet from "./ConnectWallet";
import BudgetMusic from "./BudgetMusic";
import { ethers } from "ethers";
import "./ContractAbi";
import ContractAbi from "./ContractAbi";
function App() {
  const [walletAddress, setWalletAddress] = useState("");

  const connectWalet = async () => {
    if (typeof window.ethereum === "undefined") {
      alert("Please install MetaMask to use this dApp");
      return;
    }

    try {
      await window.ethereum.enable();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      const contract = new ethers.Contract(
        "0x14D6B6D8211776f0082d14E09a703b81bef30F6D",
        ContractAbi.abi,
        signer
      );
      const artistAdd = await contract.artistAdd;
      let artistlist = artistAdd.length;
      console.log({ artistlist });
      console.log("this is just belwo addartist");

      setWalletAddress(address);
    } catch (err) {
      console.error("Error connecting to MetaMask wallet:", err);
    }
  };

  return (
    <>
      <div className="text-3xl p-9 py-14 m-8  rounded-3xl shadow-2xl bg-gradient-to-t from-rose-500 to-fuchsia-500">
        {walletAddress ? (
          <>
            {/* <p>Connected to MetaMask wallet: {walletAddress}</p> */}
            {/* <div className="m-0 p-6 bg-gradient-to-t from-rose-500 to-fuchsia-500"> */}

            <nav>
              <ul className="flex justify-between flex-row">
                <li className="text-5xl">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="text-5xl">
                  <NavLink to="/Artist">Artist</NavLink>
                </li>
                <li className="text-5xl">
                  <NavLink to="/Music">Music</NavLink>
                </li>
                <li className="text-5xl">
                  <NavLink to="/ConnectWallet">Connect Wallet</NavLink>
                </li>
              </ul>
            </nav>
            {/* </div> */}
          </>
        ) : (
          <button
            className="text-5xl w-1/2 h-4/5 p-9 py-14 m-8  rounded-3xl shadow-2xl bg-gradient-to-t from-rose-500 to-fuchsia-500 "
            onClick={() => {
              connectWalet();
            }}
          >
            Connect to MetaMask
          </button>
        )}
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Artist" element={<Artist />}></Route>
        <Route path="/Music" element={<Music />}></Route>
        <Route path="/ConnectWallet" element={<ConnectWallet />}></Route>
        <Route path="/BudgetMusic" element={<BudgetMusic />}></Route>
      </Routes>
    </>
  );
}
export default App;
