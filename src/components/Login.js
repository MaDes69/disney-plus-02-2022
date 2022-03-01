import styled from 'styled-components';
import React from 'react';
// import { render } from 'react-dom';

const Login = (props) => {
    return(
        <Container>
           <Content>
               <CTA>
                   <CTALogoOne src="/images/diney+.png" alt=""/>
                   <Description2>Les histoires que vous imaginez + Beaucoup d’autres</Description2>
                   <Wrap>
                     <Description3><span>8,99 €</span> par mois
                      Sans engagement*. Voir conditions d'abonnement.</Description3>
                     <Description3><span>89,90 €</span>pour un an
                      Économisez plus de 15%**. Voir conditions d’abonnement.</Description3>
                   </Wrap>
                   <Wrap>
                   <SignUp>S'INSCRIRE</SignUp>
                   <SignUp>ECONOMISER SUR 12MOIS</SignUp>
                   </Wrap>
                   <Description>* Résiliation effective à la fin de la période de facturation en cours. ** Comparatif entre 12 mois d'abonnement mensuel et l'abonnement annuel.</Description>
                </CTA>
                <BgImage />
           </Content>
        </Container>
    )
};


// style  page login 

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  padding-left: 40px;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;

  @media ( max-width: 768px){
    align-items: center;

  }
`;


const CTA = styled.div`
max-width: 650px;
width: 100%;
display: flex;
flex-direction: column;
`;

const CTALogoOne = styled.img`

max-width: 200px;
min-height: 100px;
display: block;
width: 100%;

`;


const Description = styled.p`
 color:#f9f9f9;
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
  text-align:left;

`;

const Description2 = styled.h1`
  color:#f9f9f9;
  font-size: 44px;
  magin: 0px 0px 30px;
  text-align: left;
  line-height: 1.5;
`;


const Description3 = styled.p`
  color: #C0C0C0;
  font-size: 13px;
  font-family:'Avenir', sans-serif;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
  text-align:left;

   span{
      font-size:25px;
      font-weight: bold;
    }

    @media ( max-width: 751px) {
      display:none;
    }
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/homee.png");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;

  @media( max-width:768px) {
    background-image: url("/images/homeee.png");
    
  }
`;

const Wrap = styled.div`
display:grid;
grid-template-columns: 300px 300px;
grid-gap: 20px;


@media ( max-width: 751px) {
  grid-template-columns : repeat(1, minmax(0,1fr));
}
  
}
`
const SignUp = styled.a`
font-family:Avenir, sans-serif;
font-weight: bold;
color: #f9f9f9;
background-color: #0063e5;
margin-bottom: 12px;
width: 100%;
letter-spacing: 1.5px;
font-size: 18px;
padding: 16.5px 30px;
border: 1px solid transparent;
border-radius: 4px;
&:hover {
  background-color: #0483ee;
}


`;


export default Login;

