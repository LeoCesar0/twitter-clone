import { BsTypeH1 } from "react-icons/bs";
import Main from "../../components/Main";
import SearchInput from "../../components/SearchInput";
import SideBar from "../../components/SideBar";
import { Container, Tweet } from "./styles";

function Home() {
  // const { auth } = useGlobalState();

  // apiWithAuth.get("/feed");
  // <h1>Usuário logado: {auth?.user.name} </h1>

  return (
    <Container>
      <SideBar />
      <Main fixedContent={
        <h1>Fixed Content</h1>
      }>
          <Tweet>
          <h1>Tweet</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores eaque soluta corrupti, commodi recusandae beatae sit repellendus voluptates doloremque pariatur, accusamus, accusantium cumque possimus! Dolore vitae voluptates iure laborum excepturi.</p>
          </Tweet>
          <Tweet>
          <h1>Tweet</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores eaque soluta corrupti, commodi recusandae beatae sit repellendus voluptates doloremque pariatur, accusamus, accusantium cumque possimus! Dolore vitae voluptates iure laborum excepturi.</p>
          </Tweet>
          <Tweet>
          <h1>Tweet</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores eaque soluta corrupti, commodi recusandae beatae sit repellendus voluptates doloremque pariatur, accusamus, accusantium cumque possimus! Dolore vitae voluptates iure laborum excepturi.</p>
          </Tweet>
          <Tweet>
          <h1>Tweet</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores eaque soluta corrupti, commodi recusandae beatae sit repellendus voluptates doloremque pariatur, accusamus, accusantium cumque possimus! Dolore vitae voluptates iure laborum excepturi.</p>
          </Tweet>
          <Tweet>
          <h1>Tweet</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores eaque soluta corrupti, commodi recusandae beatae sit repellendus voluptates doloremque pariatur, accusamus, accusantium cumque possimus! Dolore vitae voluptates iure laborum excepturi.</p>
          </Tweet>
          <Tweet>
          <h1>Tweet</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores eaque soluta corrupti, commodi recusandae beatae sit repellendus voluptates doloremque pariatur, accusamus, accusantium cumque possimus! Dolore vitae voluptates iure laborum excepturi.</p>
          </Tweet>
          <Tweet>
          <h1>Tweet</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores eaque soluta corrupti, commodi recusandae beatae sit repellendus voluptates doloremque pariatur, accusamus, accusantium cumque possimus! Dolore vitae voluptates iure laborum excepturi.</p>
          </Tweet>
          <Tweet>
          <h1>Tweet</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores eaque soluta corrupti, commodi recusandae beatae sit repellendus voluptates doloremque pariatur, accusamus, accusantium cumque possimus! Dolore vitae voluptates iure laborum excepturi.</p>
          </Tweet>
          <Tweet>
          <h1>Tweet</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores eaque soluta corrupti, commodi recusandae beatae sit repellendus voluptates doloremque pariatur, accusamus, accusantium cumque possimus! Dolore vitae voluptates iure laborum excepturi.</p>
          </Tweet>
          <Tweet>
          <h1>Tweet</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores eaque soluta corrupti, commodi recusandae beatae sit repellendus voluptates doloremque pariatur, accusamus, accusantium cumque possimus! Dolore vitae voluptates iure laborum excepturi.</p>
          </Tweet>
          <Tweet>
          <h1>Tweet</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores eaque soluta corrupti, commodi recusandae beatae sit repellendus voluptates doloremque pariatur, accusamus, accusantium cumque possimus! Dolore vitae voluptates iure laborum excepturi.</p>
          </Tweet>
          <Tweet>
          <h1>Tweet</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores eaque soluta corrupti, commodi recusandae beatae sit repellendus voluptates doloremque pariatur, accusamus, accusantium cumque possimus! Dolore vitae voluptates iure laborum excepturi.</p>
          </Tweet>
          
      </Main>
      <div >
        <SearchInput />
      </div>
    </Container>


  );
}

export default Home;
