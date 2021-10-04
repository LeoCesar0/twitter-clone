import SideBar from "../../components/SideBar";
import { Container } from "./styles";

function Perfil() {
  // const { auth } = useGlobalState();

  // apiWithAuth.get("/feed");
  // <h1>Usuário logado: {auth?.user.name} </h1>

  return (
    <Container>
      <SideBar />
      <div></div>
      <div></div>
    </Container>


  );
}

export default Perfil;
