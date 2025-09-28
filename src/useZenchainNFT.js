import { ethers } from "ethers";
import ZenchainNFTAbi from "./ZenchainNFT.json";

const contractAddress = "0xd723Eaad9B0f198e4BD845C0c0632b739538469e"; // Ganti dengan alamat kontrak hasil deploy

export const getContract = async () => {
  if (!window.ethereum) throw new Error("MetaMask not installed");
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  // Perbaikan di sini: pakai .abi
  return new ethers.Contract(contractAddress, ZenchainNFTAbi.abi, signer);
};

export const mintNFT = async (toAddress) => {
  const contract = await getContract();
  const tx = await contract.mint(toAddress);
  return await tx.wait();
};

export const burnNFT = async (tokenId) => {
  const contract = await getContract();
  const tx = await contract.burn(tokenId);
  return await tx.wait();
};

export const getOwnedNFTs = async (ownerAddress) => {
  const contract = await getContract();
  const balance = await contract.balanceOf(ownerAddress);
  let tokens = [];
  for (let i = 0; i < balance; i++) {
    const tokenId = await contract.tokenOfOwnerByIndex(ownerAddress, i);
    let tokenURI = "";
    try {
      tokenURI = await contract.tokenURI(tokenId);
    } catch {}
    tokens.push({ tokenId: tokenId.toString(), tokenURI });
  }
  return tokens;
};