/* eslint-disable react/prop-types */
function CommonRarity({ playerName, stats, image }) {
  return (
    <div>
      <div className="h-[340px]  w-[300px]  gradient-background-common   common-rarity  ">
        <div className="flex justify-center items-center">
          <div className="w-200px ">
            <img
              src={image}
              alt={playerName}
              className="imageCard  self-center w-full shadow-lg shadow-black rounded-e-[2rem] rounded-bl-[2rem]"
            />
          </div>
          <div>
            <h1 className="font-bold text-white ml-4 text-2xl">
              {Math.floor((stats.PAC + stats.SHO + stats.PAS + stats.PHY) / 4)}
            </h1>
          </div>
        </div>

        <div className="h-[30%] flex flex-col items-center gap-2 pt-3">
          <div>
            {" "}
            <h1 className="font-bold text-white">{playerName}</h1>
          </div>
          <div className="flex gap-3 font-semibold text-white ">
            <div>
              <h1>PAC</h1>
              <p>{stats.PAC}</p>
            </div>
            <div>
              <h1>SHO</h1>
              <p>{stats.SHO}</p>
            </div>
            <div>
              <h1>PAS</h1>
              <p>{stats.PAS}</p>
            </div>
            <div>
              <h1>PHY</h1>
              <p>{stats.PHY}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommonRarity;
