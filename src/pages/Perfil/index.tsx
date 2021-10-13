import PageWrapper from "../../components/PageWrapper";
import { FixedContainer, FixedFirstChild, FixedSecondChild } from "./styles";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

function Perfil() {
  return (
    <PageWrapper
      fixedContent={
        <>
          <FixedContainer>
            <FixedFirstChild>
              <Link to="/" >
              <BsArrowLeft size="18px" />
              </Link>
            </FixedFirstChild>
            <FixedSecondChild>
              <h1>Leozin</h1>
              <h2>12 Tweets</h2>
            </FixedSecondChild>
          </FixedContainer>
        </>
      }
    ></PageWrapper>
  );
}

export default Perfil;
