import { useParams } from "react-router-dom";
import { useRosterContext } from "../contexts/rosterContext";
import { useEffect, useState } from "react";
import { PlayerCard } from "../PlayerCard";
import { Card, Col, Row, Space, Typography } from "antd";
const { Text, Title } = Typography;
import _ from "lodash";

export const LeagueHome = () => {
  const { leagueId } = useParams();
  const [rosters, setRosters] = useState(null);

  const { updateLeague, getRosterData, getUser } = useRosterContext();
  console.log(leagueId);

  useEffect(() => {
    const fetchRosters = async () => {
      setRosters(await updateLeague(leagueId));
    };
    fetchRosters();
  }, []);

  if (rosters) console.log(rosters);
  return (
    // <Space
    //   size={4}
    //   wrap
    //   style={{
    //     display: "flex",
    //     flexWrap: "wrap",
    //     alignItems: "stretch",
    //   }}
    // >
    <Row gutter={[8, 8]} justify={"center"}>
      {rosters &&
        rosters.map((roster, index) => (
          <Col key={index}>
            <Card
              title={
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {_.get(
                    getUser(roster.owner_id),
                    "metadata.team_name",
                    getUser(roster.owner_id)?.display_name
                  )}

                  <Text style={{ fontSize: 10 }} type="secondary">
                    {getUser(roster.owner_id)?.display_name}
                  </Text>
                </div>
              }
              headStyle={{ padding: "10px 16px" }}
              bodyStyle={{ padding: 16 }}
              style={{ height: "100%", flexGrow: 1 }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                {roster && (
                  <>
                    {roster.starters.map((playerId, index) => (
                      <PlayerCard key={index} playerId={playerId} />
                    ))}
                    {roster.players
                      .filter((x) => !roster.starters.includes(x))
                      .map((playerId, index) => (
                        <PlayerCard key={index} playerId={playerId} />
                      ))}
                  </>
                )}
              </div>
            </Card>
          </Col>
        ))}
    </Row>
    // </Space>
  );
};
