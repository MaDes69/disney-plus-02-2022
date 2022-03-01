import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Caroussel = (props) => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };


    return (
        <div>
            <Carousel {...settings}>
                <Wrap>
                <a>
                    <img src="./images/M&C.PNG" alt="slide1" />
                </a>
                </Wrap>
                <Wrap>
                <a>
                    <img src="./images/slider-badag.jpg" alt="slide2" />
                </a>
                </Wrap>
                <Wrap>
                <a>
                    <img src="./images/eternel.PNG" alt="slide3" />
                </a>
                </Wrap>
                <Wrap>
                <a>
                    <img src="./images/slider-scale.jpg" alt="slide4" />
                </a>
                </Wrap>
                <Wrap>
                <a>
                    <img src="./images/boba.PNG" alt="slide5" />
                </a>
                </Wrap>
              
            </Carousel>
        </div>
        
    )
};

const Carousel = styled(Slider)`
    margin-top : 20px; 

    // disparition boutton gauche et droite 
    & > button {
        opacity : 0;
        height: 100%;
        width: 5vw;
        z-index: 1;

            &:hover {
                opacity:1;
                transition: opacity 0.2s ease 0s;
            }
    }


//bouton sous images 
    ul li button {
            &:before{
                font-size: 10px;
                color: rgb(150, 158, 171);
            }
    }

//button actif representant la slide active
        li.slick-active button:before {
                color: rgb(249, 249, 249);
         }
//taille dépassement de slide        
        .slick-list {
             overflow: initial;
        }
//taille bouton slide gauche droite
         .slick-prev {
             left: -75px;
             
        }
        .slick-next {
            right: -75px;
            
         }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  a {
    border-radius: 4px;
    //ombre sous la boite 
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;
        img {
              width: 100%;
              height: 100%;
            }
                &:hover {
                  padding: 0;
                  border: 4px solid rgba(249, 249, 249, 0.8);
                  transition-duration: 300ms;
                }
    }
`;


          
export default Caroussel;