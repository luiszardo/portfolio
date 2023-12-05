import { useState } from 'react'
import Sobre from './components/sobre'
import Projetos from './components/projeto'
import Contato from './components/contato'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import styled,{createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
*{margin: 0;
padding: 0%;
box-sizing: border-box;
background-color: black;
}
`
const Header = styled.section`
/* border: solid red; */
height: 15vh;
`
const Ul = styled.ul`
/* border: solid blue; */
height: 13vh;
display: flex;
justify-content: center;
align-items: center;
justify-content: space-evenly;

li{
  border:solid green;
  border-radius: 15px;
  width: 9vw;
  text-align: center;
  list-style: none;
  font-family: "Monomaniac One", sans-serif;
  &:hover{
    transform: scale(110%);
  }
}
`
const Links =styled(Link)`
text-decoration: none;
color: #ffffff;
font-size: 24px;
font-weight: bold;
&:hover{
  color: green;
}
`

function App() {
  const [count, setCount] = useState(0)

  return (
    <Header>
      <GlobalStyle/>
      <BrowserRouter>
     <nav>
      <Ul>
        <li>
          <Links to="/">Sobre</Links>
        </li>
        <li>
          <Links to="/projeto">Projetos</Links>
        </li>
        <li>
          <Links to="/contato">Contato</Links>
        </li>
      </Ul>
     </nav>
      <Routes>
        <Route path="/" element={<Sobre/>}/>
        <Route path="/projeto" element={<Projetos/>}/>
        <Route path="/contato" element={<Contato/>}/>
      </Routes>
      </BrowserRouter>
    </Header>
  )
}

export default App
