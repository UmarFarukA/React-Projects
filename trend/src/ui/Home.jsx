import styled from "styled-components";
import Login from "./Login";
import Hero from "./Hero";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 75dvh;
  justify-content: center;
  justify-items: center;
`;

function Home() {
  return (
    <Container>
      <Hero />
      <Login />
    </Container>
  );
}

export default Home;
