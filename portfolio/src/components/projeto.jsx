import Disney from "../image/disney.png"
import Cachorro from "../image/cachorro.png"
import Cafe from "../image/café.png"
import Inverno from "../image/inverno.png"
import styled from "styled-components"
import Thewitcher from "../image/thewitcher.png"
import SiteFilmes from "../image/filmes.png"
import Contador from "../image/contador.png"
import Calculadora from "../image/calculadora.png"
import Css from "../image/css.png"
import Html from "../image/html.png"
import Reacao from "../image/react.png"


const Main = styled.main`
/* border: solid red; */
height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;

`
const PrimeiraSessao = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;

figure{
    /* border: solid green; */
    border-radius: 10px;
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 30px;
    filter:drop-shadow(3px 3px 50px green);
    &:hover{
        transform: scale(101%);
    }
}
img{
    border-radius: 10px;
    height: 30vh;
    width: 20vw;
    /* border: solid green; */
}
.html{
    height: 6vh;
    width: 4vw;
    position: relative;
    right: 30px;
}
.css{
    height: 6vh;
    width: 4vw;
    position: relative;
    left: 30px;
    bottom: 40px;
}
figcaption{
    width: 20vw;
    color: #ffffff;
    font-family: "Black Ops One", sans-serif;
    /* border: solid red; */
}
button{
    border-radius: 10px;
    border: solid green;
    font-size: 16px;
    font-weight: bold;
    background-color: #ffffff;
    width: 8vw;
    height: 6vh;
    &:hover{
        background-color: green;
        color: black;
    }
}
`
const SegundaSessao = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;

figure{
    border-radius: 15px;
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-top: 30px;
    filter:drop-shadow(3px 3px 50px green);
    &:hover{
        transform: scale(101%);
    }
}
img{
    border-radius: 10px;
    height: 30vh;
    width: 20vw;
    /* border: solid green; */
}
.html{
    height: 6vh;
    width: 4vw;
    position: relative;
    right: 30px;
}
.css{
    height: 6vh;
    width: 4vw;
    position: relative;
    left: 30px;
    bottom: 40px;
}
.react{
    height: 4vh;
    width: 2vw;
}
figcaption{
    width: 20vw;
    color: #ffffff;
    font-family: "Black Ops One", sans-serif;
    /* border: solid red; */
}
button{
    border-radius: 10px;
    border: solid green;
    font-size: 16px;
    font-weight: bold;
    background-color: #ffffff;
    width: 8vw;
    height: 6vh;
    &:hover{
        background-color: green;
        color: black;
    }
}
a{

}
`

function Projetos (){

    return(
        <Main>
    <PrimeiraSessao>    
       <figure>
            <img src={Disney} alt="" />
            <figcaption>Este projeto foi inspirado na platafomar Disney Plus. Acesse o Github com o botão abaixo!</figcaption>
            <img className="html" src={Html} alt="" />
            <img className="css" src={Css} alt="" />
            <a target="_blank" href="https://github.com/luiszardo/desafio-disney"><button>Github</button></a>
        </figure>
        <figure>
            <img src={Inverno} alt="" />
            <figcaption>Este projeto foi inspirado na estação do inverno. Acesse o Github com o botão abaixo!</figcaption>  
            <img className="html" src={Html} alt="" />
            <img className="css" src={Css} alt="" />
            <a target="_blank" href="https://github.com/luiszardo/Desafio-de-inverno"><button>Github</button></a>
        </figure>      
        <figure>
            <img src={Cafe} alt="" />
            <figcaption>Este projeto foi inpirado em um site de café. Acesse o Github com o botão abaixo!</figcaption>
            <img className="html" src={Html} alt="" />
            <img className="css" src={Css} alt="" />
            <a target="_blank" href="https://github.com/luiszardo/site-coffe"><button>Github</button></a>
        </figure>
        <figure>
            <img src={Cachorro} alt="" />
        <figcaption>Este site foi o Desafio final do curso Vai na Web. Acesse o Github com o botão abaixo!</figcaption>
            <img className="html" src={Html} alt="" />
            <img className="css" src={Css} alt="" />
        <a target="_blank" href="https://github.com/luiszardo/desafio-final"><button>Github</button></a>
       </figure>
    </PrimeiraSessao>
    <SegundaSessao>
        <figure>
            <img src={Thewitcher} alt="" />
            <figcaption>Este site foi feito inspirado na serie The witcher. Acesse o Github com o botão abaixo!</figcaption>
            <img className="html" src={Html} alt="" />
            <img className="css" src={Css} alt="" />
            <a target="_blank" href="https://github.com/luiszardo/site-the-witch"><button>Github</button></a>
        </figure>
        <figure>
            <img src={SiteFilmes} alt="" />
            <figcaption>Fiz este site de filmes como projeto pessoal. Acesse o Github com o botão abaixo!</figcaption>
            <img className="react" src={Reacao} alt="" />
            <a target="_blank" href="https://github.com/luiszardo/site-filmes"><button>Github</button></a>
        </figure>
        <figure>
            <img src={Contador} alt="" />
            <figcaption>Esse contador foi feito como Desafio 2 do curso Vai na Web. Acesse o Github com o botão abaixo!</figcaption>
            <img className="react" src={Reacao} alt="" />
            <a target="_blank" href="https://github.com/luiszardo/desafio-2react"><button>Github</button></a>
        </figure>
        <figure>
            <img src={Calculadora} alt="" />
            <figcaption>Essa Calculadora foi feito como o Desafio 3 do curso Vai na Web.  Acesse o Github com o botão abaixo!</figcaption>
            <img className="react" src={Reacao} alt="" />
            <a target="_blank" href="https://github.com/luiszardo/desafio-calculadora"><button>Github</button></a>
        </figure>
    </SegundaSessao>

        </Main>
    )
}

export default Projetos