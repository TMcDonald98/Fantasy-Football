import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  // const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [leagueData, setLeagueData] = useState(null);
  const [rosterData, setRosterData] = useState(null);

  const apiUrl = "https://api.sleeper.app/v1/players/nfl";

  const fetchUserData = async (newUsername) => {
    console.log("here", newUsername);
    try {
      const response = await fetch(
        `https://api.sleeper.app/v1/user/${newUsername}`
      );
      if (response.ok) {
        const data = await response.json();
        setUserData(data);
        return [data, await fetchLeagueData(data)];
      } else {
        console.error("Failed to fetch user data");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const fetchLeagueData = async (newUserData) => {
    try {
      const response = await fetch(
        `https://api.sleeper.app/v1/user/${newUserData.user_id}/leagues/nfl/2024`
      );
      if (response.ok) {
        const data = await response.json();
        setLeagueData(data);
        return data;
      } else {
        console.error("Failed to fetch league data");
      }
    } catch (error) {
      console.error("Error fetching league data:", error);
    }
  };

  // const updateUsername = async (newUsername) => {
  //   setUsername(newUsername);
  //   return await fetchUserData(newUsername);
  // };

  const updateUserData = async (userId) => {
    const newUserData = await fetchUserData(userId);
    return newUserData;
  };

  const getLeagues = () => {
    return leagueData;
  };

  return (
    <UserContext.Provider value={{ getLeagues, updateUserData }}>
      {children}
    </UserContext.Provider>
  );
};
