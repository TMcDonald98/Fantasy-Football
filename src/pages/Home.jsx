import { Space } from "antd";
import { PlayerCard } from "../PlayerCard";

export const Home = () => {
  return (
    <Space direction="vertical" size={4} style={{ display: "flex" }}>
      <PlayerCard playerId={"4046"} />
      <PlayerCard playerId={"4046"} />
    </Space>
  );
};
