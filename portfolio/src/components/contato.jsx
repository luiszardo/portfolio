import Linkedin from "../image/linkedin.png"
import Github from "../image/github.png"
import Imagem2 from "../image/img2.jpg"
import Gmail from "../image/gmail.png"
import styled from "styled-components"

const Sessao = styled.section`
/* border: solid red; */
height: 130vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content:space-around;
`
const PrimeiraFigure = styled.figure`
/* border: solid blue; */
display: flex;
justify-content: center;
img{
    height: 65vh;
    border-radius: 13px;
    filter:drop-shadow(3px 3px 50px green);
}
`
const Titulo = styled.h1`
color: #ffffff;
text-align: center;
font-size:30px;
user-select: none;
font-family: "Monomaniac One", sans-serif;

`
const SegundaFigure = styled.figure`
/* border: solid red; */
width: 35vw;
height: 35vh;
display: flex;
justify-content: center;
align-items: center;
justify-content: space-evenly;
img{
    height: 8vh;
    &:hover{
        transform: scale(103%);
    }
    
}
`
const TerceiraFigure = styled.figure`
/* border: solid red; */
display: flex;
flex-direction: column;
align-items: center;
position: relative;
bottom: 55px;

img{
    width: 7vw;
    &:hover{
        transform: scale(103%);
    }
}
figcaption{
    color: #ffffff;
    list-style: none;
    user-select: none;
    font-size: 19px;
    font-weight: bold;
    font-family: "Black Ops One", sans-serif;
}
`

function Contato (){
    return(
        <Sessao>
        <PrimeiraFigure>
            <img src={Imagem2} alt="" />
        </PrimeiraFigure>
            <Titulo>Contatos</Titulo>
        <SegundaFigure>
            <a target="_blank" href="https://www.linkedin.com/in/luis-henrique-zardo-b69978273/"><img src={Linkedin} alt="" /></a>
            <a target="_blank" href="https://github.com/luiszardo"><img src={Github} alt="" /></a>
        </SegundaFigure>
        <TerceiraFigure>
            <img src={Gmail} alt="" />
            <figcaption>luisbloomfieldzardo@gmail.com</figcaption>
        </TerceiraFigure>
        </Sessao>
    )
}

export default Contato