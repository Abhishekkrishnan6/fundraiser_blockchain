import React, { useState } from 'react'
import styled from 'styled-components';
import { ethers } from 'ethers';
// const networks = {
//     sepolia: {
//         chainId: `0x${Number(11155111).toString(16)}`,
//         chainName: "sepolia test network",
//         nativeCurrency: {
//             name: "SepoliaETH",
//             Symbol: "SepoliaETH",
//             decimals: 18
//         },
//         rpcUrls: ["https://sepolia.infura.io/v3/"],
//         blockExplorerUrls: ["https://sepolia.etherscan.io"]
//     },
// };
const networks = {
    polygon: {
        chainId: `0x${Number(80001).toString(16)}`,
        chainName: "polygon Testnet",
        nativeCurrency: {
            name: "MATIC",
            Symbol: "MATIC",
            decimals: 18
        },
        rpcUrls: ["https://rpc-mumbai.maticvigil.com/"],
        blockExplorerUrls: ["https://mumbai.polygonscan.com/"]
    },
};
const Wallet = () => {
    const[address,setaddress] = useState('');
    const connectwallet = async () => {
        await window.ethereum.request({method: "eth_requestAccounts"});
        const provider = new ethers.providers.Web3Provider(window.ethereum,"any");
        if(provider.network !== "matic"){
            await window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [
                    {
                        ...networks["polygon"]
                    }
                ]
            })
            const account = provider.getSigner();
            const Address = await account.getAddress();
            setaddress(Address);
        }
       
    
    }

  return (
    <div onClick={connectwallet}>Wallet {address}</div>
  )
}

export default Wallet