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
  console.log(player);
  return (
    <Card
      loading={!player}
      size="small"
      bodyStyle={{ padding: 6, paddingBottom: 0 }}
      style={{ height: 43 }}
    >
      {player && (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex" }}>
            <span style={{ lineHeight: 0 }}>
              <img
                src={`https://sleepercdn.com/content/nfl/players/thumb/${player.player_id}.jpg`}
                style={{ height: 35 }}
              />
              {/* Best one vvv */}
              {/* <img
                src={`https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/${player.espn_id}.png&h=35`}
                style={{ height: 35 }}
              /> */}
              {/* <img
              src={`https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/${player.espn_id}.png&h=35&w=35&scale=crop`}
              style={{ height: 35 }}
            /> */}
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
