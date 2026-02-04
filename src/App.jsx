import React from "react";
import "./index.css";
import subway from './assets/subway.png';
import game1 from './assets/2048.png';
import temple2 from './assets/temple2.png';
import stickman from './assets/stickman.png';
import moto from './assets/moto.png';
import bubble from './assets/bubble.png';
import venge from './assets/venge.png';
import ants from './assets/ants.png';
import plonky from './assets/plonky.png';
import calcio from './assets/calcio.png';
import devil from './assets/level_devil.png';
import background from './assets/bg-diamante.svg';
import pool from './assets/pool-club.png';
import trivia from './assets/trivia-crack.png';
import planet from './assets/planet.png';
import beuty from './assets/beuty.png';

const games = [
  { title: "Subway Surfers", img:subway },
  { title: "Temple Run 2", img: temple2 },
  { title: "Stickman Hook", img:stickman },
  { title: "Moto X3M", img:moto },
  { title: "Venge.io", img:venge },
  { title: "Idle Ants", img:ants },
  { title: "Bubble Shooter",img:bubble },
  { title: "2048", img:game1 },
  {title: "plonky", img:plonky },
  {title: "indoor soccer", img:calcio},
  {title:"level devil", img:devil},
  {title:"pool club", img:pool},
  {title:"trivia crack", img:trivia},
  {title:"planet destruction", img:planet},
  {title:"beauty salon", img:beuty}
];

export default function App() {
  return (
    <div className="poki-app" style={{ backgroundImage: `url(${background})` }}>
      <header className="poki-header">
        <div className="poki-logo">Poki</div>
        <input className="poki-search" type="text" placeholder="Cerca giochi..." />
        <nav className="poki-nav">
          <a href="#" className="poki-nav-link">Home</a>
          <a href="#" className="poki-nav-link">Nuovi</a>
          <a href="#" className="poki-nav-link">Popolari</a>
          <a href="#" className="poki-nav-link">Categorie</a>
        </nav>
      </header>
      <main className="poki-main">
        <div className="poki-games-grid">
          {games.map((game, idx) => (
            <div className="poki-game-card" key={idx}>
              <img src={game.img} alt={game.title} className="poki-game-img" /> 
              <div className="poki-game-title">{game.title}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
