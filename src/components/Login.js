import styled from 'styled-components';
import React from 'react';


// import { ToggleIcon } from './main';
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
                <Original>
                <img src="/images/original.png" alt="" />
                    <Original2>
                      <ul>
                      <h2>Regardez où et quand vous voulez</h2>
                        <li>Organisez des soirées virtuelles entre amis avec GroupWatch.Interrompez la vidéo, revenez sur vos scènes préférées et réagissez avec six amis maximum. Pour envoyez et recevoir des invitations Groupwatch, un abonnement est requis.</li>
                        <br></br>
                        <li>Téléchargez des films et des séries et regardez-les hors ligne</li>
                        <br></br>
                        <li>Sécurisez l'accès aux contenus avec le contrôle parental </li>
                        <br></br>
                        <li>Profitez de films et séries en 4K et son Dolby Atmos sur les appareils compatibles</li>
                        <br></br>
                        <li>Regardez en streaming sur quatre appareils en simultané</li>
                      </ul>
                    </Original2>
                </Original>
                <Accessible>
                  <h2>Accessible sur vos appareils préféres</h2>
                  <Accessible2>
                    <div>
                      <ul>
                      <img src="/images/TV.png" alt=""></img> 
                      <h3>Télévisions</h3> 
                        <li>Amazon Fire TV</li>
                        <li>Appareil Android TV</li>
                        <li>Apple TV</li>
                        <li>Chromecast</li>
                        <li>TV LG</li>
                        <li>Roku</li>
                        <li>Samsung</li>
                      </ul>
                    </div>
                    <div> 
                      <ul>
                      <img src="/images/ordi.png" alt=""></img> 
                      <h3>Ordinateurs</h3>
                        <li>Chrome OS</li>
                        <li>MacOS</li>
                        <li>PC Windows </li>
                      </ul>
                    </div>

                    <div> 
                      <ul>
                      <img src="/images/phone.png" alt=""></img> 
                      <h3>Mobiles et tablettes</h3> 
                        <li>Tablettes Amazon Fire</li>
                        <li>MObiles et tablettes Android</li>
                        <li>iPhone & iPad</li>                   
                      </ul>
                    </div>
                    <div>
                      <ul>
                      <img src="/images/ps.png" alt=""></img> 
                        <h3>Consoles de jeux</h3> 
                        <li>PS4</li>
                        <li>PS5</li>
                        <li>Xbox One</li>
                        <li>Xbox Series X</li>
                        <li>Xbox Series S</li>
                      </ul>
                    </div>
                  </Accessible2>
                </Accessible>

               



                  <Issue>
                  <div class="section-title">   
                        <h1>QUESTIONS FREQUEMMENT POSEES</h1>
                  </div>

                  {/* 1 toggle */}
                        <div class="tab-container">
                                <div class="tab-accordian">
                                          <div class="titleWrapper inactive">
                                                <h3>Qu'est-ce que Disney+ ?</h3>
                                                           <div class="collapse-icon">
                                                                <div class="acc-close"></div>
                                                                <div class="acc-open"></div>
                                                            </div>
                                          </div>
                                    <div id="descwrapper" class="desWrapper">
                                         <p>Disney+ est la destination des univers Disney, Pixar, Marvel, Star Wars, National Geographic, Star et encore +.</p><br></br>
                                         <p>Un abonnement à Disney+, c’est tout ce que vous imaginez et encore + :</p>
                                                    <ul>
                                                          <li class="">Retrouvez toutes les productions originales ainsi que les films, séries et courts-métrages issus des mondes Disney, Pixar, Marvel, Star Wars, National Geographic, Star* et encore +.</li>
                                                          <li class="">Téléchargez autant de films et séries que vous souhaitez sur jusqu'à 10 appareils.</li>
                                                          <li class="">Accédez à des films et séries en 4K UHD avec Dolby Vision et Dolby Atmos sur les appareils compatibles sans frais supplémentaires.</li>
                                                          <li class="">Utilisez le contrôle parental pour sécuriser l'accès aux contenus Disney+ ainsi que le profil Enfants pour les plus jeunes.</li>
                                                          <li class="">Regardez vos contenus préférés sur 4 appareils en simultané.</li>
                                                          <li class="">Découvrez GroupWatch, qui vous permettra de regarder à distance n'importe quel film ou série avec votre famille et vos proches via l'application Disney+.</li>
                                                    </ul>
                                         
                                    </div>
                                </div>
                            </div>

                  {/* 2 toggle */}

                    <div class="tab-container">
                                <div class="tab-accordian">
                                          <div class="titleWrapper inactive">
                                                <h3>Que puis-je regarder sur Disney+ ?</h3>
                                                           <div class="collapse-icon">
                                                                <div class="acc-close"></div>
                                                                <div class="acc-open"></div>
                                                            </div>
                                          </div>
                                    <div id="descwrapper" class="desWrapper">
                                         <p>Avec des milliers de films et de séries imaginés par les plus grands créateurs du monde entier et de nouveaux contenus ajoutés chaque mois, vous trouverez toujours quelque chose à regarder sur Disney+</p><br></br>
                                         
                                                    <ul>
                                                          <li class="">Accédez aux plus beaux classiques et nouveautés des studios Disney, comme Raya et le dernier dragon.</li>
                                                          <li class="">Découvrez des histoires émouvantes pour tous les âges, créées par les génies des studios Pixar, comme l'incontournable aventure italienne de l'été, Luca.</li>
                                                          <li class="">Vivez comme jamais l'histoire en constante évolution de l'Univers Cinématographique Marvel avec des séries exclusives des Studios Marvel comme WandaVision, Falcon et le Soldat de l'Hiver, Hawkeye et bien sûr Loki.</li>
                                                          <li class="">Revivez l'épopée de la saga Skywalker ou regardez en streaming la toute première série live-action Star Wars, The Mandalorian.</li>
                                                          <li class="">Ouvrez les yeux sur la richesse de notre planète grâce aux intrépides explorateurs de National Geographic et à leurs documentaires passionnants.</li>
                                                          <li class="">Avec Star, retrouvez enfin des séries dont tout le monde parle, comme Desperate Housewives, Malcolm, Les Simpson ou l'intégrale de la série Futurama, imaginée par les mêmes créateurs.</li>
                                                    </ul>
                                         
                                    </div>
                                </div>
                            </div>

                          {/* 3 toggle */}

                          <div class="tab-container">
                                <div class="tab-accordian">
                                          <div class="titleWrapper inactive">
                                                <h3>Quel est le prix de l'abonnement Disney+ ?</h3>
                                                           <div class="collapse-icon">
                                                                <div class="acc-close"></div>
                                                                <div class="acc-open"></div>
                                                            </div>
                                          </div>
                                    <div id="descwrapper" class="desWrapper">
                                         <p>Disney+ est disponible pour 8,99 € par mois. Vous pouvez aussi économiser plus de 15 %* en vous abonnant pour 12 mois au prix de 89,90 €.Vous pouvez également offrir un an de Disney+ à un ami ou un membre de votre famille en cliquant ici.</p><br></br>
                                      
                                                    <p>* Voir conditions d’abonnement. Comparatif entre 12 mois d'abonnement mensuel et l'abonnement annuel</p>
                                                    
                                    </div>
                                </div>
                            </div>
                          {/* 4 toggle */}

                          <div class="tab-container">
                                <div class="tab-accordian">
                                          <div class="titleWrapper inactive">
                                                <h3>Quels appareils et plateformes puis-je utiliser avec Disney+ ?</h3>
                                                           <div class="collapse-icon">
                                                                <div class="acc-close"></div>
                                                                <div class="acc-open"></div>
                                                            </div>
                                          </div>
                                    <div id="descwrapper" class="desWrapper">
                                         <p>Disney+ est accessible sur mobiles, navigateurs Web, consoles de jeux, décodeurs TV et TV connectées. Cliquez ici pour retrouver la liste complète des appareils compatibles.</p><br></br>        
                                    </div>
                                </div>
                            </div>
                          {/* 5 toggle */}

                          <div class="tab-container">
                                <div class="tab-accordian">
                                          <div class="titleWrapper inactive">
                                                <h3>Qu'est-ce que Disney+ ?</h3>
                                                           <div class="collapse-icon">
                                                                <div class="acc-close"></div>
                                                                <div class="acc-open"></div>
                                                            </div>
                                          </div>
                                    <div id="descwrapper" class="desWrapper">
                                         <p>Disney+ est sans engagement et vous pouvez annuler votre abonnement quand vous le souhaitez. L'annulation sera effective à la fin de la période pour laquelle vous avez payé. Pour vous désabonner, suivez ces 5 étapes:</p><br></br>
                          
                                                    <ul>
                                                          <li class="">Identifiez-vous sur www.DisneyPlus.com</li>
                                                          <li class="">Sélectionnez votre profil</li>
                                                          <li class="">Sélectionnez Compte</li>
                                                          <li class=""> Sélectionnez Résilier l’abonnement</li>
                                                          <li class="">Sélectionnez Continuer pour résilier</li>
                                                    </ul>       
                                                    <p>Pour plus d'informations, cliquez ici.</p>                                  
                                    </div>
                                </div>
                            </div>
                       

                    
                </Issue>
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
  // padding-left: 40px;

  @media ( max-width: 800px){
  padding:0;
  }

  
