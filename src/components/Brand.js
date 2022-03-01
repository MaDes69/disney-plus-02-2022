import styled from "styled-components";
import { Player } from 'video-react';


const Brand = ( props ) => {
    return(
        <Container>
            <Wrap>
                 <img src="/images/viewers-disney.png" alt="" />
                 <video autoPlay={true} loop={true} playsInline={true}>
                   <source src="./videos/disney.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-pixar.png" alt="" />
                <video autoPlay={true} loop={true} playsInline={true}>
                     <source src="./videos/pixar.mp4" type="video/mp4" />
                 </video>
            </Wrap>
            <Wrap>
                <img src="./images/viewers-marvel.png" alt="" />
                <video autoPlay={true} loop={true} playsInline={true}>
                     <source src="./videos/marvel.mp4" type="video/mp4" />
                 </video>
            </Wrap>
            <Wrap>
                <img src="./images/viewers-starwars.png" alt="" />
                <video autoPlay={true} loop={true} playsInline={true}>
                     <source src="./videos/star-wars.mp4" type="video/mp4" />
                 </video>
            </Wrap>
            <Wrap>
                <img src="./images/viewers-national.png" alt="" />
                <video autoPlay={true} loop={true} playsInline={true}>
                     <source src="./videos/national-geographic.mp4" type="video/mp4" />
                 </video>
            </Wrap>
            <Wrap>
                <img src="./images/viewers-star.png" alt="" />
                <video autoPlay={true} loop={true} playsInline={true}>
                     <source src="./videos/brand-star.mp4" type="video/mp4" />
                 </video>
            </Wrap>  
           
        </Container>
    ) 
}


const Container= styled.div`
    margin-top: 30px;
    padding: 30px 0px 26px;
    display:grid;
    grid-gap: 25px;
    gap:25px;
    grid-template-columns: repeat(6, minmax(0, 1fr));


    @media ( max-width: 1024px) {
        grid-template-columns : repeat(3, minmax(0,1fr));
    }

    @media ( max-width: 600px) {
        grid-template-columns : repeat(2, minmax(0,1fr));
    }

    @media ( max-width: 480px) {
        grid-template-columns : repeat(1, minmax(0,1fr));
    }
`


const Wrap= styled.div`

 padding-top: 56.25%;
 cursor:pointer;
 border: 3px solid rgba(249, 249,249,0.1);
 border-radius: 7px;
 box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
 rgb(0 0 0 / 73%) 0px 16px 10px -10px;
 overflow: hidden;
 position: relative;
 transition : all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
 
    img {
        inset: 0px;
        display: block;
        height: 100%;
        object-fit: cover;
        opacity: 1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        width: 100%;
        z-index: 1;
        top: 0;
    }

    video{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        opacity: 0;
        z-index: 0;
        object-fit:cover;
        
    }

    &:hover {
        border: 4px solid rgba(249, 249, 249, 0.8);
        transform: scale(1.05);
    
        video {
            opacity:1 ;
        }
    }
`;

export default Brand;