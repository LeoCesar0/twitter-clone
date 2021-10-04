import { FaTwitter } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";
import HomeIcon from "../../assets/images/HomeIcon.svg";

import Button from "../Button";
import { Container, MenuButton, Menu, Title } from "./styles";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useGlobalState } from "../../context/GlobalContext";

const SideBar: React.FC = () => {
    const { removeAuth } = useGlobalState();
    let location = useLocation();
    let history = useHistory()

    const LogOut = () => {

        removeAuth()
        history.push("/login")
    }

  return (
    <Container>
      <FaTwitter size="25px" className="sidebar-logo"></FaTwitter>
      <Menu>
        <Link to="/">
          <MenuButton isActive={location.pathname === "/"}>
            <img src={HomeIcon} alt="home" />
            <Title>Página Inicial</Title>
          </MenuButton>
        </Link>

        <Link to="/perfil">
          <MenuButton isActive={location.pathname === "/perfil"}>
            <BsPerson />
            <Title>Perfil</Title>
          </MenuButton>
        </Link>

        <MenuButton onClick={LogOut} >
          <FiLogOut />
          <Title>Fazer Logout</Title>
        </MenuButton>

        <Button width="100%">Tweet</Button>
      </Menu>
    </Container>
  );
};

export default SideBar;
