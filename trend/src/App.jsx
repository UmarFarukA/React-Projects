import styled from "styled-components";
import Home from "./ui/Home";
import "./App.css";

const Body = styled.div`
  padding: 1rem;
`;

function App() {
  return (
    <>
      <Body>
        <Home />
      </Body>
    </>
  );
}

export default App;
