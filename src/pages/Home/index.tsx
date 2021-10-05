import SearchInput from "../../components/SearchInput";
import SideBar from "../../components/SideBar";
import { Container } from "./styles";

function Home() {
  // const { auth } = useGlobalState();

  // apiWithAuth.get("/feed");
  // <h1>Usuário logado: {auth?.user.name} </h1>

  return (
    <Container>
      <SideBar />
      <div style={{width: "600px", background: "#ffffff60"}}></div>
      <div style={{ background: "#ffffff20"}}>
        <SearchInput />
      </div>
    </Container>


  );
}

export default Home;
