import React from "react";
import { SlLogout } from "react-icons/sl";
import { useLogout } from "./useLogout";
import ButtonIcon from "../../ui/ButtonIcon";

function Logout() {
  const { logout, isLoading } = useLogout();
  return (
    <ButtonIcon onClick={logout} disable={isLoading}>
      <SlLogout />
    </ButtonIcon>
  );
}

export default Logout;
