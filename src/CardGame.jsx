import { useState } from "react";
import CommonRarity from "./playerStats/CommonRarity";
import RareRarity from "./playerStats/RareRarity";
import EpicRarity from "./playerStats/EpicRarity";

const CardGame = () => {
  //   const [result, setResult] = useState(null);
  const [playerA, setPlayerA] = useState(null);
  const [playerB, setPlayerB] = useState(null);

  const players = {
    common: [
      { playerName: "Simant", stats: { PAC: 80, SHO: 55, PAS: 60, PHY: 75 } },
      { playerName: "Amit Gre", stats: { PAC: 75, SHO: 77, PAS: 60, PHY: 72 } },
      { playerName: "Muskan", stats: { PAC: 70, SHO: 81, PAS: 83, PHY: 64 } },
      { playerName: "Bhaivab", stats: { PAC: 73, SHO: 77, PAS: 69, PHY: 73 } },
      { playerName: "Raju", stats: { PAC: 73, SHO: 75, PAS: 69, PHY: 68 } },
      { playerName: "Subarna", stats: { PAC: 61, SHO: 73, PAS: 63, PHY: 101 } },
      { playerName: "Rishav", stats: { PAC: 64, SHO: 67, PAS: 65, PHY: 84 } },
      { playerName: "Relise", stats: { PAC: 78, SHO: 75, PAS: 77, PHY: 79 } },
    ],
    rare: [
      { playerName: "Sudesh", stats: { PAC: 85, SHO: 80, PAS: 80, PHY: 80 } },
      { playerName: "Ramu", stats: { PAC: 82, SHO: 81, PAS: 80, PHY: 79 } },
      { playerName: "Rupesh", stats: { PAC: 82, SHO: 84, PAS: 86, PHY: 88 } },
      { playerName: "Amit", stats: { PAC: 84, SHO: 87, PAS: 83, PHY: 88 } },
      { playerName: "Sadip", stats: { PAC: 81, SHO: 86, PAS: 86, PHY: 89 } },
      { playerName: "Aryan", stats: { PAC: 85, SHO: 80, PAS: 83, PHY: 82 } },
    ],
    epic: [
      {
        playerName: "Siddhant",
        stats: { PAC: 99, SHO: 102, PAS: 100, PHY: 99 },
      },
      { playerName: "Sandesh", stats: { PAC: 98, SHO: 97, PAS: 99, PHY: 100 } },
    ],
  };

  const commonChance = 80;
  const rareChance = 25;

  const pullCard = (setPlayer) => {
    const randomNumber = Math.random() * 100;
    let player;
    let rarity;

    if (randomNumber < commonChance) {
      player = pickRandomPlayer(players.common);
      rarity = "Common";
    } else if (randomNumber < commonChance + rareChance) {
      player = pickRandomPlayer(players.rare);
      rarity = "Rare";
    } else {
      player = pickRandomPlayer(players.epic);
      rarity = "Epic";
    }

    setPlayer({ player, rarity });
  };

  const pickRandomPlayer = (players) => {
    const randomIndex = Math.floor(Math.random() * players.length);
    return players[randomIndex];
  };

  const calculateOverall = (stats) => {
    return stats.PAC + stats.SHO + stats.PAS + stats.PHY;
  };

  const determineWinner = () => {
    if (!playerA || !playerB) return null;

    const overallA = calculateOverall(playerA.player.stats);
    const overallB = calculateOverall(playerB.player.stats);

    if (overallA > overallB) {
      return "Player A wins!";
    } else if (overallB > overallA) {
      return "Player B wins!";
    } else {
      return "It's a tie!";
    }
  };

  return (
    <div className="flex m-auto ">
      <div className="flex flex-col items-center justify-center flex-1 p-8 ">
        <h1 className="text-3xl mb-6 font-bold">Player A</h1>
        {playerA && renderPlayerCard(playerA)}
        <button
          onClick={() => pullCard(setPlayerA)}
          className="p-4 bg-white border rounded-xl border-black text-black hover:bg-green-400  mt-8"
        >
          Pull a Card
        </button>
      </div>
      <div className="flex flex-col items-center justify-center flex-1 p-8">
        <h1 className="text-3xl mb-6 font-bold">Player B</h1>
        {playerB && renderPlayerCard(playerB)}
        <button
          onClick={() => pullCard(setPlayerB)}
          className="p-4 bg-white border rounded-xl border-black text-black hover:bg-green-400  mt-8"
        >
          Pull a Card
        </button>
      </div>
      <div className=" absolute font-sans top-[30rem] font-bold text-white text-5xl left-[30rem] result">
        {determineWinner()}
      </div>
    </div>
  );
};

const renderPlayerCard = (playerState) => {
  const { player, rarity } = playerState;
  if (rarity === "Common") {
    return <CommonRarity playerName={player.playerName} stats={player.stats} />;
  } else if (rarity === "Rare") {
    return <RareRarity playerName={player.playerName} stats={player.stats} />;
  } else {
    return <EpicRarity playerName={player.playerName} stats={player.stats} />;
  }
};

export default CardGame;
