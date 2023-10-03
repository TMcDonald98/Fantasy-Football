import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Layout } from "antd";
import { Typography } from "antd";
import { PlayerProvider } from "./contexts/playerContext";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { UserProvider } from "./contexts/userContext";
import { Leagues } from "./pages/Leagues";
import { LeagueHome } from "./pages/LeagueHome";
import { RosterProvider } from "./contexts/rosterContext";

const { Title } = Typography;

const { Header, Footer, Sider, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [broken, setBroken] = useState(false);

  const Providers = ({ children }) => (
    <UserProvider>
      <PlayerProvider>
        <RosterProvider>{children}</RosterProvider>
      </PlayerProvider>
    </UserProvider>
  );

  const RoutesWrapper = ({ children }) => {
    return (
      <BrowserRouter>
        <Providers>{children}</Providers>
      </BrowserRouter>
    );
  };

  const Pages = ({ children }) => {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/:userId/leagues" element={<Leagues />} />
        <Route path="/:userId/:leagueId" element={<LeagueHome />} />

        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    );
  };

  console.log(broken, collapsed);
  return (
    <RoutesWrapper>
      <Layout
        direction="vertical"
        style={{ width: "100vw", minHeight: "100vh" }}
      >
        {/* {!broken ? (
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            onBreakpoint={(broken) => setBroken(broken)}
            breakpoint="lg"
          ></Sider>
        ) : (
          <Sider
            breakpoint="lg"
            collapsedWidth={0}
            onBreakpoint={(broken) => setBroken(broken)}
            zeroWidthTriggerStyle={{ top: 12 }}
          >
            {" "}
          </Sider>
        )} */}
        {/* <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        ></Sider> */}
        <Layout>
          <Header style={{ background: "white" }}>
            <Title level={3}>Fantasy Football 2023</Title>
          </Header>
          <Content
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              padding: 16,
            }}
          >
            <Pages />
          </Content>
          <Footer style={{ display: "flex", justifyContent: "center" }}>
            © Thomas Mcdonald 2023
          </Footer>
        </Layout>
      </Layout>
    </RoutesWrapper>
  );
}

export default App;
