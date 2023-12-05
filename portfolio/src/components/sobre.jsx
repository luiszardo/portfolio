import Imagem1 from "../image/img1.jpg"
import styled from "styled-components"
import Html from "../image/html.png"
import Css from "../image/css.png"
import Javascript from "../image/js.png"
import Reacao from "../image/react.png"


const Sessao = styled.section`
height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`

const Figure = styled.figure`
    height: 140vh;
    width: 100%;
    /* border:solid red; */
    display:flex;
    align-items: center;
    justify-content: space-evenly;

img{
    height: 60vh ;
    border-radius: 90px;
    &:hover{
        transform: scale(103%);
    }
    filter:drop-shadow(3px 3px 50px green);
    
}

figcaption{
    /* border:solid green; */
    height: 54vh;
    width: 55vw;
    border-radius: 12px;
    color: #ffffff;
    font-size: 20px;
    line-height: 1.5;
    font-family:"Black Ops One", sans-serif; 
    filter:drop-shadow(3px 3px 50px green);
}
span{
    margin-left: 27px;
}
`
const Titulo = styled.h1`
color: #ffffff;
font-size:40px;
/* position: relative;
top:60px; */
padding-top:70px;
font-family: "Monomaniac One", sans-serif;
`
const Figure2 = styled.figure`
width: 20vw;
position: relative;
bottom: 210px;
left: 20px;
display: flex;
justify-content: space-evenly;
.reacao{
    height: 35px;
    position: relative;
    top: 3px;
}
.js{
    position: relative;
    left: 14px;
}
img{
    border-radius: 30px;
}
figcaption{
    color: #ffffff;
    position: relative;
    top: 55px;
    right: 40px;
    font-family: "Monomaniac One", sans-serif;
    &:hover{
        transform: scale(110%);
        color: green;
    }
}
`




function Sobre (){
    return(
        <Sessao>
            <Titulo>Olá, Meu nome é Luis Henrique</Titulo>
        <Figure>
            <img src={Imagem1}alt="Uma foto minha" />
            <figcaption>
                <span>Meu</span> Nome é Luis Henrique Bloomfield Zardo, tenho 29 anos, sou natural do Rio Grande do Sul, aos 18 anos entrei como jovem aprendiz de Mecânico Diesel
                em uma empresa de Fretamento e Turismo no Estado do Rio de Janeiro e é onde permaneço até hoje como Mecânico Diesel, atualemente estou buscando fazer o que sempre gostei
                que é a área da tecnologia!.
                </figcaption>

        </Figure>
                <Figure2>
                    <img src={Html} alt="" />
                    <figcaption>Html</figcaption>
                    <img src={Css} alt="" />
                    <figcaption>Css</figcaption>
                    <img className="js" src={Javascript} alt="" />
                    <figcaption>JavaScript</figcaption>
                    <img className="reacao" src={Reacao} alt="" />
                    <figcaption>React</figcaption>
                    </Figure2>
        </Sessao>
    )
}

export default Sobre