import { useGlobalState } from "../../context/GlobalContext";


function Home() {
  const { auth } = useGlobalState()

  return (
    <div className="home">
      <h1>Usuário logado: {auth?.user.name} </h1>
    </div>
  );
}

export default Home;
