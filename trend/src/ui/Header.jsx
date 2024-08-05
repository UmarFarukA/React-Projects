import styled from "styled-components";
import { useLogout } from "../features/Auth/useLogout";

const Heading = styled.header`
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  border-bottom: 0.6rem;
  /* background-color: rgb(09, 187, 09); */
  background-color: rgb(169, 221, 169);
  color: white;
  padding: 0.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  span {
    font-weight: 600;
  }

  p {
    cursor: pointer;
  }
`;

const Logo = styled.span`
  font-weight: 700;
  font-size: 2.2rem;
`;

function Header() {
  const user = JSON.parse(localStorage.getItem("user"));
  const { logout, isLoading } = useLogout();
  return (
    <Heading>
      <Logo>Trend</Logo>
      <div>Icons</div>

      <Info>
        <span>{user.name}</span>
        <p onClick={logout} disabled={isLoading}>
          Logout
        </p>
      </Info>
    </Heading>
  );
}

export default Header;
