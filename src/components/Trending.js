import styled from "styled-components"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import {selectTrending} from "../features/movie/movieSlice" 

const Trending = (props) => {

  const movies = useSelector(selectTrending);

    let settings = {
        infinite: true,
        speed: 150,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };


    return (
     
        <Container>
           <h4>Tendances</h4>
            <Content {...settings}>

            {movies &&
          movies.map((movie, key) => (
          
            <Wrap key={key}>
              {/* {movie.id} */}
              <Link to={`/detail/` + movie.id}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </Wrap>
          ))}
     
           </Content>
         </Container>

         
    )
}


const Container = styled.div`
padding : 0  0  26px;
`

const Content = styled(Slider)`
margin-top : 20px; 

// disparition boutton gauche et droite 
& > button {
    opacity : 0;
    height: 100%;
    width: -5vw;
    z-index: 1;

        &:hover {
            opacity:1;
            transition: opacity 0.2s ease 0s;
        }
}
`

const Wrap = styled.div`

border-radius: 5px;
cursor: pointer;
position: relative;

a {
  border-radius: 10px;
  //ombre sous la boite 
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
  rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  display: block;
  position: relative;
  margin-left: 5px;
  padding: 4px;
      img {
            width: 100%;
            height: 100%;
            border-radius: 10px;
          }
              &:hover {
                padding: 0;
                border: 4px solid rgba(249, 249, 249, 0.8);
                transition-duration: 300ms;
              }
  }
`

export default Trending;