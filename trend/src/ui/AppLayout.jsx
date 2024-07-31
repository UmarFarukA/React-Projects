import { Outlet } from "react-router";
import styled from "styled-components";
import Header from "./Header";
import SideBar from "./SideBar";

const Container = styled.div``;

const Main = styled.main``;

function AppLayout() {
  return (
    <Container>
      <Header />
      <SideBar />
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
}

export default AppLayout;
