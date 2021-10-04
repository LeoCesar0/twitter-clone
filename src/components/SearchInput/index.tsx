import { Container, Input } from "./styles"
import { FiSearch } from "react-icons/fi"



const SearchInput = () => {
    return (
        <Container>
            <FiSearch />
            <Input placeholder="Buscar no Twitter"></Input>
        </Container>
    )
}


export default SearchInput