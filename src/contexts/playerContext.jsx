import React, { createContext, useContext, useEffect, useState } from "react";

const PlayerContext = createContext();

export const usePlayerContext = () => {
  return useContext(PlayerContext);
};

export const PlayerProvider = ({ children }) => {
  const [playerData, setPlayerData] = useState({});
  const apiUrl = "https://api.sleeper.app/v1/players/nfl";

  const fetchAllPlayersData = async () => {
    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        setPlayerData(data);
      } else {
        console.error("Failed to fetch player data");
      }
    } catch (error) {
      console.error("Error fetching player data:", error);
    }
  };

  useEffect(() => {
    fetchAllPlayersData();
  }, []);

  const getPlayerById = (playerId) => {
    return playerData[playerId] || null;
  };

  const getPlayersByIds = (playerIds) => {
    return playerIds.map((id) => playerData[id] || null);
  };

  return (
    <PlayerContext.Provider
      value={{ playerData, getPlayerById, getPlayersByIds }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
