import React, { useState } from "react";
import { ethers } from "ethers";

function ConnectWallet() {
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

      setWalletAddress(address);
    } catch (err) {
      console.error("Error connecting to MetaMask wallet:", err);
    }
  };

  return (
    <div className="text-3xl p-9 py-14 m-8  rounded-3xl shadow-2xl bg-gradient-to-t from-rose-500 to-fuchsia-500">
      {walletAddress ? (
        <p>Connected to MetaMask wallet: {walletAddress}</p>
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
  );
}

export default ConnectWallet;
