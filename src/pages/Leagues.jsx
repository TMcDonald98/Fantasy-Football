import { Avatar, Card, List, Spin } from "antd";
import { useUserContext } from "../contexts/userContext";
import { useEffect, useState } from "react";
import { scoreType } from "../constants/playerUtilities";
import { Link } from "react-router-dom";

export const Leagues = () => {
  const [leagues, setLeagues] = useState(null);

  const { getLeagues } = useUserContext();

  useEffect(() => {
    setLeagues(getLeagues());
  }, []);

  return (
    <Card bodyStyle={{ padding: "12px 20px" }}>
      {leagues ? (
        <List
          itemLayout="horizontal"
          dataSource={leagues}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={`https://sleepercdn.com/avatars/${item.avatar}`}
                  />
                }
                title={
                  <Link to={`/leagues/${item.league_id}`}>{item.name}</Link>
                }
                description={`${item.total_rosters}-Team, ${scoreType(
                  item.scoring_settings
                )}`}
              />
            </List.Item>
          )}
        />
      ) : (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            height: "100%",
            alignItems: "center",
          }}
        >
          <Spin />
        </div>
      )}
    </Card>
  );
};
