import { useGlobalState } from "../../context/GlobalContext";
import { apiWithAuth } from "../../services/api";

function Home() {
  const { auth } = useGlobalState();

  apiWithAuth.get("/feed");

  return (
    <div className="home">
      <h1>Usuário logado: {auth?.user.name} </h1>
    </div>
  );
}

export default Home;
