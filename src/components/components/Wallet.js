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
    const[balance,setbalance] = useState('');
    const connectwallet = async () => {
        await window.ethereum.request({method: "eth_requestAccounts"});
        const provider = new ethers.providers.Web3Provider(window.ethereum,"any");
        // if(provider.network !== "matic"){
        //     await window.ethereum.request({
        //         method: "wallet_addEthereumChain",
        //         params: [
        //             {
        //                 ...networks["polygon"]
        //             }
        //         ]
        //     })
        //     const account = provider.getSigner();
        //     const Address = await account.getAddress();
        //     setaddress(Address);
        // }
        const account = provider.getSigner();
            const Address = await account.getAddress();
            setaddress(Address);
            const Balance = ethers.utils.formatEther(await account.getBalance());
            setbalance(Balance);
       
    
    }

  return (
    <ConnectWalletWrapper onClick={connectwallet}>
        
        
        
        {balance==''?<Balancess></Balancess> :<Balancess>{balance.slice(0,4)} SepoliaETH</Balancess>} 
        
        {address==''?<Addresss>Connect Wallet</Addresss> :<Addresss>{address.slice(0,6)}...{address.slice(39)}</Addresss>} 
        
        
        
        </ConnectWalletWrapper>
  )
}
const ConnectWalletWrapper = styled.div`

display: flex;
align-items: center;
justify-content: space-between;
background-color: ${(props)=> props.theme.bgDiv};
padding:5px 9px;
height: 100%;
color: ${(props)=> props.theme.color};
border-radius: 10px;
margin-right: 15px;
font-family: 'Roboto';
font-weight: bold;
font-size: small;
`
const Addresss = styled.h2`
background-color: ${(props)=> props.theme.bgSubDiv};
height: 100%;
display: flex;
align-items: center;
justify-content: center;
padding: 0 5px 0 5px;
border-radius:10px;
`
const Balancess = styled.h2`
background-color: ${(props)=> props.theme.bgSubDiv};
display: flex;
height: 100%;
align-items: center;
justify-content: center;
margin-right: 5px;
padding: 0 5px 0 5px;
border-radius:10px;

`
export default Wallet