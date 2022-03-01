import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { query, collection, getDocs, doc , getDoc } from "firebase/firestore";
import db from "../firebase";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import {selectNewDisney} from "../features/movie/movieSlice" 




const Detail = (props) => {

    const { id } = useParams();
    const [detailData, setDetailData] = useState({});

    // console.log(detailData);

//      useEffect(() => {
//     db.collection("movies")
//       .doc(id)
//       .get()
//       .then((doc) => {
//         if (doc.exists) {
//           setDetailData(doc.data());
//         } else {
//           console.log("no such document in firebase 🔥");
//         }
//       })
//       .catch((error) => {
//         console.log("Error getting document:", error);
//       });
//   }, [id]);

    useEffect( async() => {
        const docRef = doc(db, "movies", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            setDetailData(docSnap.data());;
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })

    //     const q = query(collection(db, "movies")) 
    //     getDocs(q)
    //     .then((snapshot) => {
    //       snapshot.docs.forEach((doc) => {
    //         //   console.log(doc.id, "=>", doc.data());
    //         if (doc.exists) {
    //             //correspond a l'id du film selectionné
    //           setDetailData(doc.data());
    //         //   console.log(setDetailData)
    //         } else {
    //             //redirection page d'accueil
    //           console.log("no such document in firebase ");
    //         }
    //       })
    //     //   .catch((error) => {
    //     //     console.log("Error getting document:", error);
    //     //   });
    //   })}, [id]);


    const movies = useSelector(selectNewDisney);

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
        <Background>
            <img alt={detailData.title} src={detailData.backgroundImg} />
        </Background>
        <ImgTitle>
        <img alt={detailData.title} src={detailData.titleImg} />
        </ImgTitle>

        <Sub> {detailData.subTitle}</Sub>

        <ContentMeta>
        <Controls>
          <Player>
            <img src="/images/play-icon-black.png" alt="" />
            <span>Lecture</span>
          </Player>
          <Trailer>
            <img src="/images/play-icon-white.png" alt="" />
            <span>Bande-annnonce</span>
          </Trailer>
          <AddList>
          {/* <div>
              <img src="/images/plus-white.png" alt="" />
            </div> */}
            <span  />
            <span />
          </AddList>
          <GroupWatch>
            <div>
              <img src="/images/group-icon.png" alt="" />
            </div>
          </GroupWatch>
        </Controls>
      </ContentMeta>
      <Description>{detailData.description}</Description>
      <Suggest>
              <a href="/suggest">Suggestions</a>
              <a href="/bonus">Bonus</a>
              <a href="/plus">Détails</a>
     </Suggest>
     <Suggest1>
         <span />
     </Suggest1>

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
position: relative;
min-height: calc(100vh-250px);
overflow-x: hidden;
display: block;
height: 100vh
top: 72px;
padding: 0 calc(3.5vw + 5px);
`

const Background = styled.div`

  left: 0px;
  opacity: 0.5;
  position: fixed;  //position fixe pour suppersposer
  right: 0px;
  top: 0px;
  z-index: -1;
  
  img {
    width: 100vw;
    height:100vh;
    

    @media (max-width: 850px) {
     height: 100vh;
    }
  }
`;

const ImgTitle = styled.div`
align-items: flex-end;
display: flex;
-webkit-box-pack: start;
justify-content: flex-start;
margin: 0px auto;
height: 20vw;
min-height: 170px;
padding-bottom: 24px;
width: 100%; 

img {
  max-width: 400px;
  min-width: 200px;
  width: 35vw;
}
`;

const ContentMeta = styled.div`
maw-width: 874px;
`
const Controls = styled.div`
display : flex;
align-items: center;
// justify-content: start;
flew-flow: row nowrap;
margin: 24px 0px;
min-height: 56px;
`
const Player = styled.div`
border : 2px solid white;
border-radius: 5px;
color: #090b13;
background-color: white;
align-items: center;
padding : 0px 16px;
margin: 0px 22px 0 0;
font-size: 15px;
height: 56px;
cursor: pointer;
justify-content: center;
display: flex;
text-transform : uppercase;


img {
    width: 30px;
}

&: hover {
    background-color: rgb(198,198,198);
} 
`

const Trailer = styled.div`
border : 2px solid ;
border-radius: 5px;
color: white;
background-color: #090b13;
align-items: center;
padding : 0px 16px;
margin: 0px 22px 0 0;
font-size: 15px;
height: 56px;
cursor: pointer;
justify-content: center;
display: flex;
text-transform : uppercase;


img {
    width: 30px;
}

&: hover {
    background-color: rgb(198,198,198);
} `

const AddList = styled.div`
margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;

  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;
    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }
    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }

    &:hover {
        background-color: #f9f9f9;
    }


  }
`;

const GroupWatch = styled.div`
margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  `

const Description = styled.div`
font-size: 20px;
line-height: 1.6;
padding: 16px 0 ;
`
const Sub = styled.div`
font-size: 12px;
`

const Suggest = styled.nav`
display: flex;
position: relative;
justify-content: start;
flew-flow: row wrap;


a {
text-transform : uppercase;
cursor: pointer;
padding-right: 30px;
font-size: 22px;   
align-items: center; 

  &:hover {
      border-bottom: 2px solid;
  }
}
`
const Suggest1 = styled.div`

 span{
    border: 1px solid rgba(249,249,249, 0.5);
    width: 90vw;
    display: flex;
}
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

        //taille dépassement de slide        
        .slick-list {
             overflow:;
        }

        .slick-prev {
            left: -75px;
            
       }
       .slick-next {
           right: -75px;
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
 
  margin: 16px 8px;
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
  }`

export default Detail;



