import React, { createContext, useContext, useState } from "react";

const RosterContext = createContext();

export const useRosterContext = () => {
  return useContext(RosterContext);
};

export const RosterProvider = ({ children }) => {
  const [rosterData, setRosterData] = useState(null);
  const [leagueId, setLeagueId] = useState(null);

  const fetchRosters = async (newLeagueId) => {
    try {
      const response = await fetch(
        `https://api.sleeper.app/v1/league/${newLeagueId}/rosters`
      );
      if (response.ok) {
        const data = await response.json();
        setRosterData(data);
        return data;
      } else {
        console.error("Failed to fetch roster data");
      }
    } catch (error) {
      console.error("Error fetching roster data:", error);
    }
  };

  const updateLeague = async (newLeagueId) => {
    setLeagueId(newLeagueId);
    return await fetchRosters(newLeagueId);
  };

  const getRosterData = () => {
    return rosterData;
  };

  return (
    <RosterContext.Provider value={{ updateLeague, getRosterData }}>
      {children}
    </RosterContext.Provider>
  );
};
