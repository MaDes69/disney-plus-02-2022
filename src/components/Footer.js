import styled from "styled-components";


const Footer = (props) =>{
    return (
        <Container>
            <ImgOne>
               <img src="./images/Diney+.png" alt="disneyLogo" />
            </ImgOne>
            <Description>
                <li>Regles de Respect de la Vie Privée</li>
                <li>Modalités relatives aux cookies</li>
                <li>Droits Données dans l'UE et R-U</li>
                <li>A propos de Disney+</li>
                <li>Conditions générales d'abonnement</li>
                <li>Aide</li>
                <li>Appareils compatibles</li>
                <li>A propos de Disney+</li>
                <li>Publicités ciblées par centres d'intérêt</li>
                <li>Gérer vos préférences</li>
            </Description>
            <Description>
                <p>© Disney. Tous droits réservés. </p>
            </Description>

           
        </Container>
    )
}

const Container = styled.footer`
margin-top:70px;
background-color: #090b13;
height:20vh;
display: block;

@media (max-width: 1400px) {
    height: 60vh;
   }
`

const ImgOne = styled.p`
padding-top: 20px;
justify-content: center;
align-items: center;
position: relative;
display: flex;
    img { 
       height: 38px;
       width: 63px; 
    }
`

const Description = styled.a`

display: flex;
justify-content:center;
flex-flow: row wrap;
position : relative;
cursor: pointer;
font-size: 12px;
line-height: 1.5;
font-family: Avenir-Roman,sans-serif;

 p{
     color:#CACACA;
 }

 li {
    margin: 11px 5px 10px;
    padding: 1px 6px;
    align-items: center;
    color: #CACACA;
    list-style:none;

        &:hover{
            color: #f9f9f9;
        }
 }
`



export default Footer;