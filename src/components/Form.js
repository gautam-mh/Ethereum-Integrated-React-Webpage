import React from 'react'
import { useState } from 'react';
import { ethers } from 'ethers';

const ABI=[
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
function Form() {
    const [tokenName, setTokenName] = useState('');
  const [tokenSymbol, setTokenSymbol] = useState('');
  const [totalSupply, setTotalSupply] = useState('');
  const [urBalance, seturBalance] = useState('');
  const [connectedWallet, setConnectedWallet] = useState('');
  const [recipientAddress, setRecipientAddress] = useState('');
  const [amountToSend, setAmountToSend] = useState('');
  const [contractAddress, setcontractAddress] = useState('');

    const provider=new ethers.providers.Web3Provider(window.ethereum);
    const tokenContract=new ethers.Contract(contractAddress,ABI,provider.getSigner());

	const handleSendToken=async()=>{
		try{
			if(!recipientAddress || !amountToSend) {
				console.error('Recepient address and amount are required');
				return;
			}

			const amount=ethers.utils.parseUnits(amountToSend);

			const tx=await tokenContract.transfer(recipientAddress,amount);

			await tx.wait();

			console.log('Token transfer successful');
		} catch(error){
			console.error('Error sending token: ',error);
		}
	};

    const fetchTokenData=async()=>{
        try{
            const name=await tokenContract.name();
            setTokenName(name);

            const symbol=await tokenContract.symbol();
            setTokenSymbol(symbol);

            const totalSupply=await tokenContract.totalSupply();
            setTotalSupply(totalSupply);

            const address=await provider.getsigner().getAddress();
            setConnectedWallet(address);

            const balance=await tokenContract.balanceOf(address);
            seturBalance(balance.toString());
        }catch(error){
            console.log("Error fetching token data: ",error);
        }
    };
    return (
    <>
    <div className='f'>
        <div className='form'>
            <div className='title'>
                Token Data
            </div>
            <div class="input-container ic2">
            	<input id="email" class="input" onChange={(e) => setcontractAddress(e.target.value)} type="text"  placeholder="Fetching address" />
          	</div>
          	<button type="text" onClick={fetchTokenData}  class="submit">Fetch</button> 
        </div>
        <div className='form'>
            <div className='title'>
                Token Data
            </div>
            <div class="input-container ic2 x">
            	<li>Name - {tokenName}</li>
            	<li>Symbol - {tokenSymbol}</li>
            	<li>Total Supply - {totalSupply}</li>
            	<li>Connected wallet - {connectedWallet}</li>
            	<li>Balance - {urBalance}</li>
          	</div>
          	<br/>
          	<button type="text" onClick={fetchTokenData} class="submit">Refresh</button>
        </div>
        <div className='form'>
            <div className='title'>
                Send Data
            </div>
            <div class="input-container ic1">
            	<input id="firstname" class="input" onChange={(e) => setRecipientAddress(e.target.value)} type="text" placeholder="Recipients address" />
          	</div>
          	<div class="input-container ic2">
            	<input id="lastname" class="input" type="text" onChange={(e) => setAmountToSend(e.target.value)} placeholder="Amount to send" />
          	</div>
			<button type="text" onClick={handleSendToken} class="submit">Send</button>
        </div>

    </div>
    </>
  )
}

export default Form
