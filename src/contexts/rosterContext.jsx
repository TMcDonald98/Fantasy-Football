import React, { createContext, useContext, useState } from "react";

const RosterContext = createContext();

export const useRosterContext = () => {
  return useContext(RosterContext);
};

export const RosterProvider = ({ children }) => {
  const [rosterData, setRosterData] = useState(null);
  const [leagueId, setLeagueId] = useState(null);
  const [userData, setUserData] = useState(null);

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

  //chat gpt generated function to replace array with dictionary
  function createObjectWithUserIdsAsKeys(arrayOfObjects) {
    return arrayOfObjects.reduce((result, currentObject) => {
      // Check if the current object has a 'user_id' field
      if (currentObject.hasOwnProperty("user_id")) {
        const userId = currentObject.user_id;
        // Create a new object with 'user_id' as the key and the current object as the value
        result[userId] = currentObject;
      }
      return result;
    }, {});
  }

  const fetchUserData = async (newLeagueId) => {
    try {
      const response = await fetch(
        `https://api.sleeper.app/v1/league/${newLeagueId}/users`
      );
      if (response.ok) {
        const data = await response.json();

        setUserData(createObjectWithUserIdsAsKeys(data));
        console.log("user", createObjectWithUserIdsAsKeys(data));
      } else {
        console.error("Failed to fetch user data");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const updateLeague = async (newLeagueId) => {
    setLeagueId(newLeagueId);
    fetchUserData(newLeagueId);
    return await fetchRosters(newLeagueId);
  };

  const getRosterData = () => {
    return rosterData;
  };

  const getUserData = () => {
    return userData;
  };

  const getUser = (userId) => {
    if (userData) return userData[userId];
    return null;
  };

  return (
    <RosterContext.Provider
      value={{ updateLeague, getRosterData, getUserData, getUser }}
    >
      {children}
    </RosterContext.Provider>
  );
};
