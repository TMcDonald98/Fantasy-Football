import { Button, Input, Tooltip, Space } from "antd";
import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useUserContext } from "../contexts/userContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [username, setUsername] = useState("");

  const { getLeagues, updateUserData } = useUserContext();
  const navigate = useNavigate();

  //get league data on submit username
  const onSubmit = async () => {
    console.log(username);
    const userData = await updateUserData(username);
    navigate(`/${userData[0].user_id}/leagues`);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "90%",
          maxWidth: 400,
        }}
      >
        <Space.Compact style={{ width: "100%" }}>
          <Input
            placeholder="Enter your Sleeper username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onPressEnter={() => onSubmit()}
            prefix={<UserOutlined className="site-form-item-icon" />}
            suffix={
              <Tooltip title="Enter your Sleeper username to view your leagues!">
                <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
              </Tooltip>
            }
          />
          <Button type="primary" onClick={() => onSubmit()}>
            Submit
          </Button>
        </Space.Compact>
      </div>
    </div>
  );
};
