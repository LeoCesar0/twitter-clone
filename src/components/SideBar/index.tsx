import { FaTwitter } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";
import HomeIcon from "../../assets/images/HomeIcon.svg";

import Button from "../Button";
import { Container, MenuButton, Menu, Title } from "./styles";
import { useLocation } from "react-router";

const SideBar: React.FC = () => {
    let location = useLocation()

  return (
    <Container>
      <FaTwitter size="25px" className="sidebar-logo"></FaTwitter>
      <Menu>

        <MenuButton isActive={location.pathname === "/"} >
          <img src={HomeIcon} alt="home" />
          <Title>Página Inicial</Title>
        </MenuButton>

        <MenuButton isActive={location.pathname === "/perfil"}>
          <BsPerson />
          <Title>Perfil</Title>
        </MenuButton>

        <MenuButton>
          <FiLogOut />
          <Title>Fazer Logout</Title>
        </MenuButton>

        <Button width="100%">Tweet</Button>
      </Menu>
    </Container>
  );
};

export default SideBar;
