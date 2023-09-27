import { useParams } from "react-router-dom";
import { useRosterContext } from "../contexts/rosterContext";
import { useEffect, useState } from "react";
import { PlayerCard } from "../PlayerCard";

export const LeagueHome = () => {
  const { leagueId } = useParams();
  const [rosters, setRosters] = useState(null);

  const { updateLeague, getRosterData } = useRosterContext();
  console.log(leagueId);

  useEffect(() => {
    const fetchRosters = async () => {
      setRosters(await updateLeague(leagueId));
    };
    fetchRosters();
  }, []);

  if (rosters) console.log(rosters);
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", width: "90%" }}>
        {rosters?.[0] &&
          rosters[0].players.map((playerId, index) => (
            <PlayerCard playerId={playerId} />
          ))}
      </div>
    </>
  );
};