`;

const Content = styled.div`
 
  // margin-bottom: 10vw;
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

const Issue = styled.div`

.container-inner {
	width: 90%;
	max-width: 1200px;
    margin: 0 auto;
    padding: 60px 0;

    @media ( max-width: 650px){
      width: 50%;
     
  
    }
}

.section-title{
  padding: 10px 7rem;
}
.section-title h1{
  margin-top: 150px;
  font-weight: 700;
  font-size: 40px;
  line-height: 45px;
  color: #f9f9f9;
}

.tab-container{
  padding: 0px 20px;
}

/* Tab Accordian */

h3 {
  font-size: 1rem;
  font-weight: 700;
  line-height: 20px;
  color: #f9f9f9;
  margin: 0;
}

ul li,
p{
  font-weight: 400;
  font-size: .88rem;
  line-height: 20px;
  color: #f9f9f9;
  text-align: left;
  color: #C0C0C0;
  
}


.tab-accordian ul{
  padding-left: 22px;
}
.tab-accordian p{
  margin-top: 0;
}

.tab-accordian{
  width: 100%;
  box-shadow: 0 10px 30px rgba(0,0,0,.08);
  border-radius: 4px;
  border: none ;
  background-color:#13151d;
  background: transparent;
  margin-bottom: 20px;
  overflow: hidden;
}

.titleWrapper{
  padding: 20px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #13151d;
  -webkit-user-select: none;
  user-select: none;
  transition: background-color .8s linear;
}

// .titleWrapper.active{  
//    background-color: #13151d;
//  } 

.desWrapper{
  background: #13151d;
  max-height: 500px;
  display: none;
  padding: 20px;
  transition: max-height 1s ease-in;
}

/* Collapse Icon */

.collapse-icon{
  position: relative;
}
.collapse-icon .acc-close{
  height: 20px;
  border-left: 2px solid #f9f9f9;
  transition: all .5s ease-in-out;
  transform: rotate(-90deg);
  opacity: 1;
}

.collapse-icon .acc-open {
width: 19px;
position: absolute;
border-top: 2px solid #f9f9f9;
transition: all .5s ease-in-out;
transform: rotate(90deg);
top: 43%;
right: -8px;
}

.titleWrapper.active .collapse-icon{
  transition: all .5s ease-in-out;
transform: rotate(180deg);
}

.titleWrapper.inactive .collapse-icon{
  transition: all .5s ease-in-out;
transform: rotate(-180deg);
}

.titleWrapper.active .collapse-icon .acc-open{ 
  opacity: 0;
}
`



