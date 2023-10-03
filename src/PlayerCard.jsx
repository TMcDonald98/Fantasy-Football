import { Card, Typography } from "antd";
import { examplePlayer } from "./constants/player_example_data";
import { useState } from "react";
import { getPositionColor } from "./constants/playerUtilities";
import { usePlayerContext } from "./contexts/playerContext";

const { Text, Title } = Typography;

export const PlayerCard = ({ playerId }) => {
  const [loading, setLoading] = useState(null);
  const { getPlayerById } = usePlayerContext();
  const player = getPlayerById(playerId);
  // console.log(player);
  //0 = starter spot without a role filled aka empty
  return (
    <Card
      type="inner"
      loading={!player}
      size="small"
      bodyStyle={{ padding: 6, paddingBottom: 0, paddingRight: 8 }}
      style={{ height: 43, marginBottom: 2, minWidth: 220 }}
    >
      {player && (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex" }}>
            <span
              style={{
                width: 48,
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* Display espn first(best quality) then sleeper if not available, and special link for defense. */}
              {player.espn_id ? (
                <img
                  src={`https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/${player.espn_id}.png`}
                  style={{ height: 35 }}
                />
              ) : player.fantasy_positions[0] === "DEF" ? (
                <>
                  {/* <img
                    src={`https://sleepercdn.com/images/team_logos/nfl/${player.player_id.toLowerCase()}.png`}
                    style={{ width: 35, objectFit: "cover" }}
                  /> */}
                  <img
                    src={`https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${player.player_id.toLowerCase()}.png`}
                    style={{ height: 31, objectFit: "cover" }}
                  />
                </>
              ) : (
                <img
                  src={`https://sleepercdn.com/content/nfl/players/thumb/${player.player_id}.jpg`}
                  style={{ height: 35, objectFit: "cover" }}
                  alt="N/A"
                />
              )}
            </span>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Text style={{ lineHeight: 1 }} strong>
                {`${player.first_name} ${player.last_name}`}
              </Text>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "100%",
                    background: getPositionColor(player.fantasy_positions[0]),
                    marginRight: 4,
                  }}
                />
                <Text style={{ fontSize: 12 }} type="secondary">
                  {`${player.fantasy_positions[0]} • ${player.team}`}
                </Text>
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};
