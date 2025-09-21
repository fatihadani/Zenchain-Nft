import { useState } from 'react';

export default function Home() {
  const [wallet, setWallet] = useState(null);
  const [status, setStatus] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const connectWallet = () => {
    setWallet({ address: '0xDEMO_WALLET' });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const mintNFT = () => {
    if (!wallet) {
      setStatus('Please connect your wallet first!');
      return;
    }
    if (!name || !description || !image) {
      setStatus('Please fill all fields and upload an image!');
      return;
    }

    setStatus('Minting NFT...');
    setTimeout(() => {
      setStatus(`NFT minted!\nName: ${name}\nTx Hash: 0xDEMO_TX_HASH`);
    }, 2000);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>ZenChain NFT Project</h1>
      <p>Connected wallet: {wallet?.address || 'Not connected'}</p>
      {!wallet && <button onClick={connectWallet}>Connect Wallet</button>}

      {wallet && (
        <div style={{ marginTop: '1rem' }}>
          <input
            type="text"
            placeholder="NFT Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ display: 'block', marginBottom: '0.5rem' }}
          />
          <input
            type="text"
            placeholder="NFT Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ display: 'block', marginBottom: '0.5rem' }}
          />
          <input type="file" onChange={handleImageUpload} style={{ marginBottom: '0.5rem' }} />
          {preview && <img src={preview} alt="Preview" width="200" style={{ display: 'block', marginBottom: '0.5rem' }} />}
          <button onClick={mintNFT}>Mint NFT</button>
        </div>
      )}

      <p style={{ marginTop: '1rem', whiteSpace: 'pre-wrap' }}>{status}</p>
    </div>
  );
}