const Original = styled.div`
display: flex;
position:relative;
margin-top: 100px;
justify-content: center;
align-items: center;
flex-direction: row;



  img{
     width: 700px;
     height: 600px;}

     @media screen and (min-width: 600px) and (max-width: 1000px) {
      flex-direction: column;

      img {
        margin-top: 100px;
         width: 400px;
         height: 300px;
       }
      }

     @media ( max-width: 599px){
        flex-direction: column;
        padding:0;

        img {
          margin-top: 150px;
          width:300px;
          height: 200px;
         }

         ul {
           padding: 0;
         }

         }
        

  }

`
const Original2 = styled.div`
display:flex;
text-align:left;
padding : 100px 50px;
line-height: 25px;
font-size: 20px;
color: #C0C0C0;

h2 {
  color: #f9f9f9;
  font-size: 40px;
}

@media ( max-width: 1100px){
  padding: 0;
 li {
   font-size: 15px;
   padding:0;
 }
 h2 {
   font-size: 30px;
   padding:0;
 }

`

const Accessible = styled.div`
margin-top: 150px;
padding:0;

  h2 {
    font-size: 40px;
  }

  @media (max-width: 1000px){
    padding:0;

    h2 {
      font-size: 25px;
    }
  }
`

const Accessible2 = styled.div`
display: grid;
position: relative;
grid-template-columns:repeat(4, 1fr);
justify-content: space-between;
align-items: center;
padding:0;


  h3{
    font-size: 30px;
    color: #f9f9f9;
  }

   img{
     width: 400px;
     height: 200px;
   }

   ul {
    list-style-type: none;
    color : #C0C0C0;
    line-height: 30px;
   }

   @media (max-width: 1500px) {
    grid-template-columns: repeat(4, 1fr);
    padding:0;
    margin:0;

       img {
         width:200px;
         height:100px;
       }

       ul{
         font-size: 15px;
       }
       h3{
         font-size: 20px; 
       }    

    @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    padding:0;
    margin:0;

       img {
         width:200px;
         height:100px;
       }

       ul{
         font-size: 15px;
         padding:0;
         margin:0;
       }
       h3{
         font-size: 20px; 
       }   

`
const CTA = styled.div`
max-width: 650px;
width: 100%;
display: flex;
flex-direction: column;
height:100vh;
padding-left: 40px;
`;

const CTALogoOne = styled.img`
margin-top:100px;
max-width: 150px;
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
  height: 40%;
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
padding: 12px 30px;
border: 1px solid transparent;
border-radius: 4px;
&:hover {
  background-color: #0483ee;
}


`;


export default Login;

