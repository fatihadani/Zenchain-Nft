import React from "react";

// Koleksi NFT terbaru
const zenchainNFTs = [
  {
    name: "Zenchain Human",
    tokenId: 1,
    price: "Free",
    image: "/zenchainhuman-nft.png",
  },
  {
    name: "Zenchain Horse",
    tokenId: 2,
    price: "Free",
    image: "/zenhorse-nft.jpeg",
  },
  {
    name: "Zenchain Rocket",
    tokenId: 3,
    price: "Free",
    image: "/zenrocket-nft.jpeg",
  },
];

// Blockchain yang didukung
const blockchains = [
  { name: "Zenchain", logo: "/zenchain-logo.png" },
  { name: "Ethereum", logo: "/eth-logo.png" },
  // Tambahkan blockchain lain yang didukung Zenchain
];

// Koleksi Populer
const popularCollections = [
  {
    name: "Zenchain Human",
    image: "/zenchainhuman-nft.png",
  },
  {
    name: "Zenchain Horse",
    image: "/zenhorse-nft.jpeg",
  },
  {
    name: "Zenchain Rocket",
    image: "/zenrocket-nft.jpeg",
  },
];

function App() {
  return (
    <div className="landing">
      <header className="hero-section">
        <img src="/zenchain-logo.png" alt="Zenchain Logo" className="logo" />
        <h1>
          <span className="main-blue">Buat Koleksi NFT Zenchain</span>
          <br />
          <span className="main-black">Tanpa Coding, Langsung Mint!</span>
        </h1>
        <p className="desc">
          Zenchain memudahkan kamu membuat, deploy, dan mint NFT koleksi kamu dengan proses yang simpel dan fitur unik untuk semua kreator.
        </p>
        <button className="cta-btn">Mulai Sekarang Gratis!</button>
      </header>

      <section className="blockchain-logos">
        <span>MINT di</span>
        {blockchains.map(bc => (
          <img key={bc.name} src={bc.logo} alt={bc.name} className="bc-logo" />
        ))}
        <span className="plus50">+ Banyak Lagi</span>
      </section>

      <section className="showcase">
        <div className="collection-preview">
          <h2>Koleksi NFT Zenchain Terbaru</h2>
          <div className="nft-cards">
            {zenchainNFTs.map(nft => (
              <div key={nft.tokenId} className="nft-card">
                <img src={nft.image} alt={nft.name} className="nft-img" />
                <div className="nft-info">
                  <div className="nft-name">{nft.name}</div>
                  <div className="nft-details">
                    <span>Token Id: {nft.tokenId}</span>
                    <span>Harga: {nft.price}</span>
                  </div>
                  <button className="mint-btn">Mint</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="popular-collections">
        <h2>Koleksi Populer Zenchain</h2>
        <div className="popular-cards">
          {popularCollections.map(item => (
            <div key={item.name} className="popular-card">
              <img src={item.image} alt={item.name} className="nft-img" />
              <div className="nft-name">{item.name}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;