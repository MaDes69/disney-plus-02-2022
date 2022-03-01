import styled from "styled-components";
import Caroussel from "./Caroussel";
import Brand from "./Brand";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommandations from "./Recommandations";
import Trending from "./Trending";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import { query, collection, getDocs } from "firebase/firestore";
import db from "../firebase";




const Home = ( props ) => {

   const dispatch = useDispatch();
   const userName = useSelector(selectUserName);
   let recommandations = [];
   let newDisney = [];
   let originals = [];
   let trending = [];



  //  hook - renvoie les données de la db firebase

    useEffect(() => {
    //  const db = firebase.firestore()
    //  const movieRef = doc(db, 'movies')
    //  const categorie = movieSnap.data()
    // const q = query(collection(db, "movies"), where("backgroundImg", "cardImg", "description", "subTitle", "title", "titleImg", "type"));
    // const unsubscribe = onSnapshot(q, (querySnapshot) => {
    //   querySnapshot.forEach((doc) => {
    

    const q = query(collection(db, "movies")) 
    getDocs(q)
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        // console.log(recommandations);

        switch (doc.data().type) {
          case "recommend":
            recommandations = [...recommandations, { id: doc.id, ...doc.data() }];
             break;

           case "new":
            newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
           break;

           case "trending":
             trending = [...trending, { id: doc.id, ...doc.data() }];
             break;
        }
      });
    
           dispatch ( 
             setMovies({
             recommend: recommandations,
             newDisney: newDisney,
             original: originals,
             trending: trending,
           })
          );

        })
       }, [userName]);

    
    return ( 
    <Container>
        <Caroussel />
        <Brand />
        <NewDisney />
        <Originals />
        <Recommandations />
        <Trending />
    </Container>)
};

const Container = styled.main`
position: relative;
min-height: calc(100vh - 250px);
overflow-x: hidden;
display: block;
top: 72px;
padding: 0 calc(3.5vw + 5px);
&:after {
  background: url("/images/home-background.png") center center / cover
    no-repeat fixed;
  content: "";
  position: absolute;
  inset: 0px;
  opacity: 1;
  z-index: -1;
}`

export default Home;