import { Avatar, Card, List, Spin } from "antd";
import { useUserContext } from "../contexts/userContext";
import { useEffect, useState } from "react";
import { scoreType } from "../constants/playerUtilities";
import { Link, useParams, useResolvedPath } from "react-router-dom";

export const Leagues = () => {
  const { userId } = useParams();
  const { pathname } = useResolvedPath();
  console.log(pathname.match(/\/([^/]+)\/([^/]+)/)?.[1]);

  const [leagues, setLeagues] = useState(null);

  const { getLeagues, updateUserData } = useUserContext();

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await updateUserData(userId);
      console.log(data);
      setLeagues(data[1]);
    };

    const userLeagues = getLeagues();
    if (userLeagues) setLeagues(userLeagues);
    else fetchUserData();
  }, []);

  return (
    <Card style={{ width: "90%" }} bodyStyle={{ padding: "12px 20px" }}>
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
                  <Link
                    to={`/${pathname.match(/\/([^/]+)\/([^/]+)/)?.[1]}/${
                      item.league_id
                    }`}
                  >
                    {item.name}
                  </Link>
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
