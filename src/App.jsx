import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Layout, Space } from "antd";

const { Header, Footer, Sider, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Layout direction="vertical" style={{ width: "100vw" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          style={{ height: "100vh" }}
        ></Sider>
        <Layout>
          <Header style={{ background: "white" }}>Fantasy Football 2023</Header>
          <Content>Content</Content>
          <Footer>© Thomas Mcdonald 2023</Footer>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
